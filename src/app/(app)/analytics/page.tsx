import AnalyticsStats from "./AnalyticsStats"
import RevenueCategory from "./RevenueCategory"
import TopPerformingProducts from "./TopPerformingProducts"
import AnalyticsRatio from "./AnalyticsRatio"

const AdminAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* stats */}
      <AnalyticsStats></AnalyticsStats>

      {/* revenue by category and top performing products */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueCategory></RevenueCategory>
        <TopPerformingProducts></TopPerformingProducts>
      </div>

      {/* analytics ratio */}
      <AnalyticsRatio></AnalyticsRatio>
    </div>
  )
}

export default AdminAnalytics;