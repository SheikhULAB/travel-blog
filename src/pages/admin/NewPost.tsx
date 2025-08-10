import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Upload, Image, MapPin, Calendar, Clock, Tag, Eye, Save, X } from "lucide-react"
import { toast } from "sonner"

export default function NewPost() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    destination: "",
    readTime: "",
    tags: "",
    featuredImage: null as File | null,
    status: "draft"
  })

  const [previewMode, setPreviewMode] = useState(false)
  const [tags, setTags] = useState<string[]>([])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddTag = () => {
    if (formData.tags.trim() && !tags.includes(formData.tags.trim())) {
      setTags(prev => [...prev, formData.tags.trim()])
      setFormData(prev => ({ ...prev, tags: "" }))
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, featuredImage: file }))
    }
  }

  const handleSave = (status: "draft" | "published") => {
    // Here you would typically send data to your backend
    toast.success(`Post ${status === "draft" ? "saved as draft" : "published"} successfully!`)
    navigate("/admin/posts")
  }

  const categories = [
    "Adventure Travel",
    "Cultural Experiences", 
    "Food & Cuisine",
    "Photography",
    "Budget Travel",
    "Luxury Travel",
    "Solo Travel",
    "Family Travel"
  ]

  if (previewMode) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-10 bg-card border-b p-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Button variant="outline" onClick={() => setPreviewMode(false)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Editor
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleSave("draft")}>
                Save Draft
              </Button>
              <Button onClick={() => handleSave("published")}>
                Publish
              </Button>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          {formData.featuredImage && (
            <div className="aspect-[16/9] bg-muted rounded-xl mb-8 flex items-center justify-center">
              <Image className="w-12 h-12 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Featured Image Preview</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.category && (
              <Badge variant="secondary">{formData.category}</Badge>
            )}
            {formData.destination && (
              <Badge variant="outline">
                <MapPin className="w-3 h-3 mr-1" />
                {formData.destination}
              </Badge>
            )}
            {formData.readTime && (
              <Badge variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                {formData.readTime} min read
              </Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {formData.title || "Your Post Title"}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {formData.excerpt || "Your post excerpt will appear here..."}
          </p>

          <div className="prose prose-lg max-w-none">
            {formData.content ? (
              <div className="whitespace-pre-wrap">{formData.content}</div>
            ) : (
              <p className="text-muted-foreground italic">Your content will appear here...</p>
            )}
          </div>

          {tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/admin/posts">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Posts
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <p className="text-muted-foreground">Share your travel experiences with the world</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setPreviewMode(true)}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" onClick={() => handleSave("draft")}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave("published")}>
            Publish Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>
                Create engaging content for your travel blog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter an engaging title for your post..."
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a compelling excerpt that summarizes your post..."
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Share your travel story, tips, and experiences..."
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  rows={15}
                  className="min-h-[400px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
              <CardDescription>
                Upload a captivating image for your post
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="featured-image"
                />
                <label htmlFor="featured-image" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">
                    {formData.featuredImage ? formData.featuredImage.name : "Upload Featured Image"}
                  </p>
                  <p className="text-muted-foreground">
                    Drag and drop or click to browse
                  </p>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  placeholder="e.g., Bali, Indonesia"
                  value={formData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="readTime">Read Time (minutes)</Label>
                <Input
                  id="readTime"
                  type="number"
                  placeholder="5"
                  value={formData.readTime}
                  onChange={(e) => handleInputChange("readTime", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>
                Add relevant tags to help readers find your post
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={formData.tags}
                  onChange={(e) => handleInputChange("tags", e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddTag()
                    }
                  }}
                />
                <Button onClick={handleAddTag} size="sm">
                  Add
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Created: {new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Last modified: {new Date().toLocaleTimeString()}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}