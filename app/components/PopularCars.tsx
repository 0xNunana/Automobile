import React,{useState,useEffect} from 'react'
import { CarMake } from '../Lib';
import Image from 'next/image';



const PopularCars = ({onCarSelect}:{onCarSelect:(carName:string)=>void}) => {
    const [carMakes, setCarMakes] = useState<CarMake[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
      // Fetch the list of popular car makes from your API
      const fetchCarMakes = async () => {
        try {
          const response = await fetch(
            'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
          );
          if (response.ok) {
            const data = await response.json();
            setCarMakes(data.makeList);
          } else {
            console.error('Error fetching car makes:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching car makes:', error);
        }
      };
  
      // Call the fetchCarMakes function when the component mounts
      fetchCarMakes();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      // Perform the search based on the searchQuery
      // You can update the onCarSelect function to filter based on the searchQuery
      onCarSelect(searchQuery);
    };

  return (
<div className=''>
<form
        className="bg-white rounded-lg shadow-lg py-7 max-sm:py-3 my-10 max-sm:my-6 px-5 grid md:grid-cols-5 gap-3"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="h-20 max-sm:h-10  border max-sm:pl-1 pl-5 col-span-4 "
          placeholder="Type the car brand"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="text-white ">
          <button className="bg-checki-orange px-5 py-3 flex justify-center items-center w-full h-full max-sm:h-[0%]">
            Search
          </button>
        </div>
      </form>
 


<ul className='flex mx-auto  items-center flex-wrap'>
        {carMakes.map((car,index)=>(
<li key={car.id} onClick={() => onCarSelect(car.name)} className={`${index == 0 ? 'bg-[#fe5c3d] hover:bg-white hover:text-black text-white':''} px-4 py-3 border rounded-md shadow-lg font-semibold cursor-pointer hover:bg-checki-orange hover:text-white `}>
    <div className='flex items-center space-x-2' >
        <Image src={car.imageUrl} width={20} height={20} alt={car.name}/>
      <div className='hidden md:flex'>{car.name}</div>
    </div>
</li>
        ))}
    </ul>
</div>

    
  )
}

export default PopularCars