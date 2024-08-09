import { JsonValue } from "type-fest";
import { Invoice } from "../invoice/Invoice";
import { Order } from "../order/Order";

export type DeliveryVoucher = {
  createdAt: Date;
  creationDate: Date | null;
  customerInfo: JsonValue;
  details: JsonValue;
  id: string;
  invoices?: Array<Invoice>;
  order?: Order | null;
  updatedAt: Date;
};
