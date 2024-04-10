import { createContext } from "react";

export const UserDetailsContext = createContext({
  address: [],
  userName: "",
});

export default function UserContextProvider({ children }) {
  const address = [{ type: "Home", address: "Test address" }];
  const userName = "Vishnu Vardhan";
  return (
    <UserDetailsContext.Provider
      value={{
        address,
        userName,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}
