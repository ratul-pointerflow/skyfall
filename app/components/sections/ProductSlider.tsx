
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Await, Link } from "@remix-run/react";
import { Suspense, useEffect } from "react";
import { RecommendedProductsQuery } from "storefrontapi.generated";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ProductCard from "../common/ProductCard";


var productSlider = {
    slidesPerView: 1,
    spaceBetween: 0,
    draggable: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        516: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        993: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
};

interface productSliderProps {
    products: any[];
}

export default function ProductSlider({ products }: { products: Promise<RecommendedProductsQuery | null>; }) {
    
    return (
        <section className='best_selling_section'>
            <div className='container'>
                <div className="swiper best_selling_slider">
                    <div className="swiper_top_box">
                        <div className="swiper_headings">
                            <span>Comfort Every Day</span>
                            <h3>Best sellers</h3>
                        </div>

                        <div className="swiper_controller">
                            <div className="swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                                </svg>
                            </div>
                            <div className="swiper-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Await resolve={products}>
                            {(response) => (
                                <Swiper
                                    className="swiper-wrapper"
                                    modules={[Navigation]}
                                    {...productSlider}
                                >
                                    {response ? response.products.nodes.map((product, index) => (
                                        <SwiperSlide className="swiper-slide" key={index}>
                                            <ProductCard 
                                                id={product.id} 
                                                title={product.title} 
                                                handle={product.handle} 
                                                tags={product.tags} 
                                                priceRange={product.priceRange} 
                                                images={product.images.nodes[0]}  
                                            />
                                        </SwiperSlide>
                                    )) : null}
                                </Swiper>
                            )}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
