import { InputJsonValue } from "../../types";
import { InvoiceCreateNestedManyWithoutDeliveryVouchersInput } from "./InvoiceCreateNestedManyWithoutDeliveryVouchersInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryVoucherCreateInput = {
  creationDate?: Date | null;
  customerInfo?: InputJsonValue;
  details?: InputJsonValue;
  invoices?: InvoiceCreateNestedManyWithoutDeliveryVouchersInput;
  order?: OrderWhereUniqueInput | null;
};
