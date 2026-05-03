import { useParams } from 'react-router-dom';
export default function PublicMenuPage(){const {slug}=useParams();return <section className='p-6'><h1 className='text-2xl font-semibold'>Cardápio Digital</h1><p>Loja: {slug}</p></section>;}
