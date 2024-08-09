import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
