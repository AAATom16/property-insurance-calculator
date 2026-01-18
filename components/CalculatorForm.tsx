'use client'

import { useState, FormEvent } from 'react'

interface CalculatorFormProps {
  onCalculate: (formData: {
    propertyValue: number
    propertyType: string
    location: string
    coverageType: string
    additionalCoverage: string[]
  }) => void
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [propertyValue, setPropertyValue] = useState<string>('')
  const [propertyType, setPropertyType] = useState<string>('byt')
  const [location, setLocation] = useState<string>('praha')
  const [coverageType, setCoverageType] = useState<string>('zakladni')
  const [additionalCoverage, setAdditionalCoverage] = useState<string[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = parseFloat(propertyValue.replace(/\s/g, ''))
    if (value > 0) {
      onCalculate({
        propertyValue: value,
        propertyType,
        location,
        coverageType,
        additionalCoverage,
      })
    }
  }

  const handleAdditionalCoverageChange = (coverage: string) => {
    setAdditionalCoverage((prev) =>
      prev.includes(coverage)
        ? prev.filter((c) => c !== coverage)
        : [...prev, coverage]
    )
  }

  const formatNumber = (value: string) => {
    const num = value.replace(/\s/g, '')
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="propertyValue"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Hodnota majetku (Kč)
        </label>
        <input
          type="text"
          id="propertyValue"
          value={formatNumber(propertyValue)}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '')
            setPropertyValue(value)
          }}
          placeholder="5 000 000"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Typ majetku
        </label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="byt">Byt</option>
          <option value="dum">Dům</option>
          <option value="komercni">Komerční nemovitost</option>
          <option value="jiny">Jiný</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Lokace
        </label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="praha">Praha</option>
          <option value="velke-mesto">Velké město (100k+)</option>
          <option value="stredni-mesto">Střední město (50-100k)</option>
          <option value="male-mesto">Malé město (10-50k)</option>
          <option value="venkov">Venkov</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Typ krytí
        </label>
        <div className="space-y-2">
          {[
            { value: 'zakladni', label: 'Základní', desc: 'Základní ochrana majetku' },
            { value: 'rozsirene', label: 'Rozšířené', desc: 'Rozšířená ochrana' },
            { value: 'kompletni', label: 'Kompletní', desc: 'Kompletní ochrana' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="coverageType"
                value={option.value}
                checked={coverageType === option.value}
                onChange={(e) => setCoverageType(e.target.value)}
                className="mt-1 mr-3"
              />
              <div>
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rozšířené krytí (volitelné)
        </label>
        <div className="space-y-2">
          {[
            { value: 'zivelnost', label: 'Živelné pohromy' },
            { value: 'kradez', label: 'Krádež a vloupání' },
            { value: 'voda', label: 'Voda a vlhkost' },
            { value: 'odpovednost', label: 'Odpovědnost za škodu' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={additionalCoverage.includes(option.value)}
                onChange={() => handleAdditionalCoverageChange(option.value)}
                className="mr-3"
              />
              <span className="text-gray-900">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        Spočítat pojistné
      </button>
    </form>
  )
}

