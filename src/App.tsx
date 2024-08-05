import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import { lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ErrorPage = lazy(() => import("@page/Error"));
const Loading = lazy(() => import("@page/Loading"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <ChakraProvider>
            <ErrorPage>
              <Router />
            </ErrorPage>
          </ChakraProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
