import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const vids = ['TwRr8c1OFuM','nkSflc6DafA', 'exUBVZQ5OAk', '2JxobJ0t25Y', 'gxI6n9Dmba4','owItxyqQTv4']

export default function YouTubeCarousel() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">
        Sharing My Learning Journey
      </h3>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={16}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }}
  loop={true}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>

        {vids.map(id => (
          <SwiperSlide key={id}>
            <div className="glass p-3 rounded">
              <div className="aspect-video bg-black rounded overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
