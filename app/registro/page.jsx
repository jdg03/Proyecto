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
                        />
                    </div>

                    {/* Usuario */}
                    <div>
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">Usuario</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        />
                    </div>

                    {/* Botón de Registro */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registro;
