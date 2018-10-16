import React from "react";

export default WrappedComponent => {
  return props => {
    const newProps = {
      ...props,
      tomas: "test"
    };
    return <WrappedComponent {...newProps} />;
  };
};
