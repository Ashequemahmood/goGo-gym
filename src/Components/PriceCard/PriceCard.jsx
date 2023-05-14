import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-500 rounded-lg p-4 flex flex-col'>
            <h1 className='text-center font-semibold'>
                <span className='text-6xl'>€{price.price}</span>
                <span className='text-white'>/mon</span>
            </h1>
            <h1 className='text-4xl text-center'>{price.name}</h1>
            <h1>Features:</h1>
            <div>
                {
                    price.features.map(feature=><Feature
                        key = {feature.idx}
                        feature = {feature}
                    ></Feature>)
                }
            </div>
            <button className='w-full bg-green-500 mt-auto rounded-md text-white py-2 hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

export default PriceCard;