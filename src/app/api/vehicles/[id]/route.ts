import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  const vehicle = await prisma.vehicle.findUnique({ where: { id } });
  if (!vehicle) return new NextResponse(null, { status: 404 });
  return NextResponse.json(vehicle);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  const data = await req.json();

  const updated = await prisma.vehicle.update({
    where: { id },
    data: {
      brand: data.brand,
      model: data.model,
      year: Number(data.year),
      licensePlate: data.licensePlate,
      available: data.available,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  try {
    await prisma.vehicle.delete({ where: { id } });
    return NextResponse.json({ message: 'Veículo deletado com sucesso' });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Erro ao deletar' }, { status: 500 });
  }
}
