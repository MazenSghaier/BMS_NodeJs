import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryVoucherWhereInput = {
  creationDate?: DateTimeNullableFilter;
  customerInfo?: JsonFilter;
  details?: JsonFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  order?: OrderWhereUniqueInput;
};
