import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const client1 = await prisma.client.create({
    data: {
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '11999999999',
    },
  });

  const client2 = await prisma.client.create({
    data: {
      name: 'Maria Souza',
      email: 'maria@email.com',
      phone: '11888888888',
    },
  });

  // Veículos
  const vehicle1 = await prisma.vehicle.create({
    data: {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      licensePlate: 'ABC1234',
      price: 200.00,
    },
  });

  const vehicle2 = await prisma.vehicle.create({
    data: {
      brand: 'Ford',
      model: 'Fiesta',
      year: 2018,
      licensePlate: 'XYZ5678',
      price: 150.00,
    },
  });

  await prisma.rental.create({
    data: {
      clientId: client1.id,
      vehicleId: vehicle1.id,
      startDate: new Date('2025-10-01T10:00:00'),
      endDate: new Date('2025-10-03T10:00:00'),
      price: 400.00,
    },
  });

  await prisma.rental.create({
    data: {
      clientId: client2.id,
      vehicleId: vehicle2.id,
      startDate: new Date('2025-10-05T09:00:00'),
      endDate: new Date('2025-10-06T09:00:00'),
      price: 150.00,
    },
  });
}

main()
  .then(() => {
    console.log('Seed finalizado');
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
