import React from 'react'

export default function BlogCard() {
    return (
        <div className="single-blog">
            <img src="/images/image14.jpg" className="blog-img-top" alt="image" />
            <div className="blog-body">
                <a href="#">
                    <h3 className="blog-title mt-20">Skyfalls brand's first bag</h3>
                </a>
                <p className="blog-text">
                    One may not need charts and graphs at this point to know that, in the
                    past...
                    <a href="blog_details.html">Read More</a>
                </p>
            </div>
        </div>
    )
}
