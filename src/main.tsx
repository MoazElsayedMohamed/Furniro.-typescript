import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "virtual:svg-icons-register";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
