import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'

export default function Products() {

    const [Product, setProduct] = useState([])

    axios.get('/api/get-all-products').then(json=> setProduct(json.data.products))
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Products</span>
                <ProductModal />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.productName}</td>
                                    <td>{val.category}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description}</td>

                                    <td><img src={val.thumbnail} className='img-fluid' style={{ height: '15vh', objectFit: 'contain' }} alt="" srcSet="" /></td>

                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
