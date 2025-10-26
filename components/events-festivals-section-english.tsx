"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Music, Sparkles, Cherry, Star } from "lucide-react"

export function EventsFestivalsSectionEnglish({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <div className="section-card animate-on-scroll">
      <div className="section-icon">
        <Calendar size={24} />
      </div>
      <h2 className="section-title">
        <Calendar size={20} />
        International Events & Japanese Festivals
      </h2>
      <p className="mb-4">
        Setagaya Ward hosts various international exchange events and traditional Japanese festivals throughout the
        year. These are excellent opportunities to participate in the local community and experience Japanese culture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Sparkles size={18} />
            Seasonal Festivals
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">Setagaya Boro-ichi Market</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>January 15-16 and December 15-16 annually</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Setagaya 4-1-1 (Miyanosaka Station on Setagaya Line)</span>
              </div>
              <p className="text-sm">
                A traditional market with over 400 years of history. Around 700 stalls selling antiques, used clothing,
                and food. English maps are available.
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">Sancha de Daidogei (Street Performance)</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>Mid-October weekend annually</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Around Sangenjaya Station</span>
              </div>
              <p className="text-sm">
                Street performances by domestic and international performers throughout Sangenjaya. Enjoyable regardless
                of language barriers.
                <a
                  href="https://arttown.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  More details
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">Sakurashinmachi Nebuta Festival</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>Early August annually</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Around Sakurashinmachi Station</span>
              </div>
              <p className="text-sm">
                Experience Aomori's traditional Nebuta Festival in Tokyo. Many international participants join in the
                dancing.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Users size={18} />
            International Exchange Events
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Setagaya International Exchange Café</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>2nd Sunday of every month, 2:00-4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Setagaya International Exchange Center (Sangenjaya)</span>
              </div>
              <p className="text-sm">
                A café-style event where foreigners and Japanese can freely interact. Enjoy conversations in various
                languages including English, Chinese, and Korean.
                <a
                  href="https://komazawa-comorevi.com/magazine/4628/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  More details
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Language Exchange Meetup</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>Every Friday, 7:00-9:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Café in Shimokitazawa (Check website for details)</span>
              </div>
              <p className="text-sm">
                A casual gathering for language exchange. Foreigners learning Japanese and Japanese people learning
                English gather here.
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Setagaya International Festival</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>3rd weekend of November annually</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Setagaya Civic Hall (Setagaya 4-21-27)</span>
              </div>
              <p className="text-sm">
                A festival of international exchange featuring cultural introductions, cuisine, performances, and
                workshops from around the world. Multilingual volunteers are available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Cherry size={18} />
            Seasonal Events
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">Cherry Blossom Viewing (Hanami)</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>Late March to early April</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Kinuta Park, Hanegi Park, Todoroki Valley, etc.</span>
              </div>
              <p className="text-sm">
                A Japanese spring tradition. Setagaya has many cherry blossom viewing spots, and guided hanami tours for
                foreigners are available.
                <a
                  href="https://www.gltjp.com/ja/directory/item/10118/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4a7] hover:underline ml-1"
                >
                  More details
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[#00c4a7] pl-3 py-1">
              <h4 className="font-bold">Autumn Leaves Viewing</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>Mid-November to early December</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Todoroki Valley, Kinuta Park</span>
              </div>
              <p className="text-sm">
                A Japanese tradition of enjoying autumn foliage. Todoroki Valley is a precious spot where you can enjoy
                natural autumn colors in the heart of the city.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-[#00c4a7]">
            <Music size={18} />
            Cultural Experience Programs
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Tea Ceremony Experience for Foreigners</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>1st Saturday of every month, 1:00-3:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Seijo Hall (Seijogakuen-mae Station)</span>
              </div>
              <p className="text-sm">
                Tea ceremony experience with English explanations. A program where you can casually experience Japanese
                traditional culture. Reservation required.
              </p>
            </div>

            <div className="border-l-4 border-[#f08080] pl-3 py-1">
              <h4 className="font-bold">Cooking Together</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar size={14} />
                <span>3rd Saturday of every month, 11:00 AM-2:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin size={14} />
                <span>Sangenjaya Community Kitchen</span>
              </div>
              <p className="text-sm">
                An event where foreigners and Japanese cook together. Learn to cook cuisine from different countries
                each time. Conducted in both English and Japanese.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Star className="text-[#00c4a7]" size={18} />
          Event Photos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Image
              src="/images/daidogei.jpeg"
              alt="Street performance at Sancha de Daidogei"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">Performance at Sancha de Daidogei</p>
          </div>
          <div>
            <Image
              src="/images/exchange.jpeg"
              alt="Scene from International Exchange Café"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">Cultural exchange event in Setagaya</p>
          </div>
          <div>
            <Image
              src="/images/kinuta-park.webp"
              alt="Cherry blossoms at Kinuta Park"
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
            />
            <p className="text-sm text-center mt-2 text-gray-600">Beautiful cherry blossoms at Kinuta Park</p>
          </div>
        </div>
      </div>

      {!hideCta && (
        <div className="mt-8 text-center">
          <Link
            href="https://www.athearth.com/events/calendar"
            className="bg-[#00c4a7] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#00a38c] transition-colors inline-flex items-center gap-2"
          >
            <Calendar size={20} />
            View Event Calendar
          </Link>
        </div>
      )}
    </div>
  )
}
