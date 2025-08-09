import { 
  TrendingUp, 
  TrendingDown,
  Eye,
  Users,
  Clock,
  Globe,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

const Analytics = () => {
  const stats = [
    {
      title: "Total Views",
      value: "45.2K",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      title: "Unique Visitors",
      value: "12.8K",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Avg. Session Duration",
      value: "4:23",
      change: "-2.1%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: "-5.8%",
      trend: "up",
      icon: Activity,
      color: "text-purple-600"
    }
  ]

  const topPosts = [
    {
      title: "Hiking the Himalayas: A Journey to Remember",
      views: 8420,
      engagement: "4.2%",
      date: "2024-01-15"
    },
    {
      title: "Desert Safari in Dubai: Beyond the Dunes",
      views: 6890,
      engagement: "5.8%",
      date: "2024-01-10"
    },
    {
      title: "Cultural Immersion in Kyoto Temples",
      views: 5120,
      engagement: "3.9%",
      date: "2024-01-08"
    },
    {
      title: "Street Food Adventures in Bangkok",
      views: 4750,
      engagement: "6.1%",
      date: "2024-01-12"
    }
  ]

  const topCountries = [
    { country: "United States", visitors: 4200, percentage: 35 },
    { country: "United Kingdom", visitors: 2100, percentage: 18 },
    { country: "Germany", visitors: 1800, percentage: 15 },
    { country: "Canada", visitors: 1200, percentage: 10 },
    { country: "Australia", visitors: 900, percentage: 8 }
  ]

  const recentActivity = [
    {
      action: "New visitor from United States",
      time: "2 minutes ago",
      post: "Hiking the Himalayas"
    },
    {
      action: "Comment on post",
      time: "5 minutes ago",
      post: "Desert Safari in Dubai"
    },
    {
      action: "Social media share",
      time: "12 minutes ago",
      post: "Street Food Adventures"
    },
    {
      action: "New subscriber",
      time: "18 minutes ago",
      post: "Newsletter"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your blog's performance and audience insights</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border z-50">
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-muted/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Top Performing Posts
            </CardTitle>
            <CardDescription>Posts with the highest engagement this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1 line-clamp-1">{post.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        {post.engagement} engagement
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Traffic by Country
            </CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{country.country}</span>
                      <span className="text-sm text-muted-foreground">
                        {country.visitors.toLocaleString()} visitors
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Visitor Trends
            </CardTitle>
            <CardDescription>Daily visitor count over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Chart visualization would go here</p>
                <p className="text-sm text-muted-foreground">Integration with analytics service needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Live updates from your blog</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.post}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-100">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Page Views Today</p>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-green-600">+23% from yesterday</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">New Subscribers</p>
                <p className="text-2xl font-bold">89</p>
                <p className="text-xs text-green-600">+12% this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-100">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Countries Reached</p>
                <p className="text-2xl font-bold">47</p>
                <p className="text-xs text-green-600">+3 new countries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Analytics