import { Customer } from "../customer/Customer";
import { DeliveryVoucher } from "../deliveryVoucher/DeliveryVoucher";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  deliveryVouchers?: Array<DeliveryVoucher>;
  id: string;
  quantity: number | null;
  reference: string | null;
  stockAvailability: boolean | null;
  unitPrice: number | null;
  updatedAt: Date;
};
