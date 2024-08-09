import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryVoucherService } from "./deliveryVoucher.service";
import { DeliveryVoucherControllerBase } from "./base/deliveryVoucher.controller.base";

@swagger.ApiTags("deliveryVouchers")
@common.Controller("deliveryVouchers")
export class DeliveryVoucherController extends DeliveryVoucherControllerBase {
  constructor(protected readonly service: DeliveryVoucherService) {
    super(service);
  }
}
