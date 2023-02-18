import React from "react";
import { Header, Footer } from "src/components/App";
import { Toast } from "src/components/shared";

function AppLayout(props) {
  return (
    <div>
      <Header {...props} />
      <Toast />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
