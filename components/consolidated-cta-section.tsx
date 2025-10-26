"use client"

import Link from "next/link"
import { MapPin, Train, Check, MessageCircle } from "lucide-react"

export function ConsolidatedCtaSection({ language = "ja" }: { language?: "ja" | "en" }) {
  return (
    <div className="search-section animate-on-scroll" style={{ marginTop: "3rem" }}>
      <h2 className="search-title">
        {language === "ja" ? "あなたにぴったりの物件を探しましょう！" : "Find Your Perfect Property in Setagaya!"}
      </h2>
      <div className="search-options">
        <Link href="https://www.athearth.com/rent?area=setagaya" className="search-option main-cta">
          <MapPin size={16} />
          {language === "ja" ? "世田谷区の物件一覧を見る" : "View Setagaya Properties"}
        </Link>
      </div>
      <h3 style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
        {language === "ja" ? "路線で検索したい方はこちら" : "Search by train line"}
      </h3>
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
      <div
        className="cta-group"
        style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}
      >
        <Link href="https://www.athearth.com/account/eligibility-check" className="eligibility-check">
          <Check size={16} />
          {language === "ja" ? "Eligibility Checkを試してみる" : "Try our Eligibility Check"}
        </Link>
        <Link
          href="https://www.athearth.com/contact/foreigner-support"
          className="eligibility-check"
          style={{ backgroundColor: "#f08080", color: "white" }}
        >
          <MessageCircle size={16} />
          {language === "ja" ? "外国人向け物件相談（英語対応可）" : "Property Consultation (English Available)"}
        </Link>
      </div>

      <style jsx>{`
        .main-cta {
          background-color: white;
          color: var(--athearth-main);
          font-size: 1.2rem;
          padding: 0.75rem 2rem;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: scale(1.1);
          margin: 1rem 0;
        }
        
        .main-cta:hover {
          transform: translateY(-3px) scale(1.1);
        }
      `}</style>
    </div>
  )
}
