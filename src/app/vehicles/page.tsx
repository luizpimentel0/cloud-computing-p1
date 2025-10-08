import { Vehicle } from '@/types';
import Link from 'next/link';

export default async function VehicleList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/vehicles`, {
    cache: 'no-store',
  });
  const vehicles: Vehicle[] = await res.json();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Veículos</h1>
        <Link
          href="/vehicles/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Novo Veículo
        </Link>
      </div>

      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Marca</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Modelo</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ano</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Placa</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Preço</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Disponível</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vehicles.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{v.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{v.model}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{v.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{v.licensePlate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{v.price.toLocaleString("pt-BR", { style: "currency", currency: 'BRL' })}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex px-2 py-1 rounded text-xs font-medium ${v.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {v.available ? 'Sim' : 'Não'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
