import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryVoucherListRelationFilter } from "../deliveryVoucher/DeliveryVoucherListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  deliveryVouchers?: DeliveryVoucherListRelationFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  reference?: StringNullableFilter;
  stockAvailability?: BooleanNullableFilter;
  unitPrice?: FloatNullableFilter;
};
