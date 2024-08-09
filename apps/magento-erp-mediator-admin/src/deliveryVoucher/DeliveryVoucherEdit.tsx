import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { OrderTitle } from "../order/OrderTitle";

export const DeliveryVoucherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creationDate" source="creationDate" />
        <div />
        <div />
        <ReferenceArrayInput
          source="invoices"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
