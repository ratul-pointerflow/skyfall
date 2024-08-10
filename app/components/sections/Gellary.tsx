import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const imageSources = [
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg"
];

export default function Gellary() {
    var gellarySlider = {
        speed: 1000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        draggable: false,
        autoplay: {
            delay: 200,
            disableOnInteraction: false,
        },
        breakpoints: {
            993: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    };
    return (
        <div className="gallary-section">
            <div className="container-fluid">
                <div className="row">
                    <Swiper className="gallery" {...gellarySlider} modules={[Autoplay]}>
                        {imageSources && imageSources.map((src, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <img src={src} alt="image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
