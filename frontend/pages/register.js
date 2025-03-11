import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';

export default function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/auth/register', {
        email,
        firstName,
        lastName,
        username,
        password,
      });
      router.push('/login');
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleGoogleSignUp = () => {
    // Aquí puedes agregar la lógica para el registro con Google
    console.log('Registro con Google');
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Registro</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <FormInput label="Correo Electrónico" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput label="Nombre" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <FormInput label="Apellido" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <FormInput label="Usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Registrar
        </button>
        <button type="button" onClick={handleGoogleSignUp} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Registrar con Google
        </button>
      </form>
    </Layout>
  );
}