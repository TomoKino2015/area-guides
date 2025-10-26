"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, MessageCircle, Home, ShoppingCart, Utensils, Users, Check, User } from "lucide-react"

export function InternationalLivingSectionEnglish({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <div className="section-card animate-on-scroll">
      <div className="section-icon">
        <Globe size={24} />
      </div>
      <h2 className="section-title">
        <Globe size={20} />
        International Living Guide
      </h2>
      <p className="mb-4">
        Setagaya Ward is one of Tokyo's most popular areas for international residents, offering language support,
        international communities, and excellent living environments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Home className="text-[#00c4a7]" size={18} />
            Properties for International Residents
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Many furnished apartments available for immediate move-in</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Properties with English-speaking management companies</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>No-guarantor plans and multilingual support options</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/rent?area=setagaya&furnished=true"
                className="cta-button inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                View Furnished Properties
              </Link>
            </div>
          )}
        </div>

        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <ShoppingCart className="text-[#00c4a7]" size={18} />
            International Shopping
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Seijo Ishii, Natural Lawson with imported groceries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>International brand shops at Futakotamagawa Rise</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Unique import shops and vintage stores in Shimokitazawa</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/area-guide/setagaya/shopping"
                className="cta-button inline-flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Shopping Information
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Utensils className="text-[#00c4a7]" size={18} />
            English-Friendly Restaurants & Cafés
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Cafés with English menus in Sangenjaya and Shimokitazawa</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>International cuisine (Italian, Mexican, Thai, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Authentic restaurants run by international chefs</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/area-guide/setagaya/dining"
                className="cta-button inline-flex items-center gap-2"
              >
                <Utensils size={16} />
                Dining Information
              </Link>
            </div>
          )}
        </div>

        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <Users className="text-[#00c4a7]" size={18} />
            International Community
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Regular international exchange events throughout the area</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Japanese language classes and cultural experience programs</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={16} className="text-[#00c4a7] mt-1 flex-shrink-0" />
              <span>Multilingual ward office services (English, Chinese, etc.)</span>
            </li>
          </ul>
          {!hideCta && (
            <div className="text-center">
              <Link
                href="https://www.athearth.com/community/international"
                className="cta-button inline-flex items-center gap-2"
              >
                <Users size={16} />
                Community Information
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-author">
          <User size={18} />
          Emma (from UK, living in Futakotamagawa for 3 years)
        </div>
        <p>
          "I was initially worried about the language barrier, but with AtHearth's support, I found my ideal apartment.
          Futakotamagawa is very foreigner-friendly with many shops offering English support. Jogging along the Tama
          River has become my daily routine."
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">Examples of Properties for International Residents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Example of a furnished apartment"
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />
            <p className="text-sm text-center mt-2 text-gray-600">Furnished 1LDK apartment in Futakotamagawa</p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Popular kitchen facilities for international residents"
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />
            <p className="text-sm text-center mt-2 text-gray-600">
              Spacious kitchen facilities popular with international residents
            </p>
          </div>
        </div>
      </div>

      {!hideCta && (
        <div className="mt-8 text-center">
          <Link
            href="https://www.athearth.com/contact/foreigner-support"
            className="bg-[#00c4a7] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#00a38c] transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Property Consultation for International Residents (English Available)
          </Link>
        </div>
      )}
    </div>
  )
}
