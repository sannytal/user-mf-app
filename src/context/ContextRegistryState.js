import React from "react";

import ComponentRegistryContext from "./ComponentRegistryContext";

const ContextRegistryState = ({ children, containerProps }) => {
  return (
    <ComponentRegistryContext.Provider
      value={{
        containerProps,
      }}
    >
      {children}
    </ComponentRegistryContext.Provider>
  );
};

export default ContextRegistryState;
