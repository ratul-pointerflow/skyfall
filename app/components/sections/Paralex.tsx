import React from 'react'

export default function Paralex() {
    return (
        <section className="paralex-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="paralex-content">
                            <p>New arrivals is already in our store</p>
                            <h2 className="mb-20 mt-10">Limited time offer is waiting for you</h2>
                            <p className="paralex-content-text mb-60">"It was a pleasure meeting you this past weekend. I
                                appreciate all you shared
                                and can't
                                wait to review the.</p>
                            <a className="primary-btn" href="products.html">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="paralex-counter">
                            <div className="counter-content">
                                <span className="counter">10</span>
                                <h4>Days</h4>
                            </div>
                            <div className="counter-content">
                                <span className="counter">20</span>
                                <h4>Hours</h4>
                            </div>
                            <div className="counter-content">
                                <span className="counter">45</span>
                                <h4>Minutes</h4>
                            </div>
                            <div className="counter-content">
                                <span className="counter">30</span>
                                <h4>Seconds</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
