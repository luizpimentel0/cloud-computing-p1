import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const rentals = await prisma.rental.findMany({
    include: { client: true, vehicle: true },
  });
  return NextResponse.json(rentals);
}

export async function POST(req: Request) {
  const data = await req.json();
  const rental = await prisma.rental.create({ data });
  return NextResponse.json(rental);
}
