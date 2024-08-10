import React from 'react'

export default function Video() {
    return (
        <div className="video-section">
            <div className="container">
                <video autoPlay muted controls src="/video/video.mp4"></video>
            </div>
        </div>
    )
}
