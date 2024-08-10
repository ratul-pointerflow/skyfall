import React, { useEffect, useState } from 'react'

export default function Faq() {
    const [isActive, setIsActive] = useState(1);


    useEffect(() => {
        const items = document.querySelectorAll<HTMLElement>('.accordion .item');
        const togglers = document.querySelectorAll<HTMLElement>('.accordion .item .title_box');

        items.forEach((item) => {
            const descriptionBox = item.querySelector<HTMLElement>('.description_box .rte');
            if (descriptionBox) {
                const height = descriptionBox.offsetHeight;
                const descriptionContainer = item.querySelector<HTMLElement>('.description_box');
                if (descriptionContainer) {
                    descriptionContainer.style.setProperty('--height', `${height + 15}px`);
                }
            }
        });

        const handleClick = (event: Event) => {
            const selectedItem = event.currentTarget as HTMLElement;
            items.forEach((item) => {
                if (item !== selectedItem.parentElement) {
                    item.classList.remove('active');
                }
            });
            selectedItem.parentElement?.classList.toggle('active');
        };

        togglers.forEach((toggler) => {
            toggler.addEventListener('click', handleClick);
        });

        // Cleanup event listeners on unmount
        return () => {
            togglers.forEach((toggler) => {
                toggler.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <section className='faq_section'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className="col-12 col-md-6">
                        <div className="text_content">
                            <h3>Frequently Asked Questions</h3>

                            <div className="accordion">
                                <div className={`item active`}>
                                    <div className="title_box" >
                                        <h4 className="title">Is it possible to pay for an order with Visa and MasterCard?</h4>
                                        <div className="icon_box">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                    <div className="description_box">
                                        <div className="rte">
                                            <p>
                                                Vestibulum interdum ex eu dignissim eleifend.
                                                Morbi molestie libero orci, volutpat pulvinar
                                                ipsum efficitur non. Aliquam ut ligula augue.
                                                Pellentesque vel velit nec turpis fermentum
                                                consectetur a non sapien.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`item`}>
                                    <div className="title_box">
                                        <h4 className="title">Is it possible to pay for an order with Visa and MasterCard?</h4>
                                        <div className="icon_box">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                    <div className="description_box">
                                        <div className="rte">
                                            <p>
                                                Vestibulum interdum ex eu dignissim eleifend.
                                                Morbi molestie libero orci, volutpat pulvinar
                                                ipsum efficitur non. Aliquam ut ligula augue.
                                                Pellentesque vel velit nec turpis fermentum
                                                consectetur a non sapien.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`item`}>
                                    <div className="title_box">
                                        <h4 className="title">Is it possible to pay for an order with Visa and MasterCard?</h4>
                                        <div className="icon_box">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                    <div className="description_box">
                                        <div className="rte">
                                            <p>
                                                Vestibulum interdum ex eu dignissim eleifend.
                                                Morbi molestie libero orci, volutpat pulvinar
                                                ipsum efficitur non. Aliquam ut ligula augue.
                                                Pellentesque vel velit nec turpis fermentum
                                                consectetur a non sapien.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="imgbox_full">
                            <img src="/images/image22.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
