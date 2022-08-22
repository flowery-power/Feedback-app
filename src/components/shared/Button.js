import React from "react";
import ProTypes from "prop-types";

export default function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={"btn btn-${version}"}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: ProTypes.node.isRequired,
  version: ProTypes.string,
  type: ProTypes.string,
  isDisabled: ProTypes.bool,
};
