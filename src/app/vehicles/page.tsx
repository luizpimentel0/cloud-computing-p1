import { Vehicle } from '@/types';
import Link from 'next/link';

export default async function VehicleList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/vehicles`, {
    cache: 'no-store',
  });
  const vehicles: Vehicle[] = await res.json();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Veículos</h1>
        <Link href="/vehicles/new" className="btn">Novo Veículo</Link>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Disponível</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td>{v.brand}</td>
              <td>{v.model}</td>
              <td>{v.year}</td>
              <td>{v.licensePlate}</td>
              <td>{v.available ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
