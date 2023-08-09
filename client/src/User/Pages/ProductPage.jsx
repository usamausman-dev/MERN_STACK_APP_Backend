import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext/context'
export default function ProductPage() {

    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const { cart_state, cart_dispatch } = useContext(CartContext)

    useEffect(() => {
        console.log(cart_state)
        axios.get(`/get-product-by-id/${_id}`)
            .then(json => setProduct(json.data.products))
            .catch(err => console.log(err))
    },[])

    const addtocart = () => {
        const payload = { ...product, quantity }

        cart_dispatch({
            type: "ADD_TO_CART",
            payload
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt="" srcSet="" className='img-fluid' />

                </div>
                <div className="col-md-6 py-5">
                    <h2>{product.productName} - {product.price}</h2>
                    <small className="text-secondary">{product.description}</small>
                    <div className="row my-5">
                        {
                            product?.images?.map((val, key) => <div key={key} className='col-md-4 border border-dark rounded mx-1'><img src={val} className='img-fluid' /></div>)
                        }
                    </div>

                    <div className='d-flex justify-content-around align-items-center bg-light py-4 rounded border border-secondary'>
                        <button className="btn btn-dark" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
                        {quantity}
                        <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <div className='d-block mt-3'><button className="w-100 btn btn-dark" onClick={addtocart}>Add to Cart</button></div>
                </div>
            </div>
        </div>
    )
}
