import { useState } from "react"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Upload,
  Calendar,
  MapPin,
  Image as ImageIcon
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { Badge } from "../../components/ui/badge"

const AdminGallery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const images = [
    {
      id: 1,
      title: "Himalayan Sunset",
      src: "/api/placeholder/400/300",
      category: "Mountains",
      location: "Nepal",
      date: "2024-01-15",
      tags: ["sunset", "mountains", "nepal", "hiking"],
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Bangkok Street Market",
      src: "/api/placeholder/400/300",
      category: "Street",
      location: "Bangkok, Thailand",
      date: "2024-01-12",
      tags: ["street", "market", "food", "bangkok"],
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Desert Dunes at Dawn",
      src: "/api/placeholder/400/300",
      category: "Desert",
      location: "Dubai, UAE",
      date: "2024-01-10",
      tags: ["desert", "sunrise", "dunes", "dubai"],
      size: "3.1 MB"
    },
    {
      id: 4,
      title: "Kyoto Temple Garden",
      src: "/api/placeholder/400/300",
      category: "Culture",
      location: "Kyoto, Japan",
      date: "2024-01-08",
      tags: ["temple", "garden", "japan", "culture"],
      size: "2.7 MB"
    },
    {
      id: 5,
      title: "Ocean View from Cliff",
      src: "/api/placeholder/400/300",
      category: "Ocean",
      location: "Santorini, Greece",
      date: "2024-01-05",
      tags: ["ocean", "cliff", "sunset", "greece"],
      size: "2.2 MB"
    },
    {
      id: 6,
      title: "Mountain Lake Reflection",
      src: "/api/placeholder/400/300",
      category: "Mountains",
      location: "Swiss Alps",
      date: "2024-01-03",
      tags: ["lake", "reflection", "mountains", "switzerland"],
      size: "2.9 MB"
    }
  ]

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === "all" || image.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...Array.from(new Set(images.map(img => img.category)))]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-muted-foreground">Manage your travel photography and media</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Upload className="w-4 h-4 mr-2" />
          Upload Images
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Images</p>
                <p className="text-2xl font-bold">{images.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Locations</p>
                <p className="text-2xl font-bold">{new Set(images.map(img => img.location)).size}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="text-2xl font-bold">{categories.length - 1}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground">Storage Used</p>
                <p className="text-2xl font-bold">15.2 MB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search images, locations, tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="bg-card border z-50">
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <Card key={image.id} className="group hover:shadow-md transition-all duration-200">
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border z-50">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Full
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold mb-1">{image.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {image.location}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="outline">{image.category}</Badge>
                <span className="text-xs text-muted-foreground">{image.size}</span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {image.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
                {image.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{image.tags.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {image.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No images found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || categoryFilter !== "all" 
              ? "Try adjusting your search or filters" 
              : "Start building your gallery by uploading your first images"}
          </p>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Upload className="w-4 h-4 mr-2" />
            Upload Images
          </Button>
        </div>
      )}
    </div>
  )
}

export default AdminGallery