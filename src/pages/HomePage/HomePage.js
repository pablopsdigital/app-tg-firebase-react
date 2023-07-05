import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const HomePage = () => {
  const { user } = useAuthentication();
  console.log("userInfo", user);

  return <div>HomePage</div>;
};
