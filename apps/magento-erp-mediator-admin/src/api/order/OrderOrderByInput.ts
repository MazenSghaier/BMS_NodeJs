import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  reference?: SortOrder;
  stockAvailability?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
