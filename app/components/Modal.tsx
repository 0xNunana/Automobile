'use client'

import React, { useState } from 'react';
import { DealsType, AdditionalDetailsType, CarMediatype } from '../Lib';
import Image from 'next/image';

const Modal = ({
  additionalDetails,
  carMedia,
  selectedDeal,
  closeModal
}: {
  additionalDetails: AdditionalDetailsType | null;
  carMedia: CarMediatype | null;
  selectedDeal: DealsType;
  closeModal: () => void;
}) => {
  const [isSelectedImage, setIsSelectedImage] = useState(false);
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (url:string,name:string) => {
    setSelected(url);
    setIsSelectedImage(true);
  };

  return (
    <div>
      <div

        className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex items-center justify-center"
      >
        <div className=' max-w-screen-lg'>

          <button
            onClick={() => {
              setSelected(''); // Clear the selected image
              setIsSelectedImage(false);
              closeModal();
            }}
            className="mt-4 text-red-500 font-bold absolute top-0 right-0 bg-white py-2 px-4 rounded-full border-red-500 border-4"
          
          >
            X
          </button>
        <div className="bg-white w-full max-w-screen-lg p-4 rounded-lg shadow-lg relative" style={{ overflowY: 'auto', maxHeight: '90vh' }} >
         <div className='flex'>
    {!isSelectedImage ? (
            <div>
              {additionalDetails ? (
                <Image
                  src={additionalDetails.imageUrl}
                  alt={additionalDetails.carName}
                  width={900}
                  height={400}
                  className="w-full"
                />
              ) : (
                <p>Loading ...</p>
              )}
            </div>
          ) : (
            <div>
              <Image src={selected} alt="selected" width={900} height={400} className="w-full" />
            </div>)
          }

         </div>
      

          <div className="flex flex-wrap gap-3 py-3">
            {carMedia?.carMediaList.map((media) => (
              <Image
                src={media.url}
                key={media.id}
                alt={media.name}
                height={100}
                width={100}
                onClick={() => handleSelect(media.url,media.name)}
                className='rounded-md shadow-md'
              />
            ))}
          </div>
          <hr className=' border-red-500 h-5'/>
          <div className='flex justify-between'>
          <p>{additionalDetails?.carName}</p>

          </div>
          <p>Engine Capacity: {additionalDetails?.ccMeasurement}</p>
          <p>Seats: {additionalDetails?.bodyType?.id}</p>
          <p>Transmission: {additionalDetails?.transmission}</p>
          <p>Mileage: {additionalDetails?.mileage} {additionalDetails?.mileageUnit}</p>
          <p>{additionalDetails?.marketplaceVisibleDate}</p>
          <p>{additionalDetails?.marketplacePrice}</p>
          <p>{additionalDetails?.carName}</p>
       

         
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default Modal;