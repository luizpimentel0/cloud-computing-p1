'use client';

import { useRouter } from 'next/navigation';

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm('Tem certeza que deseja deletar este veículo?');
    if (!confirmed) return;

    const res = await fetch(`/api/vehicles/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.refresh();
    } else {
      alert('Erro ao deletar veículo.');
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
    >
      Deletar
    </button>
  );
}
