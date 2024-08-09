import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DeliveryVoucherWhereUniqueInput } from "../deliveryVoucher/DeliveryVoucherWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  creationDate?: DateTimeNullableFilter;
  deliveryVoucher?: DeliveryVoucherWhereUniqueInput;
  id?: StringFilter;
  invoiceNumber?: StringNullableFilter;
};
