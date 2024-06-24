import React from 'react'

export default function Map({iframeUrl}) {
    return (
        <div className='mt5' style={{ width: '100%', height: '500px' }}>
            <iframe
                src={iframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Georgian Development 2023"
            ></iframe>
        </div>
    )
}
