import { DeliveryVoucher } from "../deliveryVoucher/DeliveryVoucher";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  creationDate: Date | null;
  deliveryVoucher?: DeliveryVoucher | null;
  id: string;
  invoiceNumber: string | null;
  updatedAt: Date;
};
