import ClientForm from '@/components/ClientForm';

export default function NewClientPage() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Novo Cliente</h1>
      <ClientForm />
    </div>
  );
}
