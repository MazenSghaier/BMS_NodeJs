import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DELIVERYVOUCHER_TITLE_FIELD } from "../deliveryVoucher/DeliveryVoucherTitle";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
