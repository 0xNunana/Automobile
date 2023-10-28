
import React from 'react';
import { DealsType } from '../Lib';
import Image from 'next/image';
import { BsDoorClosed, BsPerson } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { LuFuel } from 'react-icons/lu';
import Link from 'next/link';
import { PiEngine } from 'react-icons/pi';

const DealCard = ({ details,onClick }: { details: DealsType; onClick:()=>void }) => {
   
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div.
  };
  return (
    <div className="border shadow-lg rounded-lg p-7 relative hover:scale-105" onClick={onClick} >
      <div className="w-full h-[250px] py-2 relative">
        <Image src={details.imageUrl} alt={details.title} fill className="object-cover rounded-lg" />
      </div>
      <div className="flex space-x-3 pt-2">
        <p className='max-sm:text-sm'>{details.year}</p>
        <p className="uppercase max-sm:text-sm">{details.sellingCondition} used</p>
      </div>
      <div className="h-28 max-sm:h-10">
        <p className="text-3xl font-bold max-sm:text-xl">{details.title}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        
        <div className="flex items-center  space-x-2">
          <LuFuel size={25} />
          <p className='text-center'>{details.fuelType}</p>
        </div>
        <div className="flex items-center  space-x-2">
          <GiGearStickPattern size={25}  />
          <p>{details.transmission}</p>
        </div>
        <div className="flex items-center  space-x-2">
          <PiEngine size={25}  />
          <p>{details.ccMeasurement}cc</p>
        </div>
        <div className="flex items-center   space-x-2">
          <BsDoorClosed  size={25} />
          <p>{details.bodyTypeId}</p>
        </div>
      </div>
      <div className="flex justify-end mt-3 hover:scale-105">
      
        <Link href={details.websiteUrl} onClick={handleLinkClick} className="bg-checki-orange px-6 max-sm:px-3 max-sm:py-1 py-3 rounded-md flex items-center text-center justify-center text-white">
          More
        </Link>
      </div>
     
  
  </div>
  );
};

export default DealCard;
