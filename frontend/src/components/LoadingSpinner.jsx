import { Blocks } from "react-loader-spinner";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <Blocks
      visible={true}
      height="150"
      width="150"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};
