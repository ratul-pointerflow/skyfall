import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function CollectionGrid() {
    return (
        <div className="collection-section py-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-30">
                        <p>Comfort Every</p>
                        <h3>COLLECTION</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="collection-left-img">
                            <img src="/images/image6.jpg" alt="image" />
                            <a href="collection.html">
                                <div className="collection-btn">
                                    <span className="btn-text">Sweaters</span>
                                    <span className="btn-icon">
                                        <FaArrowRight />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12 mb-30">
                                <div className="collection-left-img">
                                    <img src="/images/image5.jpg" alt="image" />
                                    <a href="collection.html">
                                        <div className="collection-btn">
                                            <span className="btn-text">Shirts</span>
                                            <span className="btn-icon">
                                                <FaArrowRight />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="collection-left-img">
                                    <img src="/images/image4.jpg" alt="image" />
                                    <a href="collection.html">
                                        <div className="collection-btn">
                                            <span className="btn-text">Accessories</span>
                                            <span className="btn-icon">
                                                <FaArrowRight />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
