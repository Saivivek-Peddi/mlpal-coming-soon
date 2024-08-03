import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="relative h-screen w-screen flex flex-col justify-center items-center">
    {children}
  </div>
);

export default Layout;
