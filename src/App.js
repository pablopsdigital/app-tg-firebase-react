import React from "react";
import { Route, Routes } from "react-router";
import { AuthUserProvider } from "./contexts/AuthUserContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export const App = () => {
  return (
    <div className="flex h-screen text-black bg-slate-300">
      <AuthUserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthUserProvider>
    </div>
  );
};
