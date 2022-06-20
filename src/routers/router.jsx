import Layout from "@components/layout";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("@pages/home"));
const About = React.lazy(() => import("@pages/about"));
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
