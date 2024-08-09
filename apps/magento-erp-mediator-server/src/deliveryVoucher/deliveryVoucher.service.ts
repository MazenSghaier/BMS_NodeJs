import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryVoucherServiceBase } from "./base/deliveryVoucher.service.base";

@Injectable()
export class DeliveryVoucherService extends DeliveryVoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
