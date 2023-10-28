import { PiFacebookLogo, PiTwitterLogo, PiInstagramLogo, PiYoutubeLogo } from 'react-icons/pi';
import benz from '@/public/benz.png'
export const paths = [
    {title:'Home'},
    {title: 'About'},
    {title: 'Cars'},
    {title: 'Pricing'},
    {title: 'Contact'},
]


export async function fetchCarDeals() {
    try {
      const response = await fetch('https://api.staging.myautochek.com/v1/inventory/car/search');
      if (response.ok) {
        const data = await response.json();
        return data.result;
      } else {
        console.error('Error fetching car makes:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error fetching car makes:', error);
      return null;
    }
  }


 export const fetchAdditionalDetails = async (id: string) => {
  
      try {
        const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car/${id}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching additional details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching additional details:', error);
      }
    }
  
    export const fetchCarMedia = async (id: string) => {
  
      try {
      const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car_media?carId=${id}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching  carmedia:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching car media:', error);
      }
    }
  
    export const tagData = [
      {
        id: 1,
        imageUrl: '/benz.png',
        alt: 'Tag 1',
        title: 'Sales Success',
        description: 'Unlock the secrets of successful marketing and reach your audience.',
        additionalInfo: 'Find out more',
      },
      {
        id: 2,
        imageUrl: '/Cadillac.png',
        alt: 'Tag 2',
        title: 'Daily Stories',
        description: 'Explore fascinating stories from around the world, updated daily.',
        additionalInfo: 'Find out more',
      },
      {
        id: 3,
        imageUrl: '/Maserati.png',
        alt: 'Tag 3',
        title: 'Tech Innovations',
        description: 'Discover the latest technological innovations and their impact.',
        additionalInfo: 'Find out more',
      },
      // Add more tag objects with interesting information
    ];

    export const experienceData = [
      {
        id: 1,
        title: "Experienced driver",
        description: "Don't have a driver? Don't worry we have many experienced drivers for you.",
        icon: <PiFacebookLogo />,
      },
      {
        id: 2,
        title: "Affordable Rates",
        description: "Get the best rates for our services and save on your expenses.",
        icon: <PiTwitterLogo />,
      },
      {
        id: 3,
        title: "24/7 Support",
        description: "Our customer support team is available around the clock to assist you.",
        icon: <PiInstagramLogo />,
      },
      {
        id: 4,
        title: "Quality Vehicles",
        description: "Choose from a fleet of high-quality vehicles for your transportation needs.",
        icon: <PiYoutubeLogo />,
      },
      // {
      //   id: 5,
      //   title: "Safety First",
      //   description: "We prioritize your safety with strict safety measures and background-checked drivers.",
      //   icon: <PiLinkedInLogo />,
      // },
    ];