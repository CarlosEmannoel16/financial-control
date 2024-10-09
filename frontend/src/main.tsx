import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./service/apollo/client.ts";
import { ExpenseProvider } from "./contexts/MenuAddExpenseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExpenseProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ExpenseProvider>
  </StrictMode>
);
