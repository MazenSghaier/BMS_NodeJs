import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { DeliveryVoucherTitle } from "../deliveryVoucher/DeliveryVoucherTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="deliveryVouchers"
          reference="DeliveryVoucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryVoucherTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="reference" source="reference" />
        <BooleanInput label="stockAvailability" source="stockAvailability" />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
