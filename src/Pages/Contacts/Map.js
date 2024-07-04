import React from 'react'

export default function Map() {
    const latitude = 42.166158;
    const longitude = 41.691353;
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

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
