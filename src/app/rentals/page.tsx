import { Rental } from '@/types';
import Link from 'next/link';

export default async function RentalList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/rentals`, {
    cache: 'no-store',
  });
  const rentals: Rental[] = await res.json();

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Locações</h1>
        <Link href="/rentals/new" className="btn">Nova Locação</Link>
      </div>
      <ul className="space-y-2">
        {rentals.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>Cliente:</strong> {r.client.name} |
            <strong> Veículo:</strong> {r.vehicle.brand} {r.vehicle.model} |
            <strong> Início:</strong> {new Date(r.startDate).toLocaleDateString()} |
            <strong> Fim:</strong> {new Date(r.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
