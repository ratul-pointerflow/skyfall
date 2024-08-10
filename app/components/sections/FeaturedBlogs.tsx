import React from 'react'
import BlogCard from '../common/BlogCard'

export default function FeaturedBlogs() {
    return (
        <section className="blog-section pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-30">
                        <p>BLOGS</p>
                        <h3>Latest News</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <BlogCard />
                    </div>
                    <div className="col-lg-4">
                        <BlogCard />
                    </div>
                    <div className="col-lg-4">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
