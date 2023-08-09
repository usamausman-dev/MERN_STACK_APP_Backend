import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'

export default function Brands() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-brands').then(json => setBrands(json.data.brands)).catch(err => alert(err.message))
    }, [])


    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brands?.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} url={`/brands/${val.BrandName}`}/>)
                }

            </div>
        </div>
    )
}
