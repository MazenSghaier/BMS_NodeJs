import { DeliveryVoucherWhereInput } from "./DeliveryVoucherWhereInput";
import { DeliveryVoucherOrderByInput } from "./DeliveryVoucherOrderByInput";

export type DeliveryVoucherFindManyArgs = {
  where?: DeliveryVoucherWhereInput;
  orderBy?: Array<DeliveryVoucherOrderByInput>;
  skip?: number;
  take?: number;
};
