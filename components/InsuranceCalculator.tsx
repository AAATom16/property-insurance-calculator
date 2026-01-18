'use client'

import { useState } from 'react'
import CalculatorForm from './CalculatorForm'
import CalculatorResults from './CalculatorResults'
import { InsuranceCalculation } from '@/types/insurance'

export default function InsuranceCalculator() {
  const [calculation, setCalculation] = useState<InsuranceCalculation | null>(null)

  const handleCalculate = (formData: {
    propertyValue: number
    propertyType: string
    location: string
    coverageType: string
    additionalCoverage: string[]
  }) => {
    // Výpočet pojistného
    let basePremium = 0
    let annualPremium = 0

    // Základní sazba podle typu majetku
    const propertyTypeRates: { [key: string]: number } = {
      'byt': 0.002,      // 0.2% ročně
      'dum': 0.003,      // 0.3% ročně
      'komercni': 0.004, // 0.4% ročně
      'jiny': 0.0025,    // 0.25% ročně
    }

    // Multiplikátor podle lokace
    const locationMultipliers: { [key: string]: number } = {
      'praha': 1.2,
      'velke-mesto': 1.1,
      'stredni-mesto': 1.0,
      'male-mesto': 0.9,
      'venkov': 0.8,
    }

    // Multiplikátor podle typu krytí
    const coverageMultipliers: { [key: string]: number } = {
      'zakladni': 1.0,
      'rozsirene': 1.3,
      'kompletni': 1.6,
    }

    // Základní výpočet
    const baseRate = propertyTypeRates[formData.propertyType] || 0.002
    const locationMultiplier = locationMultipliers[formData.location] || 1.0
    const coverageMultiplier = coverageMultipliers[formData.coverageType] || 1.0

    basePremium = formData.propertyValue * baseRate
    annualPremium = basePremium * locationMultiplier * coverageMultiplier

    // Příplatky za rozšířené krytí
    const additionalCoverageCosts: { [key: string]: number } = {
      'zivelnost': annualPremium * 0.15,
      'kradez': annualPremium * 0.1,
      'voda': annualPremium * 0.12,
      'odpovednost': annualPremium * 0.08,
    }

    let additionalCost = 0
    formData.additionalCoverage.forEach((coverage) => {
      additionalCost += additionalCoverageCosts[coverage] || 0
    })

    annualPremium += additionalCost

    // Zaokrouhlení
    annualPremium = Math.round(annualPremium)
    const monthlyPremium = Math.round(annualPremium / 12)

    setCalculation({
      annualPremium,
      monthlyPremium,
      propertyValue: formData.propertyValue,
      propertyType: formData.propertyType,
      location: formData.location,
      coverageType: formData.coverageType,
      additionalCoverage: formData.additionalCoverage,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Zadejte údaje
        </h2>
        <CalculatorForm onCalculate={handleCalculate} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Výsledek kalkulace
        </h2>
        <CalculatorResults calculation={calculation} />
      </div>
    </div>
  )
}

