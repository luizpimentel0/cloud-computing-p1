'use client';

import { useState } from 'react';

export default function VehicleForm() {
  const [form, setForm] = useState({
    brand: '', model: '', year: '', licensePlate: '', price: '', available: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/vehicles', {
      method: 'POST',
      body: JSON.stringify({ ...form, year: Number(form.year), price: Number(form.price) }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Veículo cadastrado!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <input name="brand" onChange={handleChange} placeholder="Marca" className="input" />
      <input name="model" onChange={handleChange} placeholder="Modelo" className="input" />
      <input name="year" onChange={handleChange} placeholder="Ano" type="number" className="input" />
      <input name="licensePlate" onChange={handleChange} placeholder="Placa" className="input" />
      <input name="price" onChange={handleChange} placeholder="Preço" type="number" className="input" />
      <label className="flex items-center gap-2">
        <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
        Disponível
      </label>
      <button type="submit" className="btn">Salvar</button>
    </form>
  );
}
