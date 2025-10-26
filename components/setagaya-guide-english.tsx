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
    <div className="area-guide-container">
      <style jsx global>{`
        :root {
          --athearth-main: #00c4a7;
          --athearth-base: #ffffff;
          --athearth-accent: #f08080;
          --athearth-sub1: #f2e6d9;
          --athearth-sub2: #6c757d;
        }
        
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: var(--athearth-base);
          color: #333333;
          line-height: 1.6;
        }
        
        .area-guide-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 2rem;
          background-color: var(--athearth-base);
          position: relative;
        }
        
        .guide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid var(--athearth-main);
          position: relative;
        }
        
        .guide-header::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--athearth-accent);
          border-radius: 3px;
        }
        
        .guide-title {
          font-size: 28px;
          font-weight: bold;
          color: var(--athearth-main);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .guide-date {
          font-size: 14px;
          color: var(--athearth-sub2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .guide-intro {
          font-size: 16px;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background-color: var(--athearth-sub1);
          border-radius: 8px;
          position: relative;
        }
        
        .section-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        @media (max-width: 1024px) {
          .section-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .section-card {
          background-color: var(--athearth-base);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #eaeaea;
        }
        
        .section-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .section-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--athearth-main);
        }
        
        .section-title {
          font-size: 22px;
          font-weight: bold;
          color: var(--athearth-main);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--athearth-sub1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .section-title svg {
          color: var(--athearth-main);
        }
        
        .content-item {
          margin-bottom: 1rem;
          position: relative;
          padding-left: 2rem;
        }
        
        .content-item svg {
          position: absolute;
          left: 0;
          top: 0.25rem;
          color: var(--athearth-accent);
        }
        
        .keyword {
          font-weight: bold;
          color: #333333;
          background: linear-gradient(transparent 60%, var(--athearth-sub1) 40%);
          padding: 0 0.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .keyword svg {
          color: var(--athearth-accent);
          position: static;
        }
        
        .data-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .data-point svg {
          color: var(--athearth-main);
        }
        
        .area-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 14px;
        }
        
        .area-table th {
          background-color: var(--athearth-main);
          color: white;
          padding: 0.75rem;
          text-align: left;
        }
        
        .area-table td {
          padding: 0.75rem;
          border-bottom: 1px solid #eaeaea;
        }
        
        .area-table tr:nth-child(even) {
          background-color: rgba(242, 230, 217, 0.3);
        }
        
        .testimonial {
          background-color: var(--athearth-sub1);
          border-radius: 8px;
          padding: 1.25rem;
          margin: 1.5rem 0;
          position: relative;
        }
        
        .testimonial-author {
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .testimonial-author svg {
          color: var(--athearth-accent);
        }
        
        .area-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .area-image-caption {
          font-size: 0.8rem;
          color: var(--athearth-sub2);
          text-align: center;
          margin-top: 0.5rem;
        }
        
        .area-map {
          width: 100%;
          height: 300px;
          border-radius: 8px;
          margin: 1.5rem 0;
          background-color: #f8f9fa;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #eaeaea;
        }
        
        .map-marker {
          position: absolute;
          color: var(--athearth-accent);
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }
        
        .map-marker:hover {
          color: var(--athearth-main);
          transform: translate(-50%, -50%) scale(1.2);
        }
        
        .map-marker.sangenjaya {
          top: 40%;
          left: 60%;
        }
        
        .map-marker.shimokitazawa {
          top: 30%;
          left: 45%;
        }
        
        .map-marker.futakotamagawa {
          top: 60%;
          left: 70%;
        }
        
        .map-marker.seijogakuenmae {
          top: 50%;
          left: 30%;
        }
        
        .map-marker.kyodo {
          top: 45%;
          left: 40%;
        }
        
        .map-marker.jiyugaoka {
          top: 55%;
          left: 55%;
        }
        
        .area-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .feature-tag {
          background-color: var(--athearth-main);
          color: white;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        
        .cta-button {
          display: inline-block;
          background: var(--athearth-main);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          margin: 1.5rem 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          background: #00b096;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eaeaea;
          text-align: center;
          color: var(--athearth-sub2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        .search-section {
          background: linear-gradient(135deg, var(--athearth-main), #00a38c);
          padding: 2.5rem;
          border-radius: 8px;
          margin: 2.5rem 0;
          color: white;
          text-align: center;
        }
        
        .search-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        
        .search-options {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        
        .search-option {
          background-color: rgba(255, 255, 255, 0.9);
          color: var(--athearth-main);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .search-option:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          background: white;
        }
        
        .eligibility-check {
          background-color: white;
          color: var(--athearth-main);
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease, box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .eligibility-check:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Header */}
      <header className="guide-header animate-on-scroll">
        <h1 className="guide-title">
          <MapPin size={24} color="#00c4a7" />
          Setagaya Ward Area Guide 2025
        </h1>
        <div className="guide-date">
          <Calendar size={16} />
          Updated: February 2025 | <Clock size={16} /> Reading time: 5 min
        </div>
      </header>

      {/* Introduction */}
      <div className="guide-intro animate-on-scroll">
        <p>
          東京23区の南西部に位置する世田谷区。都会の利便性と郊外の静けさが理想的に融合したエリアです。特に三軒茶屋、下北沢、二子玉川、成城学園前の4大エリアは、それぞれ異なる魅力を持ち、若手ビジネスパーソンからクリエイター、外国人居住者まで、多様な人々を惹きつけています。
        </p>
      </div>

      {/* Setagaya Map Overview */}
      <div className="section-card animate-on-scroll" style={{ marginBottom: "2rem" }}>
        <div className="section-icon">
          <MapPin size={24} />
        </div>
        <h2 className="section-title">
          <MapPin size={20} />
          Setagaya Ward Map
        </h2>
        <div className="area-map">
          <Image
            src="/images/setagaya-map.png"
            alt="Setagaya Ward Map"
            width={600}
            height={300}
            className="area-image"
            priority
          />
          <div className="map-marker sangenjaya">
            <MapPin size={24} />
          </div>
          <div className="map-marker shimokitazawa">
            <MapPin size={24} />
          </div>
          <div className="map-marker futakotamagawa">
            <MapPin size={24} />
          </div>
          <div className="map-marker seijogakuenmae">
            <MapPin size={24} />
          </div>
          <div className="map-marker kyodo">
            <MapPin size={24} />
          </div>
          <div className="map-marker jiyugaoka">
            <MapPin size={24} />
          </div>
        </div>
        <div className="content-item">
          <Check size={18} />
          <span className="keyword">
            <ThumbsUp size={16} /> Recommended for people who want:
          </span>
        </div>
        <div className="area-features">
          <div className="feature-tag">
            <Train size={14} /> Good access to downtown
          </div>
          <div className="feature-tag">
            <Tree size={14} /> Green environment
          </div>
          <div className="feature-tag">
            <Music size={14} /> Unique local culture
          </div>
          <div className="feature-tag">
            <Users size={14} /> Family-friendly
          </div>
          <div className="feature-tag">
            <Globe size={14} /> International environment
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="section-grid">
        {/* Section 1: 主要エリアの賃料相場と特徴 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <DollarSign size={24} />
          </div>
          <h2 className="section-title">
            <DollarSign size={20} />
            Rent Prices & Area Features
          </h2>
          <p className="content-item">
            <Info size={18} />
            Data standard: 35-40㎡, 1R/1K/1DK average (As of February 2025)
          </p>
          <table className="area-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Rent</th>
                <th>To Shinjuku</th>
                <th>To Shibuya</th>
                <th>Income Guide</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>三軒茶屋</td>
                <td>13-16万円</td>
                <td>25分</td>
                <td>10分</td>
                <td>500万円~</td>
              </tr>
              <tr>
                <td>下北沢</td>
                <td>12-15万円</td>
                <td>15分</td>
                <td>7分</td>
                <td>470万円~</td>
              </tr>
              <tr>
                <td>二子玉川</td>
                <td>13-16万円</td>
                <td>35分</td>
                <td>20分</td>
                <td>500万円~</td>
              </tr>
              <tr>
                <td>成城学園前</td>
                <td>12-15万円</td>
                <td>20分</td>
                <td>25分</td>
                <td>470万円~</td>
              </tr>
              <tr>
                <td>経堂*</td>
                <td>11-14万円</td>
                <td>20分</td>
                <td>22分</td>
                <td>450万円~</td>
              </tr>
              <tr>
                <td>自由が丘*</td>
                <td>14-17万円</td>
                <td>30分</td>
                <td>15分</td>
                <td>520万円~</td>
              </tr>
            </tbody>
          </table>
          <p className="content-item">
            <Info size={18} />* Areas adjacent to Setagaya Ward. Included as practical information considering lifestyle
            zones.
          </p>
        </div>

        {/* Section 2: 主要エリア代表駅・物件特徴 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <Building size={24} />
          </div>
          <h2 className="section-title">
            <Home size={20} />
            Property Characteristics
          </h2>
          <div className="content-item">
            <Star size={18} />
            <span className="keyword">
              <Coffee size={16} /> 三軒茶屋
            </span>
          </div>
          <div className="data-point">
            <Train size={18} />
            田園都市線・世田谷線、渋谷10分・新宿25分
          </div>
          <div className="data-point">
            <Building size={18} />
            築5-15年マンション中心・オートロック完備
          </div>
          <div className="data-point">
            <ThumbsUp size={18} />
            交通至便・生活便利・若者文化
          </div>
          <div className="data-point">
            <ThumbsDown size={18} />
            駅周辺賑やか・家賃やや高め
          </div>

          <div className="content-item">
            <Star size={18} />
            <span className="keyword">
              <Music size={16} /> 下北沢
            </span>
          </div>
          <div className="data-point">
            <Train size={18} />
            小田急線・井の頭線、渋谷7分・新宿15分
          </div>
          <div className="data-point">
            <Building size={18} />
            築10-20年マンション多め・駅近物件豊富
          </div>
          <div className="data-point">
            <ThumbsUp size={18} />
            アクセス良好・物価抑えめ・文化的
          </div>
          <div className="data-point">
            <ThumbsDown size={18} />
            道が狭い・休日混雑
          </div>

          <div className="content-item">
            <Star size={18} />
            <span className="keyword">
              <ShoppingCart size={16} /> 二子玉川
            </span>
          </div>
          <div className="data-point">
            <Train size={18} />
            田園都市線・大井町線、渋谷20分・新宿35分
          </div>
          <div className="data-point">
            <Building size={18} />
            大規模マンション中心・商業施設近接
          </div>
          <div className="data-point">
            <ThumbsUp size={18} />
            買物便利・緑地充実・家族向け
          </div>
          <div className="data-point">
            <ThumbsDown size={18} />
            一部坂が多い・駅混雑
          </div>
        </div>

        {/* Section 3: 住民層と住民の声 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <Users size={24} />
          </div>
          <h2 className="section-title">
            <Users size={20} />
            Resident Testimonials
          </h2>
          <div className="testimonial">
            <div className="testimonial-author">
              <User size={18} />
              三軒茶屋在住 Sarah（28歳、IT企業勤務）
            </div>
            <p>
              "渋谷まで10分という便利さが決め手でした。休日は世田谷公園でヨガをしたり、キャロットタワーの図書館で過ごしたり。都会なのに意外とゆとりのある暮らしができています。"
            </p>
          </div>
          <div className="testimonial">
            <div className="testimonial-author">
              <User size={18} />
              下北沢在住 Tom（32歳、フリーランス）
            </div>
            <p>
              "新宿・渋谷どちらにもアクセスが良く、家賃も手頃です。カフェでの作業が多い仕事なので、クリエイティブな雰囲気の下北沢は私にぴったり。休日は古着屋巡りを楽しんでいます。"
            </p>
          </div>
          <div className="testimonial">
            <div className="testimonial-author">
              <User size={18} />
              二子玉川在住 Maria（35歳、マーケティング）
            </div>
            <p>
              "多摩川沿いのサイクリングが週末の楽しみです。ライズの施設が充実しているので、普段の買い物から休日の過ごし方まで、この地域だけで完結できるのが魅力ですね。"
            </p>
          </div>
          <div className="testimonial">
            <div className="testimonial-author">
              <User size={18} />
              成城学園前在住 James（45歳、大学教授）
            </div>
            <p>
              "閑静な住宅街で、緑も多く、子どもの教育環境を考えて選びました。近所には外国人家族も多く、インターナショナルスクールも近いので安心です。"
            </p>
          </div>
        </div>

        {/* Section 4: 住宅タイプと平均家賃 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <DollarSign size={24} />
          </div>
          <h2 className="section-title">
            <Home size={20} />
            Housing Types & Average Rent
          </h2>
          <p className="content-item">
            <Info size={18} />
            Data: Setagaya Ward average, February 2025, including management fees
          </p>
          <table className="area-table">
            <thead>
              <tr>
                <th>Housing Type</th>
                <th>Monthly Rent</th>
                <th>Avg. Size</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ワンルーム</td>
                <td>12.39万円</td>
                <td>25.2㎡</td>
                <td>単身者向け・コンパクト設計</td>
              </tr>
              <tr>
                <td>1K</td>
                <td>12.88万円</td>
                <td>28.5㎡</td>
                <td>効率的な空間利用</td>
              </tr>
              <tr>
                <td>1DK</td>
                <td>14.57万円</td>
                <td>33.9㎡</td>
                <td>カップル向け・キッチン独立</td>
              </tr>
              <tr>
                <td>1LDK</td>
                <td>18.08万円</td>
                <td>40.6㎡</td>
                <td>カップル向け・広めのリビング</td>
              </tr>
              <tr>
                <td>2K</td>
                <td>12.86万円</td>
                <td>38.4㎡</td>
                <td>小家族向け・収納スペース充実</td>
              </tr>
              <tr>
                <td>2DK</td>
                <td>12.98万円</td>
                <td>44.3㎡</td>
                <td>小家族向け・キッチン独立型</td>
              </tr>
              <tr>
                <td>2LDK</td>
                <td>21.00万円</td>
                <td>54.7㎡</td>
                <td>ファミリー向け・広々リビング</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5: 主要路線 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <Train size={24} />
          </div>
          <h2 className="section-title">
            <Train size={20} />
            Major Train Lines & Stations
          </h2>
          <div className="content-item">
            <Train size={18} />
            <span className="keyword">
              <Train size={16} /> 東急田園都市線
            </span>
          </div>
          <div className="data-point">
            <Star size={18} />
            渋谷、池尻大橋、三軒茶屋、駒沢大学、桜新町、用賀、二子玉川
          </div>
          <div className="data-point">
            <Info size={18} />
            渋谷から二子玉川まで約20分、通勤通学に便利
          </div>

          <div className="content-item">
            <Train size={18} />
            <span className="keyword">
              <Train size={16} /> 小田急小田原線
            </span>
          </div>
          <div className="data-point">
            <Star size={18} />
            下北沢、世田谷代田、梅ヶ丘、豪徳寺、経堂、千歳船橋、祖師ヶ谷大蔵、成城学園前
          </div>
          <div className="data-point">
            <Info size={18} />
            新宿から成城学園前まで約20分、急行・準急の停車駅に注目
          </div>

          <div className="content-item">
            <Train size={18} />
            <span className="keyword">
              <Train size={16} /> 京王線
            </span>
          </div>
          <div className="data-point">
            <Star size={18} />
            幡ヶ谷、笹塚、代田橋、明大前、下高井戸、桜上水、上北沢、八幡山、芦花公園、千歳烏山
          </div>
          <div className="data-point">
            <Info size={18} />
            新宿から千歳烏山まで約15分、特急・急行の利用がおすすめ
          </div>
        </div>

        {/* Section 6: 生活環境 - 買い物・飲食 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <ShoppingBag size={24} />
          </div>
          <h2 className="section-title">
            <ShoppingBag size={20} />
            Shopping & Dining
          </h2>
          <div className="content-item">
            <ShoppingBag size={18} />
            <span className="keyword">
              <Coffee size={16} /> 三軒茶屋
            </span>
          </div>
          <div className="data-point">
            <Building size={18} />
            キャロットタワー（展望フロア、図書館）、三軒茶屋商店街
          </div>
          <div className="data-point">
            <Utensils size={18} />
            Sangenjaya Bakery (英語対応スタッフ在籍)、鮨一輝 (ミシュラン掲載寿司店)
          </div>

          <div className="content-item">
            <ShoppingBag size={18} />
            <span className="keyword">
              <Music size={16} /> 下北沢
            </span>
          </div>
          <div className="data-point">
            <Building size={18} />
            下北沢駅前商店街、しもきた商店街、北沢タウンホール
          </div>
          <div className="data-point">
            <Utensils size={18} />
            Green Leaves Cafe (英語メニュー)、ソングブック (本格イタリアン)
          </div>

          <div className="content-item">
            <ShoppingBag size={18} />
            <span className="keyword">
              <ShoppingCart size={16} /> 二子玉川
            </span>
          </div>
          <div className="data-point">
            <Building size={18} />
            二子玉川ライズ（高級ブランド、レストラン）、玉川高島屋S・C
          </div>
          <div className="data-point">
            <Utensils size={18} />
            Tom's Diner (英語対応多国籍料理)、BISTRO GLOUTON (フレンチ)
          </div>
        </div>

        {/* Section 7: 生活環境 - 公園・自然 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <Leaf size={24} />
          </div>
          <h2 className="section-title">
            <Leaf size={20} />
            Parks & Nature
          </h2>
          <div className="content-item">
            <Tree size={18} />
            <span className="keyword">
              <Droplet size={16} /> 等々力渓谷
            </span>
          </div>
          <div className="data-point">
            <Info size={18} />
            東京唯一の渓谷・約1kmの遊歩道
          </div>
          <div className="data-point">
            <Route size={18} />
            渓谷〜上野毛公園散策路（2km）
          </div>
          <div className="data-point">
            <Train size={18} />
            等々力駅徒歩5分
          </div>

          <div className="content-item">
            <Tree size={18} />
            <span className="keyword">
              <Droplet size={16} /> 二子玉川緑地
            </span>
          </div>
          <div className="data-point">
            <Info size={18} />
            多摩川沿い・サイクリングロード
          </div>
          <div className="data-point">
            <Route size={18} />
            兵庫島公園往復（4km）
          </div>
          <div className="data-point">
            <Train size={18} />
            二子玉川駅徒歩3分
          </div>

          <Image
            src="/images/todoroki-valley.jpeg"
            alt="Todoroki Valley"
            width={400}
            height={200}
            className="area-image"
            style={{ objectFit: "cover" }}
            priority
          />
          <p className="area-image-caption">Todoroki Valley - The only valley in Tokyo's 23 wards</p>
        </div>

        {/* Section 8: */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <GraduationCap size={24} />
          </div>
          <h2 className="section-title">
            <GraduationCap size={20} />
            Education & Healthcare
          </h2>
          <div className="content-item">
            <School size={18} />
            <span className="keyword">
              <Globe size={16} /> インターナショナルスクール
            </span>
          </div>
          <div className="data-point">
            <Building size={18} />
            清泉インターナショナルスクール（英語・日本語）
          </div>
          <div className="data-point">
            <Building size={18} />
            セントメリーズインターナショナルスクール（英語・日本語）
          </div>
          <div className="data-point">
            <Building size={18} />
            ブリティッシュスクール東京昭和校（英語）
          </div>

          <div className="content-item">
            <Hospital size={18} />
            <span className="keyword">
              <Stethoscope size={16} /> 医療施設
            </span>
          </div>
          <div className="data-point">
            <Hospital size={18} />
            東京医療センター（英語・中国語対応）
          </div>
          <div className="data-point">
            <Stethoscope size={18} />
            二子玉川ライズクリニック（英語・中国語対応）
          </div>
          <div className="data-point">
            <Stethoscope size={18} />
            成城コルティデンタルクリニック（英語・フランス語対応）
          </div>
          <Image
            src="/images/st-marys.jpeg"
            alt="St. Mary's International School"
            width={400}
            height={200}
            className="area-image"
            style={{ objectFit: "cover" }}
            priority
          />
          <p className="area-image-caption">
            St. Mary's International School - International education facility in Setagaya
          </p>
        </div>
      </div>

      {!hideCta && (
        <div className="search-section animate-on-scroll">
          <h2 className="search-title">Which area is your favorite?</h2>
          <div className="search-options">
            <Link href="https://www.athearth.com/rent?area=setagaya" className="search-option">
              <MapPin size={16} />
              View Setagaya Properties
            </Link>
          </div>
          <h3 style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>Search by train line</h3>
          <div className="search-options">
            <Link href="https://www.athearth.com/rent?train_line=denentoshi" className="search-option">
              <Train size={16} />
              東急田園都市線
            </Link>
            <Link href="https://www.athearth.com/rent?train_line=odakyu" className="search-option">
              <Train size={16} />
              小田急小田原線
            </Link>
            <Link href="https://www.athearth.com/rent?train_line=keio" className="search-option">
              <Train size={16} />
              京王線
            </Link>
            <Link href="https://www.athearth.com/rent?train_line=oimachi" className="search-option">
              <Train size={16} />
              東急大井町線
            </Link>
            <Link href="https://www.athearth.com/rent?train_line=setagaya" className="search-option">
              <Train size={16} />
              東急世田谷線
            </Link>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="https://www.athearth.com/account/eligibility-check" className="eligibility-check">
              <Check size={16} />
              Try our Eligibility Check!
            </Link>
          </div>
        </div>
      )}

      <footer className="footer animate-on-scroll">
        <div>
          <Book size={16} style={{ marginRight: "0.5rem", display: "inline" }} />
          Setagaya Ward Area Guide 2025
        </div>
        <div>
          <Copyright size={16} style={{ marginRight: "0.5rem", display: "inline" }} />
          2025 AtHearth Inc. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
