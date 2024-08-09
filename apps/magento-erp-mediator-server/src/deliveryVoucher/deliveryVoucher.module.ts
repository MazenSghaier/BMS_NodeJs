import { Module } from "@nestjs/common";
import { DeliveryVoucherModuleBase } from "./base/deliveryVoucher.module.base";
import { DeliveryVoucherService } from "./deliveryVoucher.service";
import { DeliveryVoucherController } from "./deliveryVoucher.controller";
import { DeliveryVoucherResolver } from "./deliveryVoucher.resolver";

@Module({
  imports: [DeliveryVoucherModuleBase],
  controllers: [DeliveryVoucherController],
  providers: [DeliveryVoucherService, DeliveryVoucherResolver],
  exports: [DeliveryVoucherService],
})
export class DeliveryVoucherModule {}
