import { Await } from "@remix-run/react";
import { Suspense } from "react";
import { RecommendedProductsQuery } from "storefrontapi.generated";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../common/ProductCard";



interface FeaturedCollectionSliderProps {
    products: Promise<RecommendedProductsQuery | null>;
    sectionNumber: Number;
}

export default function FeaturedCollectionSlider({ products, sectionNumber }: FeaturedCollectionSliderProps) {
    var productSlider = {
        slidesPerView: 1,
        spaceBetween: 0,
        draggable: true,
        navigation: {
            prevEl: `.fcs-prev-${sectionNumber}`,
            nextEl: `.fcs-next-${sectionNumber}`,
        },
    };

    return (
        <section className="single-slider-section py-150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="swiper_wrapper">
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

                            <div className="swiper_controller">
                                <div className={`swiper-button-prev fcs-prev-${sectionNumber}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                                    </svg>
                                </div>
                                <div className={`swiper-button-next fcs-next-${sectionNumber}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="single-slider-img">
                            <img src="/images/bigimage.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
