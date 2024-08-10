import { FaHeadphonesAlt, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowsRotate, FaTruckFast } from "react-icons/fa6";

export default function TopFooter() {
    return (
        <section className="topFooter-section py-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-logo mb-40">
                            <span>
                                <FaTruckFast />
                            </span>
                            <div className="logo-contant">
                                <h4>Fast Delivery</h4>
                                <p>Delivery within 24 Hours in any place</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-logo mb-40">
                            <span>
                                <FaHeadphonesAlt />
                            </span>
                            <div className="logo-contant">
                                <h4>24/7 Support</h4>
                                <p>Get our support any time at any hour</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-logo mb-40">
                            <span>
                                <FaShieldAlt />
                            </span>
                            <div className="logo-contant">
                                <h4>Secure Shopping</h4>
                                <p>Highly secured online payment method </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-logo">
                            <span>
                                <FaArrowsRotate />
                            </span>
                            <div className="logo-contant">
                                <h4>Moneyback Guarantee</h4>
                                <p>Guaranteed money back in 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
