import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export type Path = {
    title: string;
  }

  export type SocialMedia ={
    icon: JSX.Element;
    link: string;
  }

  export type CarMake = {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export type DealsType = {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
  ccMeasurement: number;
}


export type AdditionalDetailsType= {
  features: string[];
  carFeatures: string[];
  modelFeatures: string[];
  damageMedia: string[];
  id: string;
  year: number;
  insured: boolean;
  mileage: number;
  vin: string;
  marketplacePrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  isFeatured: boolean;
  imageUrl: string;
  model: {
    modelFeatures: string[];
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    make: {
      id: number;
      name: string;
      imageUrl: string;
    };
    popular: boolean;
  };
  state: string;
  country: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: string;
  bodyType: {
    id: number;
    name: string;
    imageUrl: string;
  };
  city: string;
  marketplaceOldPrice: number;
  createdAt: string;
  updatedAt: string;
  mileageUnit: string;
  hasWarranty: boolean;
  hasFinancing: boolean;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  sold: boolean;
  hasThreeDImage: boolean;
  inspectorDetails: {
    inspectedMakes: {
      count: number;
      name: string;
      imageUrl: string;
    }[];
    inspectorFullName: string;
    workshopName: string;
    totalInspection: number;
  };
  carName: string;
  financingSettings: {
    loanCalculator: {
      loanPercentage: number;
      ranges: {
        minInterestRate: number;
        maxInterestRate: number;
        minDownPayment: number;
        maxDownPayment: number;
        tenure: number;
      };
      defaultValues: {
        interestRate: number;
        downPayment: number;
        tenure: number;
      };
    };
  };
  ccMeasurement: number;
}


export type CarMediatype = {
  carMediaList: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
    type: string;
  }[];
};

export type TagDataType = {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  additionalInfo: string;
};

export type ExperienceDataType = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

