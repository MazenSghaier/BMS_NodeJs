import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "reference";

export const OrderTitle = (record: TOrder): string => {
  return record.reference?.toString() || String(record.id);
};
