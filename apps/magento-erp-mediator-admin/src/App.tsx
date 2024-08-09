import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { DeliveryVoucherList } from "./deliveryVoucher/DeliveryVoucherList";
import { DeliveryVoucherCreate } from "./deliveryVoucher/DeliveryVoucherCreate";
import { DeliveryVoucherEdit } from "./deliveryVoucher/DeliveryVoucherEdit";
import { DeliveryVoucherShow } from "./deliveryVoucher/DeliveryVoucherShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MagentoERPMediator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="DeliveryVoucher"
          list={DeliveryVoucherList}
          edit={DeliveryVoucherEdit}
          create={DeliveryVoucherCreate}
          show={DeliveryVoucherShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
