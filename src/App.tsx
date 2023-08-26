import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import FormPage from "./pages/FormPage";
import "./App.css";
import { useAuthStore } from "./context/authStore";
import LoginPage from "./pages/Login";
import LayoutComponent from "./components/LayoutComponent";
import Thankyou from "./pages/Thankyou";
import SingleRecordDetails from "./pages/SingleRecordDetails";
import SubmissionsComponent from "./components/SubmissionsComponent";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<FormPage />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <LayoutComponent />
            </RequireAuth>
          }
        >
          <Route index element={<SubmissionsComponent />} />

          <Route path="record/:id" element={<SingleRecordDetails />} />
        </Route>
        <Route path="/thank-you" element={<Thankyou />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuthStore();
  let location = useLocation();
  if (!isAuthenticated) {
    // navigate("/admin", { replace: true, state: { from: location } });
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
}
