import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Prices = () => {
    const [prices, setPrices] = useState([]);

    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h1 className='text-4xl text-center my-7 bg-orange-500'>Affordable Prices Options</h1>
           <div className='grid md:grid-cols-3 gap-4'>
           {
                prices.map(price=><PriceCard
                    key = {price.key}
                    price = {price}
                ></PriceCard>)
            }
           </div>
        </div>
    );
};

export default Prices;