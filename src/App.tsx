import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ErrorPage = lazy(() => import("@page/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<ErrorPage />}>
        <BrowserRouter>
          <ChakraProvider>
            <Router />
          </ChakraProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
