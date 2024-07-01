import React from 'react'


export default function Map() {
    const iframeUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2934.157417028751!2d41.689499184256206!3d42.16609798746906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDA5JzU4LjAiTiA0McKwNDEnMjguMyJF!5e1!3m2!1sen!2sge!4v1716137383137!5m2!1sen!2sge";
    return (
        <div className='w5 h5'>
            <iframe
                src={iframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Georgian Development 2023"
                key={'AIzaSyCGpWnwjE3KpdolnPkTt8bT7HG12E0LBdU'}
            ></iframe>
        </div>
    )
}
