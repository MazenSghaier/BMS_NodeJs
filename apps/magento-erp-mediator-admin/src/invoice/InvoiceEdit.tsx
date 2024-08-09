import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DeliveryVoucherTitle } from "../deliveryVoucher/DeliveryVoucherTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
