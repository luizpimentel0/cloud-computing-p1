import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LocaFácil</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
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

      <section className="flex-grow px-6 py-10">{children}</section>

      <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400 mt-auto">
        © {new Date().getFullYear()} LocaFácil. Todos os direitos reservados.
      </footer>
    </main>
  );
}
