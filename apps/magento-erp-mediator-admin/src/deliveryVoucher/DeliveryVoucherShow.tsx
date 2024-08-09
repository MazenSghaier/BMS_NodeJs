import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DELIVERYVOUCHER_TITLE_FIELD } from "./DeliveryVoucherTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const DeliveryVoucherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creationDate" source="creationDate" />
        <TextField label="customerInfo" source="customerInfo" />
        <TextField label="details" source="details" />
        <TextField label="ID" source="id" />
        <ReferenceField label="order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Invoice"
          target="deliveryVoucherId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="creationDate" source="creationDate" />
            <ReferenceField
              label="deliveryVoucher"
              source="deliveryvoucher.id"
              reference="DeliveryVoucher"
            >
              <TextField source={DELIVERYVOUCHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="invoiceNumber" source="invoiceNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
