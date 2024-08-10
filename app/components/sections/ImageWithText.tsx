import React from 'react'

export default function ImageWithText() {
    return (
        <section className="hero-section2 py-150">
            <div className="container">
                <div className="hero-section2-wraper">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero2-img">
                                <img src="/images/hero-img.jpg" alt="image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero2-content">
                                <span>New arrivals is already in our store</span>
                                <h2>Launching new clothing line</h2>
                                <p className="mb-40">"It was a pleasure meeting you this past weekend. I appreciate all you
                                    shared and can't
                                    wait
                                    to review the.</p>
                                <a className="primary-btn" href="products.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
