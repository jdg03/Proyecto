import Link from "next/link";

function Registro() {

    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Registro de Usuario</h2>

                <form action=""className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nombre completo"
                        />
                    </div>

                    {/* Usuario */}
                    <div>
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">Correo</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese su correo"
                        />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="pass"
                            name="pass"
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                    <div>
                        <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Repita su contraseña</label>
                        <input
                            type="repeat-password"
                            id="repeat-pass"
                            name="repeat-pass"
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Repita su contraseña"
                        />
                    </div>


                    {/* Botón de Registro */}
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-300"
                    >
                        Registrarse
                    </button>
                    <Link href="/login" className="flex items-center justify-center">
                      <span className="ml-2 text-[#1b1541]  hover:underline cursor-pointe">Ya tengo una cuenta</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Registro;
