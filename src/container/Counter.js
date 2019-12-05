import React, { useState } from "react";
import PropTypes from "prop-types";

export const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

Counter.propTypes = {
  initialValue: PropTypes.number
};

Counter.defaultProps = {
  initialValue: 50
};
