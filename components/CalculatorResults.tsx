'use client'

import { InsuranceCalculation } from '@/types/insurance'

interface CalculatorResultsProps {
  calculation: InsuranceCalculation | null
}

export default function CalculatorResults({ calculation }: CalculatorResultsProps) {
  if (!calculation) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-24 h-24 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">
            Vyplňte formulář a spočítejte si pojistné
          </p>
        </div>
      </div>
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const propertyTypeLabels: { [key: string]: string } = {
    byt: 'Byt',
    dum: 'Dům',
    komercni: 'Komerční nemovitost',
    jiny: 'Jiný',
  }

  const locationLabels: { [key: string]: string } = {
    praha: 'Praha',
    'velke-mesto': 'Velké město',
    'stredni-mesto': 'Střední město',
    'male-mesto': 'Malé město',
    venkov: 'Venkov',
  }

  const coverageTypeLabels: { [key: string]: string } = {
    zakladni: 'Základní',
    rozsirene: 'Rozšířené',
    kompletni: 'Kompletní',
  }

  const additionalCoverageLabels: { [key: string]: string } = {
    zivelnost: 'Živelné pohromy',
    kradez: 'Krádež a vloupání',
    voda: 'Voda a vlhkost',
    odpovednost: 'Odpovědnost za škodu',
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
        <div className="text-sm font-medium opacity-90 mb-2">
          Roční pojistné
        </div>
        <div className="text-4xl font-bold mb-2">
          {formatCurrency(calculation.annualPremium)}
        </div>
        <div className="text-lg opacity-90">
          Měsíčně: {formatCurrency(calculation.monthlyPremium)}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Hodnota majetku:</span>
          <span className="font-semibold text-gray-900">
            {formatCurrency(calculation.propertyValue)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Typ majetku:</span>
          <span className="font-semibold text-gray-900">
            {propertyTypeLabels[calculation.propertyType]}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Lokace:</span>
          <span className="font-semibold text-gray-900">
            {locationLabels[calculation.location]}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Typ krytí:</span>
          <span className="font-semibold text-gray-900">
            {coverageTypeLabels[calculation.coverageType]}
          </span>
        </div>
      </div>

      {calculation.additionalCoverage.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Rozšířené krytí:
          </h3>
          <div className="space-y-1">
            {calculation.additionalCoverage.map((coverage) => (
              <div
                key={coverage}
                className="flex items-center text-sm text-gray-700"
              >
                <svg
                  className="w-4 h-4 text-primary-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {additionalCoverageLabels[coverage]}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl">
          Kontaktovat pojišťovnu
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          Kalkulace je orientační. Finální cena může být odlišná.
        </p>
      </div>
    </div>
  )
}

