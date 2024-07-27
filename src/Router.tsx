import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@page/Home"));
const DayPage = lazy(() => import("@page/Day"));
const StorePage = lazy(() => import("@page/Store"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<DayPage />} />
      <Route path="/day" element={<StorePage />} />
    </Routes>
  );
};

export default Router;
