import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { supabase } from "../lib/supabaseClient"; // Asegúrate de la ruta correcta

export const updateSession = async (request) => {
  try {
    // Crear una respuesta sin modificar
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({
              request,
              headers: request.headers,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // Actualizar la sesión si ha expirado
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    console.log("Middleware - Después de supabase.auth.getUser() - user:", user);
    console.log("Middleware - Después de supabase.auth.getUser() - userError:", userError);

    const requestedPath = request.nextUrl.pathname;
    const publicPaths = ["/", "/sign-in", "/sign-up"]; // Definir rutas públicas
    const isPublicPath = publicPaths.includes(requestedPath);

    // Verificación de autenticación inicial para rutas protegidas
    if (!user && !isPublicPath) {
      const loginUrl = new URL(`/sign-in`, request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Lógica basada en roles (solo si el usuario está autenticado)
    if (user) {
      const { data: userProfile, error: profileError } = await supabase
        .from("user") // Verificar el nombre real de la tabla
        .select("id, role")
        .eq("id", user?.id)
        .single();

      console.log("Middleware - profileData:", JSON.stringify(userProfile, null, 2));

      if (userProfile && userProfile.role) {
        console.log("prueba role 0");
        const userRole = userProfile.role;

        if (userRole === "admin") {
          console.log("prueba role 1");
          console.log(userRole);
          if (request.nextUrl.pathname.startsWith("/user")) {
            return NextResponse.redirect(new URL("/inicio", request.url));
          }
        } else {
          console.log("prueba role 2");
          console.log(userRole);
          if (
            request.nextUrl.pathname.startsWith("/admin") ||
            request.nextUrl.pathname.startsWith("/inicio")
          ) {
            return NextResponse.redirect(new URL("/user", request.url));
          }
        }
      } else {
        console.error("Error al obtener el perfil o rol del usuario en el middleware:", profileError);
      }
    }

    return response;
  } catch (e) {
    // Si falla la creación del cliente de Supabase, devolver una respuesta estándar
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/protected/:path*",
    "/inicio/:path*",
  ],
};
