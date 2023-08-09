import React, { useContext } from 'react'
import './custom.css'
import { CartContext } from '../../CartContext/context'
import { GlobalContext } from '../../../Context/context'
import { decodeToken } from 'react-jwt'
import axios from 'axios'

export default function CustomCart() {

    const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const currentUser = decodeToken(state.token)

    const placeOrder = () => {
        const payload = {
            customerName: currentUser.username,
            customerId: currentUser.id,
            customerEmail: currentUser.email,
            customerAddress: "Hello Street#123",
            customerContact: "+923040257471",
            order: cart_state.cart
        }


        axios.post('/api/place-order', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err.message))
    }


    return (

        <div className='p-5' style={{ height: '100vh', width: '100%' }}>
            <div className="container" >
                <div className="master-container">
                    <div className="card cart">
                        <label className="title">Your cart</label>
                        <div className="products">
                            {
                                cart_state.cart.map((val, key) => <div key={key} className="product">
                                    <div>
                                        <img src={val.thumbnail} alt="" style={{ height: '10vh', objectFit: 'contain' }} />
                                    </div>
                                    <div>
                                        <span>{val.productName}</span>
                                        <p>{val.category}</p>
                                        <p>{val.brand}</p>
                                    </div>
                                    <div className="quantity">

                                        <label>{val.quantity}</label>

                                    </div>
                                    <label className="price small">{val.price}</label>
                                </div>)
                            }

                        </div>
                    </div>


                </div>

            </div>

            <div className="w-100 mt-5">
                <button className=" d-block w-100 btn btn-dark" onClick={placeOrder}>Place Order</button>
            </div>
        </div>

    )
}
