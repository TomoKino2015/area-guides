"use client"

import { useEffect } from "react"

export function AtHearthInfographic() {
  useEffect(() => {
    // Add scroll animation effect
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Run once on load

    return () => window.removeEventListener("scroll", animateOnScroll)
  }, [])

  return (
    <div className="infographic-container">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        
        :root {
          --athearth-main: #00c4a7;
          --athearth-base: #ffffff;
          --athearth-accent: #f08080;
          --athearth-sub1: #f2e6d9;
          --athearth-sub2: #6c757d;
        }
        
        body {
          font-family: 'Zen Kurenaido', sans-serif;
          background-color: var(--athearth-base);
          color: var(--athearth-sub2);
          line-height: 1.6;
        }
        
        .infographic-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 2rem;
          background-color: var(--athearth-base);
          background-image: radial-gradient(var(--athearth-sub1) 1px, transparent 1px);
          background-size: 20px 20px;
          position: relative;
        }
        
        .infographic-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid var(--athearth-main);
          position: relative;
        }
        
        .infographic-header::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--athearth-accent);
          border-radius: 3px;
        }
        
        .infographic-title {
          font-family: 'Kaisei Decol', serif;
          font-size: 2.5rem;
          font-weight: bold;
          color: transparent;
          background: linear-gradient(45deg, var(--athearth-main), var(--athearth-accent));
          -webkit-background-clip: text;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .infographic-date {
          font-family: 'Yomogi', cursive;
          color: var(--athearth-sub2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .section-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        @media (max-width: 1024px) {
          .section-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .section-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .section-card {
          background-color: var(--athearth-base);
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px dashed var(--athearth-main);
        }
        
        .section-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .section-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 50px 50px 0;
          border-color: transparent var(--athearth-main) transparent transparent;
          opacity: 0.2;
        }
        
        .section-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          color: var(--athearth-main);
          font-size: 1.5rem;
          z-index: 2;
        }
        
        .section-title {
          font-family: 'Kaisei Decol', serif;
          font-size: 1.5rem;
          color: var(--athearth-main);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--athearth-sub1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .section-title i {
          color: var(--athearth-main);
        }
        
        .content-item {
          margin-bottom: 1rem;
          position: relative;
          padding-left: 2rem;
        }
        
        .content-item i {
          position: absolute;
          left: 0;
          top: 0.25rem;
          color: var(--athearth-accent);
        }
        
        .keyword {
          font-weight: bold;
          color: var(--athearth-sub2);
          background: linear-gradient(transparent 60%, var(--athearth-sub1) 40%);
          padding: 0 0.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .keyword i {
          color: var(--athearth-accent);
          position: static;
        }
        
        .data-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .data-point i {
          position: static;
          color: var(--athearth-main);
        }
        
        .arrow-connector {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
          color: var(--athearth-main);
          font-size: 1.5rem;
        }
        
        .highlight-box {
          background-color: var(--athearth-sub1);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          position: relative;
        }
        
        .highlight-box::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 20px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 10px 10px 10px;
          border-color: transparent transparent var(--athearth-sub1) transparent;
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
          padding-top: 1rem;
          border-top: 2px dashed var(--athearth-main);
          text-align: center;
          font-family: 'Yomogi', cursive;
          color: var(--athearth-sub2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      {/* Header */}
      <header className="infographic-header animate-on-scroll">
        <h1 className="infographic-title">
          <i className="fa-solid fa-house fa-beat" style={{ color: "#00c4a7" }}></i>
          AtHearth 投資家向けプレゼンテーション
          <i className="fa-solid fa-heart fa-beat" style={{ color: "#f08080" }}></i>
        </h1>
        <div className="infographic-date">
          <i className="fa-regular fa-calendar"></i>
          2025年3月作成
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="section-grid">
        {/* Section 1: 会社概要とビジョン */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-building fa-2x"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-flag fa-beat"></i>
            会社概要とビジョン
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-user-tie"></i>
            <span className="keyword">
              <i className="fa-solid fa-user"></i>創業者
            </span>
            : 紀野知成氏 - 米軍基地、養護学校での多様な成長環境、米国・フランスでの国際経験
          </div>
          <div className="content-item">
            <i className="fa-solid fa-calendar-day"></i>
            <span className="keyword">
              <i className="fa-solid fa-building-circle-check"></i>設立
            </span>
            : 2015年10月、東京都知事(2)第102306号の宅建業免許取得
          </div>
          <div className="content-item">
            <i className="fa-solid fa-lightbulb fa-bounce"></i>
            <span className="keyword">
              <i className="fa-solid fa-eye"></i>ビジョン
            </span>
            : "Live the life you want"（全ての人が好きな様に生きる暮らしを創る）
          </div>
          <div className="content-item">
            <i className="fa-solid fa-coins"></i>
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>資本金
            </span>
            : 1億1197万9920円（資本準備金含む）、総資金調達額1.5億円以上
          </div>
          <div className="content-item">
            <i className="fa-solid fa-newspaper"></i>
            <span className="keyword">
              <i className="fa-solid fa-tv"></i>メディア掲載実績
            </span>
            : Tech Crunch Berlin、国内主要経済メディア等
          </div>
        </div>

        {/* Section 2: 市場環境と課題 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-globe fa-2x fa-spin" style={{ animationDuration: "10s" }}></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            市場環境と課題
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span className="keyword">
              <i className="fa-solid fa-passport"></i>外国人居住者の課題
            </span>
            :
          </div>
          <div className="highlight-box">
            <div className="data-point">
              <i className="fa-solid fa-ban"></i>
              東京の賃貸市場の
              <span className="keyword">
                <i className="fa-solid fa-percent"></i>96%
              </span>
              が外国人に対応していない
            </div>
            <div className="data-point">
              <i className="fa-solid fa-language"></i>
              言語の壁、文化の違い、複雑な手続き、情報不足
            </div>
            <div className="data-point">
              <i className="fa-solid fa-door-closed"></i>
              入居拒否の経験を持つ外国人が
              <span className="keyword">
                <i className="fa-solid fa-percent"></i>40%以上
              </span>
            </div>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-chart-line"></i>
            <span className="keyword">
              <i className="fa-solid fa-users"></i>在留外国人市場データ
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-calendar-check"></i>
            2023年予測：
            <span className="keyword">
              <i className="fa-solid fa-user-group"></i>322万人
            </span>
            （過去最高）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-user-graduate"></i>
            高度専門職：年間
            <span className="keyword">
              <i className="fa-solid fa-arrow-up"></i>14%増
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-briefcase"></i>
            技術・人文知識・国際業務：年間
            <span className="keyword">
              <i className="fa-solid fa-arrow-up"></i>10.9%増
            </span>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-sack-dollar"></i>
            <span className="keyword">
              <i className="fa-solid fa-chart-pie"></i>市場規模
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-earth-asia"></i>
            TAM（全体市場）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>9,162億円
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-bullseye"></i>
            SAM（実行可能市場）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>4,280億円
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-crosshairs"></i>
            SOM（獲得可能市場）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>1,600億円
            </span>
          </div>
        </div>

        {/* Section 3: アットハースのソリューション */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-key fa-2x fa-bounce"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-lightbulb fa-shake"></i>
            アットハースのソリューション
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-gears"></i>
            <span className="keyword">
              <i className="fa-solid fa-star"></i>差別化技術
            </span>
            :
          </div>
          <div className="highlight-box">
            <div className="data-point">
              <i className="fa-solid fa-building-circle-check"></i>
              宅建業×ポータル開発×外国籍特化物件データの業界初の組み合わせ
            </div>
            <div className="data-point">
              <i className="fa-solid fa-robot"></i>
              AI物件マッチングシステム（
              <span className="keyword">
                <i className="fa-solid fa-database"></i>2,500+
              </span>
              の事例から構築）
            </div>
            <div className="data-point">
              <i className="fa-solid fa-check-double"></i>
              <span className="keyword">
                <i className="fa-solid fa-percent"></i>100%
              </span>
              申し込み可能な物件のみを掲載
            </div>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-handshake"></i>
            <span className="keyword">
              <i className="fa-solid fa-list-check"></i>サービス内容
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-language"></i>
            多言語対応（日英仏中）のプラットフォーム
          </div>
          <div className="data-point">
            <i className="fa-solid fa-database"></i>
            外国人向け物件データベース（
            <span className="keyword">
              <i className="fa-solid fa-house"></i>38,357件以上
            </span>
            ）の独自保有
          </div>
          <div className="data-point">
            <i className="fa-solid fa-hands-helping"></i>
            豊富なサポート（生活インフラ設定、翻訳支援、家具レンタル等）
          </div>
        </div>

        {/* Section 4: 技術と開発基盤 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-code fa-2x fa-flip"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-microchip"></i>
            技術と開発基盤
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-layer-group"></i>
            <span className="keyword">
              <i className="fa-solid fa-code-branch"></i>技術スタック
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-brands fa-react"></i>
            フロントエンド: <span className="keyword">Next.js</span>、Tailwind + Shadcn、Zustand
          </div>
          <div className="data-point">
            <i className="fa-solid fa-server"></i>
            バックエンド: <span className="keyword">Hasura GraphQL</span>、Apollo Client、Drizzle ORM
          </div>
          <div className="data-point">
            <i className="fa-solid fa-cloud"></i>
            インフラ: <span className="keyword">Vercel</span>、AWS等
          </div>
          <div className="content-item">
            <i className="fa-solid fa-rocket"></i>
            <span className="keyword">
              <i className="fa-solid fa-wand-magic-sparkles"></i>先進的な開発手法
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-robot"></i>
            AIツールを活用したプロダクト開発
          </div>
          <div className="data-point">
            <i className="fa-solid fa-cubes"></i>
            マイクロサービスアーキテクチャ
          </div>
          <div className="data-point">
            <i className="fa-solid fa-arrows-spin"></i>
            CRMによる業務自動化設計・実装
          </div>
        </div>

        {/* Section 5: 競合分析と優位性 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-chess fa-2x"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-scale-balanced fa-bounce"></i>
            競合分析と優位性
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-users-between-lines"></i>
            <span className="keyword">
              <i className="fa-solid fa-building-user"></i>競合比較
            </span>
            :
          </div>
          <div className="highlight-box">
            <div className="data-point">
              <i className="fa-solid fa-house-user" style={{ color: "#00c4a7" }}></i>
              <span className="keyword">アットハース</span>:
              宅建免許保有、30,000-40,000件の厳選物件、100%外国人対応、技術主導型
            </div>
            <div className="data-point">
              <i className="fa-solid fa-building"></i>
              KEN: 宅建免許保有、約900件の物件、70%以上外国人対応、紙ベースプロセス、Googleレビュー2/5
            </div>
            <div className="data-point">
              <i className="fa-solid fa-building"></i>
              hmlet: 宅建免許なし、約100件の物件、100%外国人対応、家具付き、50%超の賃料プレミアム、Googleレビュー3/5
            </div>
            <div className="data-point">
              <i className="fa-solid fa-building"></i>
              SUUMO: 宅建免許なし、200,000+物件掲載、外国人対応4%以下、多数の釣り広告、Googleレビュー4/5
            </div>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-trophy"></i>
            <span className="keyword">
              <i className="fa-solid fa-award"></i>独自優位性
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-star"></i>
            Googleレビュー評価
            <span className="keyword">
              <i className="fa-solid fa-ranking-star"></i>4.9/5.0
            </span>
            （90+件の自然な口コミ）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <span className="keyword">
              <i className="fa-solid fa-calendar-check"></i>10年
            </span>
            の運営実績と2,500+の顧客サポート実績
          </div>
          <div className="data-point">
            <i className="fa-solid fa-earth-americas"></i>
            <span className="keyword">
              <i className="fa-solid fa-flag"></i>50か国以上
            </span>
            の顧客対応経験
          </div>
        </div>

        {/* Section 6: ビジネスモデルと実績 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-sack-dollar fa-2x fa-bounce"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-chart-line"></i>
            ビジネスモデルと実績
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            <span className="keyword">
              <i className="fa-solid fa-coins"></i>収益モデル
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            仲介手数料: 賃貸契約成立時に借主から徴収（平均単価
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>40-65万円
            </span>
            ）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-building-user"></i>
            法人契約: 企業との包括契約（楽天、メルカリ、ユニクロ、BCG等）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-plus-circle"></i>
            オプションサービス: 家具レンタル、生活サポート（月額1,000円サブスク）等
          </div>
          <div className="content-item">
            <i className="fa-solid fa-chart-simple"></i>
            <span className="keyword">
              <i className="fa-solid fa-gauge-high"></i>KPI実績
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-user-plus"></i>
            月間MQL:{" "}
            <span className="keyword">
              <i className="fa-solid fa-users"></i>100件
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-percent"></i>
            成約率:{" "}
            <span className="keyword">
              <i className="fa-solid fa-check-circle"></i>10.7%
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-money-bill"></i>
            CAC:{" "}
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>0.1万円
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-scale-balanced"></i>
            CPA/CAC:{" "}
            <span className="keyword">
              <i className="fa-solid fa-arrow-up-right-dots"></i>20倍
            </span>
          </div>
        </div>

        {/* Section 7: マーケティングと顧客獲得 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-bullhorn fa-2x fa-shake"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-users-viewfinder"></i>
            マーケティングと顧客獲得
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-magnet"></i>
            <span className="keyword">
              <i className="fa-solid fa-user-plus"></i>効率的な集客モデル
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-share-nodes"></i>
            リファラル（個人・法人）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-percent"></i>40%
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-ad"></i>
            広告（Google, Meta）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-percent"></i>30%
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-seedling"></i>
            オーガニック（SEO・MEO）:{" "}
            <span className="keyword">
              <i className="fa-solid fa-percent"></i>30%
            </span>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-route"></i>
            <span className="keyword">
              <i className="fa-solid fa-person-walking"></i>カスタマージャーニー最適化
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-robot"></i>
            リードナーチャリングプロセスの自動化
          </div>
          <div className="data-point">
            <i className="fa-solid fa-clipboard-question"></i>
            7問・8問の独自スクリーニングシステム
          </div>
          <div className="data-point">
            <i className="fa-solid fa-arrows-to-circle"></i>
            OMO(Online Merges with Offline)戦略による効率的なクロージング
          </div>
        </div>

        {/* Section 8: チームと組織 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-people-group fa-2x fa-beat"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-users-gear"></i>
            チームと組織
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-user-tie"></i>
            <span className="keyword">
              <i className="fa-solid fa-user-group"></i>コアメンバー
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-crown"></i>
            紀野知成: 創業者/CEO（三菱商事出身、日英仏中のマルチリンガル）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-users"></i>
            フロントエンド、AI開発、マーケティング専門家で構成された多国籍チーム
          </div>
          <div className="content-item">
            <i className="fa-solid fa-sitemap"></i>
            <span className="keyword">
              <i className="fa-solid fa-diagram-project"></i>組織戦略
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-chess-knight"></i>
            少数精鋭体制による効率的運営
          </div>
          <div className="data-point">
            <i className="fa-solid fa-robot"></i>
            AI活用による自動化推進
          </div>
          <div className="data-point">
            <i className="fa-solid fa-palette"></i>
            クリエイティブ領域への注力
          </div>
        </div>

        {/* Section 9: 財務状況と成長計画 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-chart-line fa-2x fa-beat"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            財務状況と成長計画
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-chart-pie"></i>
            <span className="keyword">
              <i className="fa-solid fa-calculator"></i>財務指標
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-arrow-trend-up"></i>
            売上高成長率: 前年比
            <span className="keyword">
              <i className="fa-solid fa-percent"></i>200%以上
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-yen-sign"></i>
            平均売上単価:{" "}
            <span className="keyword">
              <i className="fa-solid fa-coins"></i>40-65万円
            </span>
          </div>
          <div className="data-point">
            <i className="fa-solid fa-chart-column"></i>
            粗利率:{" "}
            <span className="keyword">
              <i className="fa-solid fa-arrow-up"></i>高水準
            </span>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-rocket"></i>
            <span className="keyword">
              <i className="fa-solid fa-arrow-up-right-dots"></i>成長戦略
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-hourglass-start"></i>
            短期: インサイドセールスの完全自動化、多言語AIチャットボット開発
          </div>
          <div className="data-point">
            <i className="fa-solid fa-hourglass-half"></i>
            中期: 3年で売上5倍、新規事業（SaaS型モデル）への展開
          </div>
          <div className="data-point">
            <i className="fa-solid fa-hourglass-end"></i>
            長期: グローバル展開基盤の整備、プレミアムサービスの開発
          </div>
        </div>

        {/* Section 10: 調達計画と資金使途 */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-hand-holding-dollar fa-2x fa-bounce"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-money-check-dollar"></i>
            調達計画と資金使途
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-bullseye"></i>
            <span className="keyword">
              <i className="fa-solid fa-target"></i>調達目標
            </span>
            :{" "}
            <span className="keyword">
              <i className="fa-solid fa-yen-sign"></i>1-2億円
            </span>
          </div>
          <div className="content-item">
            <i className="fa-solid fa-money-bill-transfer"></i>
            <span className="keyword">
              <i className="fa-solid fa-wallet"></i>資金使途
            </span>
            :
          </div>
          <div className="data-point">
            <i className="fa-solid fa-robot"></i>
            AI技術開発と物件マッチングシステムの精度向上
          </div>
          <div className="data-point">
            <i className="fa-solid fa-language"></i>
            多言語対応の拡充（日英仏中のさらなる強化）
          </div>
          <div className="data-point">
            <i className="fa-solid fa-bullhorn"></i>
            マーケティング施策の強化
          </div>
          <div className="data-point">
            <i className="fa-solid fa-user-plus"></i>
            優秀な人材確保とチーム拡大
          </div>
          <div className="data-point">
            <i className="fa-solid fa-map-location-dot"></i>
            関西エリアへの事業拡大（全国在留外国人の19%を占める市場）
          </div>
        </div>

        {/* Section 11: まとめと投資家へのメッセージ */}
        <div className="section-card animate-on-scroll">
          <div className="section-icon">
            <i className="fa-solid fa-handshake fa-2x fa-shake"></i>
          </div>
          <h2 className="section-title">
            <i className="fa-solid fa-comment-dots"></i>
            まとめと投資家へのメッセージ
          </h2>
          <div className="content-item">
            <i className="fa-solid fa-question-circle"></i>
            <span className="keyword">
              <i className="fa-solid fa-lightbulb"></i>なぜアットハースか
            </span>
            :
          </div>
          <div className="highlight-box">
            <div className="data-point">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span className="keyword">
                <i className="fa-solid fa-calendar-check"></i>10年
              </span>
              の実績と信頼
            </div>
            <div className="data-point">
              <i className="fa-solid fa-code"></i>
              技術とヒューマンタッチの融合
            </div>
            <div className="data-point">
              <i className="fa-solid fa-door-open"></i>
              96%の外国人に「No」と言う日本の不動産市場に「
              <span className="keyword">
                <i className="fa-solid fa-house-user"></i>Welcome Home
              </span>
              」を実現
            </div>
            <div className="data-point">
              <i className="fa-solid fa-plane-arrival"></i>
              インバウンド需要の高まりと共に成長する市場ポジション
            </div>
            <div className="data-point">
              <i className="fa-solid fa-hands-holding-circle"></i>
              共に創る国際化された日本の住居市場
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer animate-on-scroll">
        <div>
          <i className="fa-solid fa-book"></i>
          アットハース投資家向けプレゼンテーション資料
        </div>
        <div>
          <i className="fa-solid fa-copyright"></i>
          2025 AtHearth Inc. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
