// Components
import { Outlet } from "react-router";
import { ProtectedRoute } from "~/components/protected-route";
import { Sidebar } from "~/modules/dashboard/components/sidebar";

export default function DashboardLayout() {
  return (
    <ProtectedRoute>
      <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-6">
        <div className="hidden lg:block lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-5 container">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
