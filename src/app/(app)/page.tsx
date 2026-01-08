"use client"
import QuickStats from "./dashboard/QuickStats"
import RevenueChart from "./dashboard/RevenueChart"
import RecentOrders from "./dashboard/RecentOrders"
import QuickActions from "./dashboard/QuickActions"
import TopProducts from "./dashboard/TopProducts"
import RecentActivity from "./dashboard/RecentActivity"

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <QuickStats></QuickStats>

      <div className="grid gap-6 lg:grid-cols-7">
        {/*Revenue Charts */}
        <RevenueChart></RevenueChart>
        {/* Quick Actions */}
        <QuickActions></QuickActions>
      </div>


      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <RecentOrders></RecentOrders>
        {/* Top Products */}
        <TopProducts></TopProducts>
      </div>

      {/* Recent Activity */}
      <RecentActivity></RecentActivity>
    </div>
  )
}

export default AdminDashboard; 