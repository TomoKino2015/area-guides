"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Home,
  Train,
  Building,
  Users,
  DollarSign,
  ShoppingBag,
  Leaf,
  GraduationCap,
  Calendar,
  Clock,
  Info,
  Star,
  ThumbsUp,
  ThumbsDown,
  User,
  Check,
  Coffee,
  Music,
  ShoppingCart,
  School,
  Globe,
  Utensils,
  Droplet,
  TreesIcon as Tree,
  Route,
  Hospital,
  Stethoscope,
  Book,
  Copyright,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export function SetagayaAreaGuideEnglish({ hideCta = false }: { hideCta?: boolean }) {
  useEffect(() => {
    // Add scroll animation effect with debounce for better performance
    let scrollTimeout: NodeJS.Timeout

    const animateOnScroll = () => {
      clearTimeout(scrollTimeout)

      scrollTimeout = setTimeout(() => {
        const elements = document.querySelectorAll(".animate-on-scroll:not(.visible)")

        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top
          const elementVisible = 150

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible")
          }
        })
      }, 50) // 50ms debounce
    }

    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Run once on load

    return () => {
      window.removeEventListener("scroll", animateOnScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Section */}
      <Card className="animate-on-scroll border-2 border-[#00c4a7]">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-3xl md:text-4xl font-bold text-[#00c4a7] flex items-center gap-3">
              <MapPin size={32} className="text-[#00c4a7]" />
              Setagaya Ward Area Guide 2025
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Updated: February 2025</span>
              <span>|</span>
              <Clock size={16} />
              <span>Reading time: 5 min</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Located in the southwestern part of Tokyo's 23 wards, Setagaya Ward is an area where urban convenience and suburban tranquility are ideally blended. The four major areas of Sangenjaya, Shimokitazawa, Futako-Tamagawa, and Seijogakuen-mae each have their own unique appeal, attracting diverse people from young business professionals to creators and international residents.
          </p>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card className="animate-on-scroll">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#00c4a7] flex items-center gap-2">
            <MapPin size={24} />
            Setagaya Ward Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
            <Image
              src="/images/setagaya-map.png"
              alt="Setagaya Ward Map"
              width={600}
              height={300}
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Check size={20} className="text-[#00c4a7]" />
              Recommended for people who want:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Train size={14} className="mr-1" />
                Good access to downtown
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Tree size={14} className="mr-1" />
                Green environment
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Music size={14} className="mr-1" />
                Unique local culture
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Users size={14} className="mr-1" />
                Family-friendly
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Globe size={14} className="mr-1" />
                International environment
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rent Table Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <DollarSign size={20} />
              Rent Prices & Area Features
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Info size={16} />
              Data standard: 35-40㎡, 1R/1K/1DK average (As of February 2025)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Area</TableHead>
                    <TableHead>Rent</TableHead>
                    <TableHead>To Shinjuku</TableHead>
                    <TableHead>To Shibuya</TableHead>
                    <TableHead>Income Guide</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sangenjaya</TableCell>
                    <TableCell>¥130,000-160,000</TableCell>
                    <TableCell>25 min</TableCell>
                    <TableCell>10 min</TableCell>
                    <TableCell>¥5M~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Shimokitazawa</TableCell>
                    <TableCell>¥120,000-150,000</TableCell>
                    <TableCell>15 min</TableCell>
                    <TableCell>7 min</TableCell>
                    <TableCell>¥4.7M~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Futako-Tamagawa</TableCell>
                    <TableCell>¥130,000-160,000</TableCell>
                    <TableCell>35 min</TableCell>
                    <TableCell>20 min</TableCell>
                    <TableCell>¥5M~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Seijogakuen-mae</TableCell>
                    <TableCell>¥120,000-150,000</TableCell>
                    <TableCell>20 min</TableCell>
                    <TableCell>25 min</TableCell>
                    <TableCell>¥4.7M~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Kyodo*</TableCell>
                    <TableCell>¥110,000-140,000</TableCell>
                    <TableCell>20 min</TableCell>
                    <TableCell>22 min</TableCell>
                    <TableCell>¥4.5M~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jiyugaoka*</TableCell>
                    <TableCell>¥140,000-170,000</TableCell>
                    <TableCell>30 min</TableCell>
                    <TableCell>15 min</TableCell>
                    <TableCell>¥5.2M~</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 flex items-start gap-2">
              <Info size={14} className="mt-0.5 flex-shrink-0" />
              * Areas adjacent to Setagaya Ward. Included as practical information considering lifestyle zones.
            </p>
          </CardContent>
        </Card>

        {/* Area Features Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Home size={20} />
              Property Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sangenjaya */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <Coffee size={18} className="text-[#f08080]" />
                Sangenjaya
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Den-en-toshi Line / Setagaya Line, 10 min to Shibuya, 25 min to Shinjuku</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">5-15 year old condos, auto-lock equipped</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Excellent access, convenient living, young culture</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Busy around station, slightly higher rent</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Shimokitazawa */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <Music size={18} className="text-[#f08080]" />
                Shimokitazawa
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Odakyu Line / Inokashira Line, 7 min to Shibuya, 15 min to Shinjuku</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">10-20 year old condos, many station-close properties</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Good access, affordable prices, cultural</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Narrow streets, crowded on weekends</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Futakotamagawa */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <ShoppingCart size={18} className="text-[#f08080]" />
                Futako-Tamagawa
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Den-en-toshi Line / Oimachi Line, 20 min to Shibuya, 35 min to Shinjuku</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Large-scale condos, close to commercial facilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Convenient shopping, abundant green spaces, family-friendly</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Some areas have hills, station can be crowded</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resident Voices Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Users size={20} />
              Resident Testimonials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">Sarah (28, IT company employee) - Sangenjaya</span>
                </div>
                <p className="text-sm">
                  "The convenience of being just 10 minutes from Shibuya was the deciding factor. On weekends, I do yoga at Setagaya Park or spend time at the Carrot Tower library. Even though it's urban, I can live a surprisingly relaxed lifestyle."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">Tom (32, freelancer) - Shimokitazawa</span>
                </div>
                <p className="text-sm">
                  "Great access to both Shinjuku and Shibuya, and the rent is reasonable. Since I work a lot in cafes, Shimokitazawa's creative atmosphere is perfect for me. On weekends, I enjoy vintage shopping."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">Maria (35, marketing) - Futako-Tamagawa</span>
                </div>
                <p className="text-sm">
                  "Cycling along the Tama River is my weekend pleasure. The Rise facilities are so complete that I can do everything from daily shopping to weekend activities right in this area."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">James (45, university professor) - Seijogakuen-mae</span>
                </div>
                <p className="text-sm">
                  "I chose it for the quiet residential area with lots of greenery and good educational environment for children. There are many international families in the neighborhood, and international schools are nearby, which is reassuring."
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Housing Types Table */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Home size={20} />
              Housing Types & Average Rent
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Info size={16} />
              Data: Setagaya Ward average, February 2025, including management fees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Housing Type</TableHead>
                    <TableHead>Monthly Rent</TableHead>
                    <TableHead>Avg. Size</TableHead>
                    <TableHead>Features</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">1R</TableCell>
                    <TableCell>¥123,900</TableCell>
                    <TableCell>25.2㎡</TableCell>
                    <TableCell>For singles, compact design</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1K</TableCell>
                    <TableCell>¥128,800</TableCell>
                    <TableCell>28.5㎡</TableCell>
                    <TableCell>Efficient space utilization</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1DK</TableCell>
                    <TableCell>¥145,700</TableCell>
                    <TableCell>33.9㎡</TableCell>
                    <TableCell>For couples, separate kitchen</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1LDK</TableCell>
                    <TableCell>¥180,800</TableCell>
                    <TableCell>40.6㎡</TableCell>
                    <TableCell>For couples, spacious living</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2K</TableCell>
                    <TableCell>¥128,600</TableCell>
                    <TableCell>38.4㎡</TableCell>
                    <TableCell>For small families, ample storage</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2DK</TableCell>
                    <TableCell>¥129,800</TableCell>
                    <TableCell>44.3㎡</TableCell>
                    <TableCell>For small families, separate kitchen</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2LDK</TableCell>
                    <TableCell>¥210,000</TableCell>
                    <TableCell>54.7㎡</TableCell>
                    <TableCell>For families, spacious living</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Train Lines Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Train size={20} />
              Major Train Lines & Stations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                Tokyu Den-en-toshi Line
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Shibuya, Ikejiri-ohashi, Sangenjaya, Komazawa-daigaku, Sakura-shinmachi, Yoga, Futako-Tamagawa</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">About 20 minutes from Shibuya to Futako-Tamagawa, convenient for commuting</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                Odakyu Odawara Line
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Shimokitazawa, Setagaya-daita, Umegaoka, Gotokuji, Kyodo, Chitose-funabashi, Soshigaya-okura, Seijogakuen-mae</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">About 20 minutes from Shinjuku to Seijogakuen-mae, note express and semi-express stops</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                Keio Line
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Hatagaya, Sasazuka, Daitabashi, Meidai-mae, Shimo-takaido, Sakura-jo-sui, Kami-kitazawa, Hachiman-yama, Roka-koen, Chitose-karasuyama</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">About 15 minutes from Shinjuku to Chitose-karasuyama, recommend using limited express and express</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping & Dining Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <ShoppingBag size={20} />
              Shopping & Dining
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Coffee size={18} className="text-[#f08080]" />
                Sangenjaya
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Carrot Tower (observation floor, library), Sangenjaya shopping street</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Sangenjaya Bakery (English-speaking staff), Sushi Ikki (Michelin-listed sushi restaurant)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Music size={18} className="text-[#f08080]" />
                Shimokitazawa
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Shimokitazawa station shopping streets, Kitazawa Town Hall</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Green Leaves Cafe (English menu), Songbook (authentic Italian)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ShoppingCart size={18} className="text-[#f08080]" />
                Futako-Tamagawa
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Futako-Tamagawa Rise (luxury brands, restaurants), Tamagawa Takashimaya S.C.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tom's Diner (English-friendly international cuisine), BISTRO GLOUTON (French)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parks & Nature Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Leaf size={20} />
              Parks & Nature
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tree size={18} className="text-[#f08080]" />
                <Droplet size={18} className="text-[#f08080]" />
                Todoroki Valley
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tokyo's only valley, about 1km walking path</span>
                </div>
                <div className="flex items-start gap-2">
                  <Route size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Valley to Uenoge Park walking path (2km)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">5 min walk from Todoroki Station</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tree size={18} className="text-[#f08080]" />
                <Droplet size={18} className="text-[#f08080]" />
                Futako-Tamagawa Green Space
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Along Tama River, cycling road</span>
                </div>
                <div className="flex items-start gap-2">
                  <Route size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Round trip to Hyogo Island Park (4km)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">3 min walk from Futako-Tamagawa Station</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/todoroki-valley.jpeg"
                alt="Todoroki Valley"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Todoroki Valley - The only valley in Tokyo's 23 wards
            </p>
          </CardContent>
        </Card>

        {/* Education & Healthcare Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <GraduationCap size={20} />
              Education & Healthcare
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <School size={18} className="text-[#f08080]" />
                <Globe size={18} className="text-[#f08080]" />
                International Schools
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Seisen International School (English & Japanese)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">St. Mary's International School (English & Japanese)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">British School in Tokyo Showa Campus (English)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Hospital size={18} className="text-[#f08080]" />
                <Stethoscope size={18} className="text-[#f08080]" />
                Healthcare Facilities
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Hospital size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tokyo Medical Center (English & Chinese support)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Stethoscope size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Futako-Tamagawa Rise Clinic (English & Chinese support)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Stethoscope size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Seijo Corti Dental Clinic (English & French support)</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/st-marys.jpeg"
                alt="St. Mary's International School"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              St. Mary's International School - International education facility in Setagaya
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Card className="animate-on-scroll border-t-2 border-[#00c4a7]">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Book size={16} />
              <span>Setagaya Ward Area Guide 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Copyright size={16} />
              <span>2025 AtHearth Inc. All Rights Reserved.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
