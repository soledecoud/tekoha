import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenidos a la aplicación FastAPI</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/register">
              <a className="text-blue-500 hover:underline">Registro</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="text-blue-500 hover:underline">Inicio de Sesión</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}