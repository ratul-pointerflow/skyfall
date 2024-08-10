import React from 'react'

export default function Newsletter() {
    return (
        <section className="off-section py-150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="off-img-section">
                            <img src="/images/image23.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form_wrapper">
                            <div className="off-content-section">
                                <h2 className="mb-70">Sign up for news & get 20% off</h2>
                                <input className="mb-80" type="text" placeholder="Your email adress" name="email" />
                                <a className="secondary-btn" href="#">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
