import VehicleForm from '@/components/VehicleForm';

export default function NewVehiclePage() {
  return (
    <div className="p-4 mx-auto 4 max-w-3xl">
      <h1 className="text-xl font-bold mb-4">Novo Veículo</h1>
      <VehicleForm />
    </div>
  );
}
