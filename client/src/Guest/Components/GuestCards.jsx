import React from 'react'
import { Link } from 'react-router-dom'

export default function GuestCards({ name, image }) {
    return (
        <div className="col-md-3">
            <Link to={`/${name.split(' ').join('-')}`} className='text-decoration-none'>
                <div className="card">
                    <img src={image} className="card-img-top p-5" alt={name} style={{ height: '20vh', objectFit: 'contain' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
