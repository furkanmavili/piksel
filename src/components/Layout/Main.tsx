import React from "react";

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <div className="my-20 text-sm">{children}</div>;
}

export default Main;
