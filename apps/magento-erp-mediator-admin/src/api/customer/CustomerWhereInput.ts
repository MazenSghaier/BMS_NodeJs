import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  customerNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  payments?: PaymentListRelationFilter;
  phone?: StringNullableFilter;
  vatNumber?: StringNullableFilter;
};
