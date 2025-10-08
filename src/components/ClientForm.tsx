'use client';
import { useState } from 'react';

export default function ClientForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/clients', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Cliente cadastrado!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <input name="name" onChange={handleChange} placeholder="Nome" className="input" />
      <input name="email" onChange={handleChange} placeholder="Email" className="input" />
      <input name="phone" onChange={handleChange} placeholder="Telefone" className="input" />
      <button type="submit" className="btn">Salvar</button>
    </form>
  );
}
