import { Order } from "../order/Order";
import { Payment } from "../payment/Payment";

export type Customer = {
  address: string | null;
  createdAt: Date;
  customerNumber: string | null;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  payments?: Array<Payment>;
  phone: string | null;
  updatedAt: Date;
  vatNumber: string | null;
};
