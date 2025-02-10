"use client";
import Link from "next/link";
import * as React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./login.module.css";
import { signInAction } from "@/supabase/actions";

function Login() {


  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    const password = event.target.password.value;
    await signInAction(user, password);
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        {/* Sección izquierda con el logo */}
        <div className={styles["logo-container"]}>
          <img
            src=".../"
            alt=""
            className={styles["login-logo"]}
          />
        </div>

        {/* Sección derecha con el formulario */}
        <div className={styles["form-container"]}>
          <h1 className={styles["form-title"]}>Ingresar al sistema</h1>
          <p className={styles["form-subtitle"]}>
            Ingrese sus credenciales para iniciar sesión.
          </p>

          <form className="w-full max-w-md mt-6 space-y-5" onSubmit={handleSubmit}>
            {/* Usuario */}
            <div className={styles["input-field"]}>
              <label htmlFor="user" className={styles["input-label"]}>
                Correo
              </label>
              <div className="relative">
                <UserOutlined className={styles["input-icon"]} />
                <input
                  type="text"
                  id="user"
                  name="user"
                  className={styles["input"]}
                  placeholder="Ingrese su usuario"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div className={styles["input-field"]}>
              <label htmlFor="password" className={styles["input-label"]}>
                Contraseña
              </label>
              <div className="relative mb-6">
                <LockOutlined className={styles["input-icon"]} />
                <input
                  id="password"
                  name="password"
                  className={styles["input"]}
                  placeholder="Ingrese su contraseña"
                  type="password"
                />
              </div>
            </div>

            {/* Botón de inicio de sesión */}
            <button type="submit" className={styles["submit-button"]}>
              Iniciar Sesión
            </button>

            {/* Enlace de registro */}
            <div className={styles["register-link-container"]}>
              <p className="text-gray-600">¿No tienes una cuenta? </p>
              <Link href="/registro">
              <span className="ml-2 text-[#1b1541]  hover:underline cursor-pointe">Regístrate</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;