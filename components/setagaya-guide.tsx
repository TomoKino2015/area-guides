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

export function SetagayaAreaGuide({ hideCta = false }: { hideCta?: boolean }) {
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
              世田谷区エリアガイド2025
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>2025年2月更新</span>
              <span>|</span>
              <Clock size={16} />
              <span>読了時間: 5分</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            東京23区の南西部に位置する世田谷区。都会の利便性と郊外の静けさが理想的に融合したエリアです。特に三軒茶屋、下北沢、二子玉川、成城学園前の4大エリアは、それぞれ異なる魅力を持ち、若手ビジネスパーソンからクリエイター、外国人居住者まで、多様な人々を惹きつけています。
          </p>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card className="animate-on-scroll">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#00c4a7] flex items-center gap-2">
            <MapPin size={24} />
            世田谷区マップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
            <Image
              src="/images/setagaya-map.png"
              alt="世田谷区マップ"
              width={600}
              height={300}
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Check size={20} className="text-[#00c4a7]" />
              世田谷区をおすすめする方:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Train size={14} className="mr-1" />
                都心アクセス良好
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Tree size={14} className="mr-1" />
                緑豊かな環境
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Music size={14} className="mr-1" />
                個性的な街の文化
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Users size={14} className="mr-1" />
                家族向け環境
              </Badge>
              <Badge variant="secondary" className="bg-[#00c4a7] text-white px-4 py-2">
                <Globe size={14} className="mr-1" />
                国際的な環境
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photo Gallery Section */}
      <Card className="animate-on-scroll">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#00c4a7] flex items-center gap-2">
            <MapPin size={24} />
            主要エリアの風景
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
                <Image
                  src="/images/shimokitazawa.webp"
                  alt="下北沢の商店街"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  下北沢の商店街 - 個性的な店が並ぶ文化の発信地
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg">
                <Image
                  src="/images/futakotamagawa.webp"
                  alt="二子玉川の多摩川沿い"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  二子玉川の多摩川沿い - 都会と自然が調和する住環境
                </p>
              </CardContent>
            </Card>
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
              主要エリアの賃料相場と特徴
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Info size={16} />
              データ基準: 35-40㎡、1ルーム・1K・1DKの平均値（2025年2月時点）
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>エリア</TableHead>
                    <TableHead>賃料</TableHead>
                    <TableHead>新宿まで</TableHead>
                    <TableHead>渋谷まで</TableHead>
                    <TableHead>年収目安</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">三軒茶屋</TableCell>
                    <TableCell>13-16万円</TableCell>
                    <TableCell>25分</TableCell>
                    <TableCell>10分</TableCell>
                    <TableCell>500万円~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">下北沢</TableCell>
                    <TableCell>12-15万円</TableCell>
                    <TableCell>15分</TableCell>
                    <TableCell>7分</TableCell>
                    <TableCell>470万円~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">二子玉川</TableCell>
                    <TableCell>13-16万円</TableCell>
                    <TableCell>35分</TableCell>
                    <TableCell>20分</TableCell>
                    <TableCell>500万円~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">成城学園前</TableCell>
                    <TableCell>12-15万円</TableCell>
                    <TableCell>20分</TableCell>
                    <TableCell>25分</TableCell>
                    <TableCell>470万円~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">経堂*</TableCell>
                    <TableCell>11-14万円</TableCell>
                    <TableCell>20分</TableCell>
                    <TableCell>22分</TableCell>
                    <TableCell>450万円~</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">自由が丘*</TableCell>
                    <TableCell>14-17万円</TableCell>
                    <TableCell>30分</TableCell>
                    <TableCell>15分</TableCell>
                    <TableCell>520万円~</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 flex items-start gap-2">
              <Info size={14} className="mt-0.5 flex-shrink-0" />
              *印は世田谷区に隣接する主要駅です。区境や生活圏を考慮した実用的な情報として参考にしてください。
            </p>
          </CardContent>
        </Card>

        {/* Area Features Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <Home size={20} />
              主要エリア物件特徴
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sangenjaya */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <Coffee size={18} className="text-[#f08080]" />
                三軒茶屋
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">田園都市線・世田谷線、渋谷10分・新宿25分</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">築5-15年マンション中心・オートロック完備</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">交通至便・生活便利・若者文化</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">駅周辺賑やか・家賃やや高め</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Shimokitazawa */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <Music size={18} className="text-[#f08080]" />
                下北沢
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">小田急線・井の頭線、渋谷7分・新宿15分</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">築10-20年マンション多め・駅近物件豊富</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">アクセス良好・物価抑えめ・文化的</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">道が狭い・休日混雑</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Futakotamagawa */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#f08080]" />
                <ShoppingCart size={18} className="text-[#f08080]" />
                二子玉川
              </h3>
              <div className="space-y-2 ml-6">
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">田園都市線・大井町線、渋谷20分・新宿35分</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">大規模マンション中心・商業施設近接</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">買物便利・緑地充実・家族向け</span>
                </div>
                <div className="flex items-start gap-2">
                  <ThumbsDown size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">一部坂が多い・駅混雑</span>
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
              住民の声
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">三軒茶屋在住 Sarah（28歳、IT企業勤務）</span>
                </div>
                <p className="text-sm">
                  "渋谷まで10分という便利さが決め手でした。休日は世田谷公園でヨガをしたり、キャロットタワーの図書館で過ごしたり。都会なのに意外とゆとりのある暮らしができています。"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">下北沢在住 Tom（32歳、フリーランス）</span>
                </div>
                <p className="text-sm">
                  "新宿・渋谷どちらにもアクセスが良く、家賃も手頃です。カフェでの作業が多い仕事なので、クリエイティブな雰囲気の下北沢は私にぴったり。休日は古着屋巡りを楽しんでいます。"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">二子玉川在住 Maria（35歳、マーケティング）</span>
                </div>
                <p className="text-sm">
                  "多摩川沿いのサイクリングが週末の楽しみです。ライズの施設が充実しているので、普段の買い物から休日の過ごし方まで、この地域だけで完結できるのが魅力ですね。"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f2e6d9]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <User size={18} className="text-[#f08080]" />
                  <span className="font-semibold">成城学園前在住 James（45歳、大学教授）</span>
                </div>
                <p className="text-sm">
                  "閑静な住宅街で、緑も多く、子どもの教育環境を考えて選びました。近所には外国人家族も多く、インターナショナルスクールも近いので安心です。"
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
              住宅タイプと平均家賃
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Info size={16} />
              データ基準: 世田谷区全体の平均、2025年2月現在、管理費込み
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>住宅タイプ</TableHead>
                    <TableHead>平均月額家賃</TableHead>
                    <TableHead>平均面積</TableHead>
                    <TableHead>特徴</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ワンルーム</TableCell>
                    <TableCell>12.39万円</TableCell>
                    <TableCell>25.2㎡</TableCell>
                    <TableCell>単身者向け・コンパクト設計</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1K</TableCell>
                    <TableCell>12.88万円</TableCell>
                    <TableCell>28.5㎡</TableCell>
                    <TableCell>効率的な空間利用</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1DK</TableCell>
                    <TableCell>14.57万円</TableCell>
                    <TableCell>33.9㎡</TableCell>
                    <TableCell>カップル向け・キッチン独立</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1LDK</TableCell>
                    <TableCell>18.08万円</TableCell>
                    <TableCell>40.6㎡</TableCell>
                    <TableCell>カップル向け・広めのリビング</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2K</TableCell>
                    <TableCell>12.86万円</TableCell>
                    <TableCell>38.4㎡</TableCell>
                    <TableCell>小家族向け・収納スペース充実</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2DK</TableCell>
                    <TableCell>12.98万円</TableCell>
                    <TableCell>44.3㎡</TableCell>
                    <TableCell>小家族向け・キッチン独立型</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2LDK</TableCell>
                    <TableCell>21.00万円</TableCell>
                    <TableCell>54.7㎡</TableCell>
                    <TableCell>ファミリー向け・広々リビング</TableCell>
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
              主要路線と駅
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                東急田園都市線
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">渋谷、池尻大橋、三軒茶屋、駒沢大学、桜新町、用賀、二子玉川</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">渋谷から二子玉川まで約20分、通勤通学に便利</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                小田急小田原線
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">下北沢、世田谷代田、梅ヶ丘、豪徳寺、経堂、千歳船橋、祖師ヶ谷大蔵、成城学園前</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">新宿から成城学園前まで約20分、急行・準急の停車駅に注目</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Train size={18} className="text-[#00c4a7]" />
                京王線
              </h3>
              <div className="ml-6 space-y-1">
                <div className="flex items-start gap-2">
                  <Star size={16} className="text-[#f08080] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">幡ヶ谷、笹塚、代田橋、明大前、下高井戸、桜上水、上北沢、八幡山、芦花公園、千歳烏山</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">新宿から千歳烏山まで約15分、特急・急行の利用がおすすめ</span>
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
              買い物・飲食
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Coffee size={18} className="text-[#f08080]" />
                三軒茶屋
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">キャロットタワー（展望フロア、図書館）、三軒茶屋商店街</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Sangenjaya Bakery (英語対応スタッフ在籍)、鮨一輝 (ミシュラン掲載寿司店)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Music size={18} className="text-[#f08080]" />
                下北沢
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">下北沢駅前商店街、しもきた商店街、北沢タウンホール</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Green Leaves Cafe (英語メニュー)、ソングブック (本格イタリアン)</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ShoppingCart size={18} className="text-[#f08080]" />
                二子玉川
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">二子玉川ライズ（高級ブランド、レストラン）、玉川高島屋S・C</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tom's Diner (英語対応多国籍料理)、BISTRO GLOUTON (フレンチ)</span>
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
              公園・自然
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tree size={18} className="text-[#f08080]" />
                <Droplet size={18} className="text-[#f08080]" />
                等々力渓谷
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">東京唯一の渓谷・約1kmの遊歩道</span>
                </div>
                <div className="flex items-start gap-2">
                  <Route size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">渓谷〜上野毛公園散策路（2km）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">等々力駅徒歩5分</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tree size={18} className="text-[#f08080]" />
                <Droplet size={18} className="text-[#f08080]" />
                二子玉川緑地
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">多摩川沿い・サイクリングロード</span>
                </div>
                <div className="flex items-start gap-2">
                  <Route size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">兵庫島公園往復（4km）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">二子玉川駅徒歩3分</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/todoroki-valley.jpeg"
                alt="等々力渓谷"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              等々力渓谷 - 東京23区内唯一の渓谷
            </p>
          </CardContent>
        </Card>

        {/* Education & Healthcare Section */}
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#00c4a7] flex items-center gap-2">
              <GraduationCap size={20} />
              教育・医療
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <School size={18} className="text-[#f08080]" />
                <Globe size={18} className="text-[#f08080]" />
                インターナショナルスクール
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">清泉インターナショナルスクール（英語・日本語）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">セントメリーズインターナショナルスクール（英語・日本語）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ブリティッシュスクール東京昭和校（英語）</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Hospital size={18} className="text-[#f08080]" />
                <Stethoscope size={18} className="text-[#f08080]" />
                医療施設
              </h3>
              <div className="ml-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Hospital size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">東京医療センター（英語・中国語対応）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Stethoscope size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">二子玉川ライズクリニック（英語・中国語対応）</span>
                </div>
                <div className="flex items-start gap-2">
                  <Stethoscope size={16} className="text-[#00c4a7] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">成城コルティデンタルクリニック（英語・フランス語対応）</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/st-marys.jpeg"
                alt="セント・メアリーズ・インターナショナルスクール"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              セント・メアリーズ・インターナショナルスクール - 世田谷区にある国際教育施設
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
              <span>世田谷区エリアガイド2025</span>
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
