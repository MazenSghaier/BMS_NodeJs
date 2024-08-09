import { DeliveryVoucherWhereUniqueInput } from "../deliveryVoucher/DeliveryVoucherWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  creationDate?: Date | null;
  deliveryVoucher?: DeliveryVoucherWhereUniqueInput | null;
  invoiceNumber?: string | null;
};
