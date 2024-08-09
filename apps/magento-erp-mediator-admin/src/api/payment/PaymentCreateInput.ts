import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
