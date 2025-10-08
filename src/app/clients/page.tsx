import { Client } from '@/types';
import Link from 'next/link';

export default async function ClientList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/clients`, {
    cache: 'no-store',
  });
  const clients: Client[] = await res.json();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Link
          href="/clients/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Novo Cliente
        </Link>
      </div>

      <div className="space-y-4">
        {clients.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
          >
            <p className="text-gray-800 font-semibold text-lg">{c.name}</p>
            <p className="text-gray-600 text-sm">{c.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
