'use client'
import React, { useState, useEffect } from 'react';
import { DealsType, AdditionalDetailsType, CarMediatype } from '../Lib';
import DealCard from './DealCard';
import Modal from './Modal';
import { fetchCarDeals,fetchAdditionalDetails, fetchCarMedia } from '../Data';

const Deals = ({ selectedCarName }: { selectedCarName: string | null }) => {
  const [showAllDeals, setShowAllDeals] = useState(false);
  const [carDeals, setCarDeals] = useState<DealsType[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<DealsType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState<AdditionalDetailsType | null>(null);
const [carMedia,setCarMedia]=useState<CarMediatype | null>(null)


  useEffect(() => {
    // Call the fetchCarDeals function from the data file when the component mounts
    const fetchData = async () => {
        const data = await fetchCarDeals();
        if (data) {
          setCarDeals(data);
        }
      };
  
      fetchData();

   
  }, []);



  const openModal =async (deal: DealsType) => {
    setSelectedDeal(deal);
    setShowModal(true);

    if (!additionalDetails) {
        const id = deal.id;
        const details = await fetchAdditionalDetails(id);
        const media = await fetchCarMedia(id)
        if (details && media) {
          setAdditionalDetails(details);
          setCarMedia(media)
        }
      
    };
    
  };

  const closeModal = () => {
    setSelectedDeal(null);
    setShowModal(false);
    setAdditionalDetails(null)
    setCarMedia(null)
  };
  

  const filteredDeals = selectedCarName
  ? carDeals.filter((deal) => deal.title.toLowerCase().includes(selectedCarName.toLowerCase()))
  : '';

  const dealsToDisplay = showAllDeals ? carDeals.slice(3) : carDeals.slice(3, 11);

  const handleViewMore = () => {
    setShowAllDeals(true);
  };
 
  return (
    <div className='pb-10'>

  <div>
    {filteredDeals ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10">
      {filteredDeals.length > 0 ? (
        filteredDeals.map((item) => (
          <div key={item.id}>
            <DealCard details={item} onClick={() => openModal(item)} />
          </div>
        ))
      ) : (
        <p>No Match found</p>
      )}
    </div>
      ):(
           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10">
        
        {dealsToDisplay.map((deal) => (
          <div key={deal.id}>
            <DealCard details={deal} onClick={() => openModal(deal)} />
          </div>
        ))}
        {!showAllDeals && (
        <button
          onClick={handleViewMore}
          className="bg-checki-orange text-white py-2 px-4 rounded-md w-full mt-5"
        >
          View More
        </button>
      )}
      </div>
      )}
      
  </div>

      
    




      

      {showModal && selectedDeal && (
        <Modal additionalDetails={additionalDetails} carMedia={carMedia} selectedDeal={selectedDeal} closeModal={closeModal}/>
       
    
      )}
    </div>
  );
};

export default Deals;
