import React from 'react'

export default function HomeBanner() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 wow fadeInLeft">
                        <div className="hero-content">
                            <p>New arrivals is already in our store</p>
                            <h1 className="mb-40">Like Nothing You Have Seen before</h1>
                            <a className="primary-btn" href="#">Explore</a>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight">
                        <div className="hero-img">
                            <img src="/images/heroImage.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
