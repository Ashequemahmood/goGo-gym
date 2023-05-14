import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-white" />
            <ul className='pl-2'>{feature}</ul>
        </div>
    );
};

export default Feature;