"use client"

/**
 * Global styles for ward guide pages
 * Extracted from the original setagaya-guide component
 */
export function WardStyles() {
  return (
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
      
      .area-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1.5rem 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

      .area-images-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: 1.5rem 0;
      }

      @media (max-width: 768px) {
        .area-images-grid {
          grid-template-columns: 1fr;
        }
      }

      .area-image-caption {
        font-size: 14px;
        color: var(--athearth-sub2);
        text-align: center;
        margin-top: 0.5rem;
      }

      .section-heading {
        font-size: 22px;
        font-weight: bold;
        color: var(--athearth-main);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--athearth-sub1);
      }

      .area-image-block {
        display: flex;
        flex-direction: column;
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
  )
}

