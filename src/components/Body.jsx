import React from 'react';
import { useState } from 'react';
import './body.css'


const Body = ({ item, setCount }) => {
    const [status, setStatus] = useState(true)
    const addCart = () => {
        setStatus(false)
        setCount((val => val + 1))
    }
    const removeCart = () => {
        setStatus(true)
        setCount((val => val - 1))
    }
    return (
        <div>
            <div key={item.id}>
                <div class="col">
                    <div class="card h-100" id='card'>
                        <img src={item.image} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">Price:{item.price}</p>
                        </div>
                        <div class="card-btn">
                            {status ? <button onClick={addCart}>Add to Cart</button> : <button onClick={removeCart}>Remove from the Cart</button>}


                        </div>
                    </div>
                </div>

            </div>


           

        </div>
        
    );
};

export default Body;