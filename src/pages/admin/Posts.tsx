import { useState } from "react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Heart,
  MessageSquare,
  FileText
} from "lucide-react"
import { Input } from "../../components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { Link } from "react-router-dom"

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const posts = [
    {
      id: 1,
      title: "Hiking the Himalayas: A Journey to Remember",
      excerpt: "Discover the breathtaking beauty of the Himalayan mountains through this incredible trekking adventure...",
      status: "published",
      category: "Adventure",
      date: "2024-01-15",
      views: 1240,
      likes: 85,
      comments: 23,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Street Food Adventures in Bangkok",
      excerpt: "From Pad Thai to Mango Sticky Rice, explore the vibrant street food scene of Thailand's capital...",
      status: "draft",
      category: "Food",
      date: "2024-01-12",
      views: 0,
      likes: 0,
      comments: 0,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Desert Safari in Dubai: Beyond the Dunes",
      excerpt: "Experience the magic of the Arabian desert with thrilling dune bashing and cultural encounters...",
      status: "published",
      category: "Adventure",
      date: "2024-01-10",
      views: 2100,
      likes: 156,
      comments: 45,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Cultural Immersion in Kyoto Temples",
      excerpt: "Step into the serene world of ancient Japanese temples and traditional tea ceremonies...",
      status: "scheduled",
      category: "Culture",
      date: "2024-01-20",
      views: 0,
      likes: 0,
      comments: 0,
      image: "/api/placeholder/300/200"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Published</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Scheduled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground">Manage your travel blog posts and stories</p>
        </div>
        <Button asChild className="bg-gradient-primary hover:opacity-90">
          <Link to="/admin/posts/new">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-card border z-50">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusBadge(post.status)}
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{post.excerpt}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border z-50">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.comments}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No posts found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || statusFilter !== "all" 
              ? "Try adjusting your search or filters" 
              : "Get started by creating your first blog post"}
          </p>
          <Button asChild className="bg-gradient-primary hover:opacity-90">
            <Link to="/admin/posts/new">
              <Plus className="w-4 h-4 mr-2" />
              Create New Post
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default Posts