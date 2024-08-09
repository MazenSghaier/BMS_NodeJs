import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { PaymentCreateNestedManyWithoutCustomersInput } from "./PaymentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  customerNumber?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  payments?: PaymentCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
  vatNumber?: string | null;
};
