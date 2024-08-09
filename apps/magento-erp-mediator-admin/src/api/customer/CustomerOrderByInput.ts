import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  customerNumber?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  vatNumber?: SortOrder;
};
