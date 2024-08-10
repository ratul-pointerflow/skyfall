import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


interface ReviewsProps {
    sectionNumber: Number;
}

export default function Reviews({ sectionNumber }: ReviewsProps) {
    var reviewSlider = {
        slidesPerView: 1,
        spaceBetween: 0,
        draggable: true,
        navigation: {
            prevEl: `.r-prev-${sectionNumber}`,
            nextEl: `.r-next-${sectionNumber}`,
        },
        breakpoints: {
            993: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    };
    return (
        <section className="review-section">
            <div className="container">
                <div className="swiper_top_box">
                    <div className="swiper_headings">
                        <span>Clients Saying</span>
                        <h3>REVIEWS</h3>
                    </div>

                    <div className="swiper_controller">
                        <div className={`swiper-button-prev r-prev-${sectionNumber}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </div>
                        <div className={`swiper-button-next r-next-${sectionNumber}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="review-group"
                    modules={[Navigation]}
                    {...reviewSlider}
                >
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <div className="single-review">
                            <p>"It was a pleasure meeting you this past weekend. I appreciate all you shared and can't wait to
                                review the Ecology of Commerce. </p>
                            <img className="my-20" src="/images/reviews.png" alt="image" />
                            <h5>Adam Richman</h5>
                            <span>Los Angeles, CA</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
