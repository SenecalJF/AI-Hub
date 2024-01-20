import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import awsmobile from "./aws.export";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsmobile);

function App() {
  const routes = [
    { path: "/login", element: <Login /> },
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default withAuthenticator(App);
