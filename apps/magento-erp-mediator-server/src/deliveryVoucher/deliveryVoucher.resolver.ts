import * as graphql from "@nestjs/graphql";
import { DeliveryVoucherResolverBase } from "./base/deliveryVoucher.resolver.base";
import { DeliveryVoucher } from "./base/DeliveryVoucher";
import { DeliveryVoucherService } from "./deliveryVoucher.service";

@graphql.Resolver(() => DeliveryVoucher)
export class DeliveryVoucherResolver extends DeliveryVoucherResolverBase {
  constructor(protected readonly service: DeliveryVoucherService) {
    super(service);
  }
}
