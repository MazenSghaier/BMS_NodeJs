import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { PaymentUpdateManyWithoutCustomersInput } from "./PaymentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  customerNumber?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  payments?: PaymentUpdateManyWithoutCustomersInput;
  phone?: string | null;
  vatNumber?: string | null;
};
