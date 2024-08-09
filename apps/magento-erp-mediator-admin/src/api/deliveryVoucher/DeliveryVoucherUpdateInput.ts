import { InputJsonValue } from "../../types";
import { InvoiceUpdateManyWithoutDeliveryVouchersInput } from "./InvoiceUpdateManyWithoutDeliveryVouchersInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryVoucherUpdateInput = {
  creationDate?: Date | null;
  customerInfo?: InputJsonValue;
  details?: InputJsonValue;
  invoices?: InvoiceUpdateManyWithoutDeliveryVouchersInput;
  order?: OrderWhereUniqueInput | null;
};
