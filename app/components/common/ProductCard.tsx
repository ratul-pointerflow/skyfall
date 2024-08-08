import { Link } from '@remix-run/react'
import { Image, Money } from '@shopify/hydrogen';
import { Product } from '~/types/product';

export default function ProductCard(product: Product) {
    return (
        <div className="card product_card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="000">
            <div className="head">
                <div className="imgbox_full">
                    <Link to={`/products/${product.handle}`}>
                        <Image data={product.images} />
                    </Link>
                </div>
                {product.tags && (<span className="tag">{product.tags[0]}</span>)}
                <button className="add_to_cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                    </svg>
                </button>
            </div>
            <div className="body">
                <div className="body_content">
                    <div className="left_box">
                        <a href="#">
                            <h3 className="title">{product.title}</h3>
                        </a>
                        <ul className="colors">
                            <li className="color" style={{ background: '#FF7575' }}></li>
                            <li className="color" style={{ background: '#FF7575' }}></li>
                            <li className="color" style={{ background: '#FF7575' }}></li>
                        </ul>
                    </div>
                    <div className="right_box">
                        <h4 className="old_price">${product?.priceRange?.maxVariantPrice?.amount}</h4>
                        <h3 className="current_price">${product.priceRange.minVariantPrice.amount}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
