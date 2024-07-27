import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import { lazy } from "react";

const ErrorPage = lazy(() => import("@page/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<ErrorPage />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
