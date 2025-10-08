export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  available: boolean;
}

export type Rental = {
  id: string;
  client: Client;
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
  totalPrice: number;
}
