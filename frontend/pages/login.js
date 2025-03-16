import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', null, {
        params: {
          username,
          password,
        },
      });
      console.log('Token:', response.data.access_token);
      // Aquí puedes guardar el token en el almacenamiento local o en el estado global
      router.push('/');
    } catch (error) {
      setError(error.response?.data?.detail || 'Error iniciando sesión');
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Inicio de Sesión</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <FormInput label="Usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Iniciar Sesión
        </button>
      </form>
    </Layout>
  );
}