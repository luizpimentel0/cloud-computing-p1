'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Vehicle = {
  id?: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  available: boolean;
};

export default function VehicleForm({ vehicle }: { vehicle?: Vehicle }) {
  const [formData, setFormData] = useState<Vehicle>({
    brand: vehicle?.brand || '',
    model: vehicle?.model || '',
    year: vehicle?.year || new Date().getFullYear(),
    licensePlate: vehicle?.licensePlate || '',
    available: vehicle?.available ?? true,
  });

  const router = useRouter();
  const isEdit = !!vehicle?.id;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      isEdit ? `/api/vehicles/${vehicle?.id}` : '/api/vehicles',
      {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      router.push('/vehicles');
    } else {
      alert('Erro ao salvar veículo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Marca</label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="input" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Modelo</label>
        <input type="text" name="model" value={formData.model} onChange={handleChange} className="input" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Ano</label>
        <input type="number" name="year" value={formData.year} onChange={handleChange} className="input" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Placa</label>
        <input type="text" name="licensePlate" value={formData.licensePlate} onChange={handleChange} className="input" />
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} className="mr-2" />
        <label className="font-medium">Disponível</label>
      </div>
      <button type="submit" className="btn">{isEdit ? 'Atualizar' : 'Cadastrar'} Veículo</button>
    </form>
  );
}
