import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

type Props = {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
};

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <Navbar />
        <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
