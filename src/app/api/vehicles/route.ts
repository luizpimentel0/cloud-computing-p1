import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const vehicles = await prisma.vehicle.findMany();

  if (!vehicles) {
    console.log('ih')
  }
  return NextResponse.json(vehicles);
}

export async function POST(req: Request) {
  const data = await req.json();
  const vehicle = await prisma.vehicle.create({ data });
  return NextResponse.json(vehicle);
}
