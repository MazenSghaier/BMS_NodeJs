import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryVoucherUpdateManyWithoutOrdersInput } from "./DeliveryVoucherUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveryVouchers?: DeliveryVoucherUpdateManyWithoutOrdersInput;
  quantity?: number | null;
  reference?: string | null;
  stockAvailability?: boolean | null;
  unitPrice?: number | null;
};
