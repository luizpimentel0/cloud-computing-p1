import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const clients = await prisma.client.findMany({
    include: { rentals: true },
  });
  return NextResponse.json(clients);
}

export async function POST(req: Request) {
  const data = await req.json();
  const client = await prisma.client.create({ data });
  return NextResponse.json(client);
}
