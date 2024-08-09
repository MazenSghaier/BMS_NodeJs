import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryVoucherCreateNestedManyWithoutOrdersInput } from "./DeliveryVoucherCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveryVouchers?: DeliveryVoucherCreateNestedManyWithoutOrdersInput;
  quantity?: number | null;
  reference?: string | null;
  stockAvailability?: boolean | null;
  unitPrice?: number | null;
};
