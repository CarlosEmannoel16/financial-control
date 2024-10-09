import React, { createContext, useState, useContext, ReactNode } from "react";

interface ExpenseContextType {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <ExpenseContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useMenuExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenseContext must be used within an ExpenseProvider");
  }
  return context;
};
