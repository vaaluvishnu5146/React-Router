import { createContext, useState } from "react";
import PropTypes from "prop-types";
// 1. Create Context
export const CardDetailsContext = createContext({
  cardDetails: [],
  upiDetails: [],
});

// 2. Create Provider
export default function CardDetailsContextProvider({ children }) {
  const [details] = useState({
    cardDetails: [],
    upiDetails: [],
  });
  return (
    <CardDetailsContext.Provider
      value={{
        ...details,
      }}
    >
      {children}
    </CardDetailsContext.Provider>
  );
}

CardDetailsContextProvider.propTypes = {
  children: PropTypes.node,
};
