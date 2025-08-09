import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { 
  FileText, 
  Images, 
  MapPin, 
  Users, 
  TrendingUp, 
  Eye,
  Heart,
  MessageSquare,
  Plus,
  Edit,
  Calendar
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Posts",
      value: "24",
      change: "+3 this month",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Gallery Images",
      value: "156",
      change: "+12 this week",
      icon: Images,
      color: "text-green-600"
    },
    {
      title: "Destinations",
      value: "8",
      change: "+2 this month",
      icon: MapPin,
      color: "text-purple-600"
    },
    {
      title: "Page Views",
      value: "12.4K",
      change: "+15% from last month",
      icon: Eye,
      color: "text-orange-600"
    }
  ]

  const recentPosts = [
    {
      title: "Hiking the Himalayas: A Journey to Remember",
      status: "Published",
      date: "2024-01-15",
      views: 1240,
      likes: 85
    },
    {
      title: "Street Food Adventures in Bangkok",
      status: "Draft",
      date: "2024-01-12",
      views: 0,
      likes: 0
    },
    {
      title: "Desert Safari in Dubai: Beyond the Dunes",
      status: "Published",
      date: "2024-01-10",
      views: 2100,
      likes: 156
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Ashraf! Here's what's happening with your travel blog.</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Your latest blog posts and their performance</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{post.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Create New Post
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Images className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Add Destination
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview Site
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and changes to your blog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm"><strong>New comment</strong> on "Hiking the Himalayas"</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm"><strong>Post published:</strong> "Desert Safari in Dubai"</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm"><strong>Gallery updated</strong> with 8 new images</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard