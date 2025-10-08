'use client';
import { useEffect, useState } from 'react';

export default function RentalForm() {
  const [clients, setClients] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    clientId: '', vehicleId: '', startDate: '', endDate: '', price: ''
  });

  useEffect(() => {
    fetch('/api/clients').then(res => res.json()).then(setClients);
    fetch('/api/vehicles').then(res => res.json()).then(setVehicles);
  }, []);

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/rentals', {
      method: 'POST',
      body: JSON.stringify({ ...form, clientId: Number(form.clientId), vehicleId: Number(form.vehicleId), price: Number(form.price) }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Locação criada!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <select name="clientId" onChange={handleChange} className="input">
        <option value="">Selecione o cliente</option>
        {clients.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <select name="vehicleId" onChange={handleChange} className="input">
        <option value="">Selecione o veículo</option>
        {vehicles.map((v: any) => <option key={v.id} value={v.id}>{v.brand} {v.model}</option>)}
      </select>

      <input name="startDate" onChange={handleChange} placeholder="Início" type="datetime-local" className="input" />
      <input name="endDate" onChange={handleChange} placeholder="Fim" type="datetime-local" className="input" />
      <input name="price" onChange={handleChange} placeholder="Valor" type="number" className="input" />

      <button type="submit" className="btn">Salvar</button>
    </form>
  );
}
