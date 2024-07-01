import React from 'react'


export default function Map() {
    const latitude = 42.166158;
    const longitude = 41.691353;
    const apiKey = 'AIzaSyCGpWnwjE3KpdolnPkTt8bT7HG12E0LBdU'

    // Constructing the iframe URL with the latitude and longitude
    const iframeUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=16&maptype=satellite`;
    return (
        <div className='w5 h5'>
            <iframe
                src={iframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Georgian Development 2023"
            ></iframe>
        </div>
    )
}
