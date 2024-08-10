import { Link, NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CartApiQueryFragment, HeaderQuery } from "storefrontapi.generated";

type Viewport = 'desktop' | 'mobile';

interface HeaderProps {
    header: HeaderQuery;
    cart: Promise<CartApiQueryFragment | null>;
    isLoggedIn: Promise<boolean>;
    publicStoreDomain: string;
}

export default function Header({
    header,
    isLoggedIn,
    cart,
    publicStoreDomain,
}: HeaderProps) {
    const { shop, menu } = header;
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsActive(false);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <header className="navbar_section">
            <div className='container-xl'>
                <div className="nav_content">
                    <div className="nav_content_menu_btn" onClick={() => setIsActive(!isActive)}>
                        <button className={`menu_handler_btn ${!isActive ? 'active' : null}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                        </button>
                        <button className={`menu_handler_btn ${isActive ? 'active' : null}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                        </button>
                    </div>
                    <div className="nav_content_logo">
                        <div className="nav_logo">
                            <NavLink to="/">
                                <div className="imgbox">
                                    <img className="logo_dark" src="/images/logo.png" alt="logo" />
                                    <img className="logo_white" src="/images/logo.png" alt="logo" />
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="nav_menu_desktop">
                        <div className="nav_content_menu">
                            <ul className="nav_menus">
                                {menu ? menu.items.map((item) => {
                                    if (!item.url) return null;

                                    const url =
                                        item.url.includes('myshopify.com') ||
                                            item.url.includes(publicStoreDomain)
                                            ? new URL(item.url).pathname
                                            : item.url;
                                    return (
                                        <NavLink
                                            className="header-menu-item"
                                            end
                                            key={item.id}
                                            prefetch="intent"
                                            to={url}
                                        >
                                            <li className="nav_menu_item">
                                                <span className="notification">{item.title}</span>
                                            </li>
                                        </NavLink>
                                    );
                                }) : null}
                            </ul>
                        </div>
                    </div>

                    <div className={`nav_menu_mobile ${isActive ? 'active' : null}`}>
                        <div className="nav_content_menu">
                            <ul className="nav_menus">
                                {menu ? menu.items.map((item) => {
                                    if (!item.url) return null;

                                    const url =
                                        item.url.includes('myshopify.com') ||
                                            item.url.includes(publicStoreDomain)
                                            ? new URL(item.url).pathname
                                            : item.url;
                                    return (
                                        <NavLink
                                            className="header-menu-item"
                                            end
                                            key={item.id}
                                            prefetch="intent"
                                            to={url}
                                        >
                                            <li className="nav_menu_item">
                                                <span className="notification">{item.title}</span>
                                            </li>
                                        </NavLink>
                                    );
                                }) : null}
                            </ul>

                            <div className="nav_menu_mobile_content">
                                <ul className="nav_icons">
                                    <li className="nav_icon_item"><i className='bx bx-user'></i></li>
                                </ul>
                                <select className="curency_selector">
                                    <option value="">USD</option>
                                    <option value="">BDT</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="nav_content_icon">
                        <ul className="nav_icons">
                            <li className="nav_icon_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                            </li>
                            <li className="nav_icon_item user_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                            </li>
                            <li className="nav_icon_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>
                            </li>
                        </ul>
                        <select className="curency_selector">
                            <option value="">USD</option>
                            <option value="">BDT</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}