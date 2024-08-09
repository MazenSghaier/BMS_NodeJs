import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DELIVERYVOUCHER_TITLE_FIELD } from "../deliveryVoucher/DeliveryVoucherTitle";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
