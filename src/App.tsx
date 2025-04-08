import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/Dashboard";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard/commercial"
            element={<Dashboard userType="commercial" />}
          />
          <Route
            path="/dashboard/technical"
            element={<Dashboard userType="technical" />}
          />
          <Route
            path="/dashboard/admin"
            element={<Dashboard userType="admin" />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
