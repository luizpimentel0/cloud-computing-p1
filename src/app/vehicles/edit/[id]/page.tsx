import VehicleForm from '@/components/VehicleForm';
import { Vehicle } from '@/types';
import { notFound } from 'next/navigation';

export default async function EditVehiclePage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles/${params.id}`, { cache: 'no-store' });

  if (!res.ok) return notFound();

  const vehicle: Vehicle = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Veículo</h1>
      <VehicleForm vehicle={vehicle} />
    </div>
  );
}
