import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@saborflow.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();
  const setToken = useAuthStore((s) => s.setToken);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { email, password });
    setToken(data.accessToken);
    navigate('/');
  }

  return <div className='min-h-screen grid place-items-center bg-slate-100'><form onSubmit={onSubmit} className='bg-white shadow p-6 rounded-lg w-full max-w-sm space-y-3'><h1 className='text-2xl font-bold'>Entrar no SaborFlow</h1><input className='w-full border p-2 rounded' value={email} onChange={(e)=>setEmail(e.target.value)} /><input className='w-full border p-2 rounded' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><button className='bg-emerald-600 text-white w-full p-2 rounded'>Entrar</button></form></div>;
}
