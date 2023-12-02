import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
