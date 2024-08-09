import { DeliveryVoucher as TDeliveryVoucher } from "../api/deliveryVoucher/DeliveryVoucher";

export const DELIVERYVOUCHER_TITLE_FIELD = "id";

export const DeliveryVoucherTitle = (record: TDeliveryVoucher): string => {
  return record.id?.toString() || String(record.id);
};
