'use client'

import { useState } from 'react'
import ProgressIndicator from './ProgressIndicator'
import Step1BasicInfo from './steps/Step1BasicInfo'
import Step2PropertyDetails from './steps/Step2PropertyDetails'
import Step3Calculation from './steps/Step3Calculation'
import Step4Summary from './steps/Step4Summary'
import { FormData } from '@/types/formData'

export default function MultiStepInsuranceForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    contractReplacement: false,
    contractNumber: '',
    insuranceCompany: '',
    personType: 'fyzicka',
    ico: '',
    companyName: '',
    companyPosition: '',
    personalId: '',
    birthDate: '',
    titleBefore: '',
    firstName: '',
    lastName: '',
    titleAfter: '',
    address: '',
    sameAddress: false,
    correspondenceAddress: '',
    phone: '',
    email: '',
    consentData: false,
    consentElectronic: false,
    consentMarketing: false,
    propertyAddress: '',
    notApproved: false,
    postalCode: '',
    municipality: '',
    cadastralArea: '',
    parcelNumber: '',
    parcelType: '',
    propertyRelation: 'vlastnik',
    propertyRented: false,
    propertyType: 'byt',
    ownershipType: '',
    goodCondition: false,
    
    // Step 2
    insuranceType: 'stavba',
    insuranceStavba: false,
    insuranceDomacnost: false,
    apartmentLayout: '',
    apartmentLocation: '',
    floorArea: '',
    apartmentNumber: '',
    totalBuiltArea: '',
    totalUsableArea: '',
    inhabitedAttic: false,
    roofType: '',
    houseConstruction: '',
    floors: '',
    materialQuality: '',
    cellarPercentage: '',
    apartmentConstruction: '',
    higherFloor: false,
    apartmentQuality: '',
    apartmentCondition: '',
    hasBalconyOrTerrace: false,
    hasBalcony: false,
    balconyArea: '',
    hasTerrace: false,
    terraceArea: '',
    garageParking: false,
    hasElevator: false,
    parkingSpace: false,
    propertyValue: 0,
    ancillaryBuildings: 0,
    householdValue: 0,
    specialValueItems: 0,
    equipmentAndFixedItems: 0,
    nonResidentialItems: 0,
    
    // Step 3
    insuranceStartDate: '',
    paymentFrequency: 'ročně',
    selectedOffer: null,
    
    // Step 4
    contractMethod: '',
    meetingDiscrepancies: '',
    recommendationReasons: [],
    impactDescription: [],
    clientRefusesRequirements: '',
    clientHasOtherContract: '',
    noDiscrepanciesAware: false,
    meetingPlace: '',
    contractType: 'nova',
    conclusionMethod: 'podpisem',
    premiumDueNotification: '',
    firstPaymentMethod: 'platba',
    contractConcluded: 'osobne',
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleDataChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo formData={formData} onDataChange={handleDataChange} onNext={handleNext} />
      case 2:
        return <Step2PropertyDetails formData={formData} onDataChange={handleDataChange} onNext={handleNext} onBack={handleBack} />
      case 3:
        return <Step3Calculation formData={formData} onDataChange={handleDataChange} onNext={handleNext} onBack={handleBack} />
      case 4:
        return <Step4Summary formData={formData} onDataChange={handleDataChange} onBack={handleBack} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-purple-900 mb-4">petrisk</div>
        </div>
        <div className="w-full -mx-6 px-6 pb-4">
          <ProgressIndicator currentStep={currentStep} />
        </div>
        <div className="border-b border-gray-200"></div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {renderStep()}
      </div>
    </div>
  )
}
