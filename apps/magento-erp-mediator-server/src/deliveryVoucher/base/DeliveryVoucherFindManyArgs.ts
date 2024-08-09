/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryVoucherWhereInput } from "./DeliveryVoucherWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryVoucherOrderByInput } from "./DeliveryVoucherOrderByInput";

@ArgsType()
class DeliveryVoucherFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryVoucherWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DeliveryVoucherWhereInput, { nullable: true })
  @Type(() => DeliveryVoucherWhereInput)
  where?: DeliveryVoucherWhereInput;

  @ApiProperty({
    required: false,
    type: [DeliveryVoucherOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DeliveryVoucherOrderByInput], { nullable: true })
  @Type(() => DeliveryVoucherOrderByInput)
  orderBy?: Array<DeliveryVoucherOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeliveryVoucherFindManyArgs as DeliveryVoucherFindManyArgs };
