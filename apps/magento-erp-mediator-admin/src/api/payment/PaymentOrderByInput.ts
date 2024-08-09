import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
