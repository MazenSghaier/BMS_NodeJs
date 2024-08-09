import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
