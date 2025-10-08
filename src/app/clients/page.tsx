import { Client } from '@/types';
import Link from 'next/link';

export default async function ClientList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/clients`, {
    cache: 'no-store',
  });
  const clients: Client[] = await res.json();

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Clientes</h1>
        <Link href="/clients/new" className="btn">Novo Cliente</Link>
      </div>
      <ul className="space-y-2">
        {clients.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            {c.name} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
