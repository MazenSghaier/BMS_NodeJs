import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  deliveryVoucherId?: SortOrder;
  id?: SortOrder;
  invoiceNumber?: SortOrder;
  updatedAt?: SortOrder;
};
