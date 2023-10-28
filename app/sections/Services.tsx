'use client'

import React, { useState } from 'react';
import LocationSelector from '../components/CarSelector';
import CarSelector from '../components/CarSelector';
import PopularCars from '../components/PopularCars';
import Deals from '../components/Deals';

const Services = () => {
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const [selectedCarName, setSelectedCarName] = useState<string | null>(null);

  const handleCarSelect = (carName: string | null) => {
    setSelectedCarName(carName);
    console.log('Selected car name', carName);
  };

  return (
    <div className="bg-[#f3f3f3] ">
      <div className="max-sm:mx-2 mx-20   pt-3 sm:pt-40 ">
  
        <div className='flex py-10 justify-center'>
 <PopularCars onCarSelect={handleCarSelect}/>
  </div>
  <div className=''>
  <Deals selectedCarName={selectedCarName} />
  </div>
      </div>
    </div>
  );
};

export default Services;
