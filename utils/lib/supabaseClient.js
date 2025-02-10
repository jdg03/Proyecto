// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getProfile() {
    console.log("getProfile() - Iniciando ejecución");

    const { data: session, error: sessionError } = await supabase.auth.getSession();

    console.log("getProfile() - Después de getSession(), session:", session, "sessionError:", sessionError);

    const currentUser = session?.session?.user;

    if (!currentUser) {
        console.log("getProfile() - No hay usuario autenticado (currentUser es null)");
        return null;
    }

    if (sessionError) {
        console.error("getProfile() - Error obteniendo sesión:", sessionError);
        return { user: currentUser, userProfile: null, error: sessionError };
    }

    const { data: userProfile, error: profileError } = await supabase
        .from('user')
        .select('id, role')
        .eq('id', currentUser.id)
        .single();

    console.log("getProfile() - Después de consulta a 'user' table, userProfile:", userProfile, "profileError:", profileError);

    if (profileError) {
        console.error("getProfile() - Error obteniendo perfil de usuario de la tabla 'user':", profileError);
        return { user: currentUser, userProfile: null, error: profileError };
    }

    console.log("getProfile() - Retornando ProfileResult exitosamente, userProfile:", userProfile);
    return { user: currentUser, userProfile };
}
