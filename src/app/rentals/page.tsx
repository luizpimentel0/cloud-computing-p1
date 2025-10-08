import { Rental } from '@/types';
import Link from 'next/link';

export default async function RentalList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/rentals`, {
    cache: 'no-store',
  });
  const rentals: Rental[] = await res.json();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Locações</h1>
        <Link
          href="/rentals/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Nova Locação
        </Link>
      </div>

      <div className="space-y-4">
        {rentals.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <div className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Cliente:</span> {r.client.name}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Veículo:</span> {r.vehicle.brand} {r.vehicle.model}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-700">
              <div>
                <span className="font-medium text-gray-900">Início:</span>{' '}
                {new Date(r.startDate).toLocaleDateString()}
              </div>
              <div>
                <span className="font-medium text-gray-900">Fim:</span>{' '}
                {new Date(r.endDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
