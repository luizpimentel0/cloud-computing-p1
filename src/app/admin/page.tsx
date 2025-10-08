import Link from 'next/link';

export default function AdminHome() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Administração</h1>
      <ul className="space-y-2">
        <li><Link href="/admin/vehicles" className="btn">Gerenciar Veículos</Link></li>
        <li><Link href="/admin/clients" className="btn">Gerenciar Clientes</Link></li>
        <li><Link href="/admin/rentals" className="btn">Gerenciar Locações</Link></li>
      </ul>
    </div>
  );
}
