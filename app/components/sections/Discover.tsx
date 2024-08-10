import React from 'react'

export default function Discover() {
  return (
    <section className="discover-section py-150">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="discover-img">
                        <img className="back-img" src="/images/image12.jpg" alt="image"/>
                        <img className="front-img" src="/images/image13.jpg" alt="image"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="discover-content">
                        <span>New arrivals is already in our store</span>
                        <h2>Check out our latest launched products</h2>
                        <p className="mb-40">"It was a pleasure meeting you this past weekend. I appreciate all you shared
                            and can't wait to review the.</p>
                        <a className="secondary-btn" href="#">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
