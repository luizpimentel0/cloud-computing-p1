'use client';

import Link from 'next/link';

export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LocaFácil</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/vehicles" className="hover:underline">
            Veículos
          </Link>
          <Link href="/clients" className="hover:underline">
            Clientes
          </Link>
          <Link href="/rentals" className="hover:underline">
            Locações
          </Link>
        </nav>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Sistema de Locação de Veículos</h2>
        <p className="max-w-xl text-lg mb-6 text-gray-700 dark:text-gray-300">
          Gerencie veículos, clientes e locações com agilidade e facilidade. Uma solução moderna para sua locadora.
        </p>
        <Link
          href="/vehicles"
          className="bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-900 px-6 py-3 rounded-md shadow hover:opacity-90 transition"
        >
          Começar
        </Link>
      </section>

      {/* Serviços */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Funcionalidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Cadastro de Clientes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Adicione e edite informações completas dos seus clientes.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Gestão de Veículos</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Controle disponibilidade, informações e histórico de uso.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
              <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Locações Inteligentes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Crie locações com datas, valores e clientes com facilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer fixo no final */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400 mt-auto">
        © {new Date().getFullYear()} LocaFácil. Todos os direitos reservados.
      </footer>
    </main>
  );
}
