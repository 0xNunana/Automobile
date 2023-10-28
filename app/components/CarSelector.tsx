import React, { useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

interface CarMake {
  id: number;
  name: string;
  imageUrl: string;
}

interface CarSelectorProps {
  onCarSelect: (carId: number | null) => void;
}

const CarSelector: React.FC<CarSelectorProps> = ({ onCarSelect }) => {
  const [carMakes, setCarMakes] = useState<CarMake[]>([]);
  const [selectedCar, setSelectedCar] = useState<CarMake | null>(null);

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

  const handleCarSelect = (car: CarMake) => {
    setSelectedCar(car);
    onCarSelect(car.id); // Pass the selected car's ID to the parent component
  };

  return (
    <div>
  
      <Listbox value={selectedCar} onChange={setSelectedCar}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <span className="block truncate">
                {selectedCar ?  <div className="flex items-center space-x-2">
                          <img
                            src={selectedCar.imageUrl}
                            alt={selectedCar.name}
                            className="w-7 h-7"
                          />
                          <p>{selectedCar.name}</p>
                        </div> : 'Select a car make'}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full py-1 text-base bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none sm:text-sm">
                {carMakes.map((carMake) => (
                  <Listbox.Option key={carMake.id} value={carMake}>
                    {({ active }) => (
                      <li
                        className={active
                          ? 'text-white bg-indigo-600'
                          : 'text-gray-900'
                        }
                        onClick={() => handleCarSelect(carMake)}
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={carMake.imageUrl}
                            alt={carMake.name}
                            className="w-5 h-5"
                          />
                          <p>{carMake.name}</p>
                        </div>
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default CarSelector;
