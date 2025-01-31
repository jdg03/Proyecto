import Link from 'next/link';

function login() {
    
    return (
        <div className="">
            <h1>login</h1>
            <p>Welcome to the login</p>
            <div>
           
        <Link href="/inicio/inventario">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Iniciar
            </button>
        </Link>
        </div>
        </div>
    );
}

export default login;