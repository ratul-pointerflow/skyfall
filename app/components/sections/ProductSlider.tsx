import { json, useLoaderData } from '@remix-run/react';
import request from 'graphql-request';
import React, { useEffect } from 'react'
import { GET_PRODUCTS } from '~/queries/queries';

type ProductImage = {
    src: string;
    altText: string;
};

type Product = {
    id: string;
    title: string;
    description: string;
    images: {
        edges: { node: ProductImage }[];
    };
};

type LoaderData = {
    products: {
        edges: { node: Product }[];
    };
};

export const loader = async () => {
    const endpoint = 'https://mock.shopify.com/api/graphql';
    const data = await request(endpoint, GET_PRODUCTS);
    return json({ data });
};

export default function ProductSlider() {
    const data = useLoaderData<LoaderData | null>();

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <section className="slider-section py-150 wow fadeInUp" data-wow-delay=".2s">
            <div className="container">
                <div className="slider-top">
                    <div className="slider-top-content">
                        <span>Comfort Every Day</span>
                        <h3>Best sellers</h3>
                    </div>
                </div>
                <div className="row tastimonial-slider">
                    {/*  card 1 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 2 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image1.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 3 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image2.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 4 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image3.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 1 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 2 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image1.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 3 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image2.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                    {/*  card 4 */}
                    <div className="single-slider">
                        <div className="slider-head">
                            <div className="slider-img">
                                <img src="/images/image3.png" alt="image" />
                            </div>
                            <a href="product_details.html">
                                <div className="cart">
                                    <span><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </a>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                        </div>
                        <div className="slider-body mt-20">
                            <div className="slider-body-content">
                                <h6 className="slider-title">Shirt with Long Sleeves</h6>
                                <div className="dreass-color mt-10">
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="black"></div>
                                </div>
                            </div>
                            <div className="slider-body-content-right">
                                <del>$250.00</del>
                                <h6 className="">$250.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
