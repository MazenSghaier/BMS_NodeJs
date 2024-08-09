import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DeliveryVoucherTitle } from "../deliveryVoucher/DeliveryVoucherTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <ReferenceInput
          source="deliveryVoucher.id"
          reference="DeliveryVoucher"
          label="deliveryVoucher"
        >
          <SelectInput optionText={DeliveryVoucherTitle} />
        </ReferenceInput>
        <TextInput label="invoiceNumber" source="invoiceNumber" />
      </SimpleForm>
    </Create>
  );
};
