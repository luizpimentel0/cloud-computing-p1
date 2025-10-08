import RentalForm from '@/components/RentalForm';

export default function NewRentalPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen mx-auto">
      <div>
        <h1 className="text-3xl font-bold  mb-6">Nova Locação</h1>
        <RentalForm />
      </div>
    </div>
  );
}
