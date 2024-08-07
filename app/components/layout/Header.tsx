import { Link } from "@remix-run/react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


export default function Header() {
    return (
        <div className="menu-area" >
            <div className="container">
                <div className="menu-area-wraper">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-3">
                            <div className="logo-area wow fadeInDown" data-wow-delay=".2s">
                                <Link to="/">
                                    <img src="/images/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <nav id="mobile-menu">
                                <ul className="main-menu">
                                    <li className="has-submenu wow fadeInDown" data-wow-delay=".4s"><a
                                        href="index.html">home</a>
                                        <ul className="submenu">
                                            <li><a href="index.html">home 01</a></li>
                                            <li><a href="home-2.html">home 02</a></li>
                                            <li><a href="home-3.html">home 03</a></li>
                                        </ul>
                                    </li>
                                    <li className=" wow fadeInDown" data-wow-delay=".6s"><a href="about.html">about</a></li>
                                    <li className=" wow fadeInDown" data-wow-delay=".8s"><a href="collection.html">collection</a></li>
                                    <li className=" wow fadeInDown" data-wow-delay="1s"><a href="products.html">Shop</a></li>
                                    <li className=" wow fadeInDown" data-wow-delay="1.2s"><a href="blog.html">Blogs</a></li>
                                    <li className=" wow fadeInDown" data-wow-delay="1.4s"><a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-5 offset-lg-0 offset-1">
                            <div className="nav-icons">
                                <span className="wow fadeInDown" data-wow-delay="1.5s">
                                    <a href="search.html">
                                        <IoSearch />
                                    </a>
                                </span>
                                <span className="wow fadeInDown" data-wow-delay="1.6s">
                                    <a href="sign_up.html">
                                        <FaRegUser />
                                    </a>
                                </span>
                                <span className="wow fadeInDown" data-wow-delay="1.7s">
                                    <a href="cart.html">
                                        <FaCartShopping />
                                    </a>
                                </span>
                                <select className="wow fadeInDown" data-wow-delay="1.8s" name="money">
                                    <option value="">USD</option>
                                    <option value="">TAKA</option>
                                    <option value="">USD</option>
                                    <option value="">USD</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu"></div>
        </div >
    )
}
