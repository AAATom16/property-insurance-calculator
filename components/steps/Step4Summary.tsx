'use client'

import { FormData } from '@/types/formData'

interface Step4SummaryProps {
  formData: FormData
  onDataChange: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step4Summary({ formData, onDataChange, onBack }: Step4SummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 rounded-xl p-4 mb-6">
        <h1 className="text-3xl font-bold text-white">Pojištění majetku</h1>
      </div>

      {/* Offer Details Section - Three Cards in One Box */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Nabídka pojištění */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-sm font-semibold text-gray-900">Nabídka pojištění</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Nabídka číslo: <span className="font-semibold text-gray-900">1982899</span></p>
              <p className="text-sm text-gray-600">Počátek pojištění: <span className="font-semibold text-gray-900">16. 12. 2025</span></p>
            </div>
          </div>

          {/* Nemovitost */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="text-sm font-semibold text-gray-900">Nemovitost</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-900 font-semibold">
                {formData.propertyType === 'byt' ? 'Byt' : formData.propertyType === 'dum' ? 'Dům' : 'Chata, chalupa'}
              </p>
              <p className="text-sm text-gray-600 break-words">{formData.propertyAddress || '-'}</p>
            </div>
          </div>

          {/* Klient */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-sm font-semibold text-gray-900">Klient</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-900 font-semibold">
                {formData.firstName && formData.lastName 
                  ? `${formData.firstName} ${formData.lastName}`
                  : '-'}
              </p>
              <p className="text-sm text-gray-600 break-words">{formData.address || '-'}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors text-sm">
            Upravit parametry
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
        {/* Předpokládané pojištění */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">ČPP</div>
              <div>
                <div className="text-sm font-semibold text-red-600">VIENNA INSURANCE GROUP</div>
              </div>
            </div>
            <div className="text-sm text-gray-900">Produkt pojišťovny <span className="font-semibold text-gray-900">Domex</span></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-900">Pojistitel:</span>
                <span className="font-semibold text-gray-900">Česká podnikatelská pojišťovna</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Stavba:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Stavební příslušenství:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Spoluúčast:</span>
                <span className="font-semibold text-gray-900">5% min. 1 000 Kč</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-900">Produkt:</span>
                <span className="font-semibold text-gray-900">Domex</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Domácnost:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900">Cennosti:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(0)}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-6">
            <div className="flex justify-between text-lg">
              <span className="font-semibold text-gray-900">Celková cena:</span>
              <span className="font-bold text-purple-600 text-xl">{formatCurrency(1320)}</span>
            </div>
          </div>
        </div>

        {/* Záznam z jednání */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-900">Záznam z jednání</h3>

          {/* Případné nesrovnalosti */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">
              Případné nesrovnalosti mezi požadavky Zákazníka a sjednávaným pojištěním nebo jeho podstatnou změnou
            </label>
            <textarea
              value={formData.meetingDiscrepancies || ''}
              onChange={(e) => onDataChange({ meetingDiscrepancies: e.target.value })}
              placeholder="Zadejte případné nesrovnalosti..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Důvody, na kterých je doporučení založeno */}
          <div>
            <div className="text-sm font-medium text-purple-900 mb-2">Důvody, na kterých je doporučení založeno</div>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-900">Vybrat vše</span>
              </label>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5 flex-shrink-0"
                />
                <span className="ml-2 text-sm text-gray-900">Klient požadoval sjednat pojištění odpovědnosti podle zákona č. 30/2024 Sb., které splňuje zákonné normy a současně nabízí konkurenceschopné pojistné.</span>
              </label>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5 flex-shrink-0"
                />
                <span className="ml-2 text-sm text-gray-900">Doporučená nabídka splňuje požadavky klienta.</span>
              </label>
            </div>
          </div>

          {/* Popis dopadů */}
          <div>
            <div className="text-sm font-medium text-purple-900 mb-2">Popis dopadů sjednání/změny ukončení pojištění, včetně souvisejících rizik</div>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-900">Vybrat vše</span>
              </label>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5 flex-shrink-0"
                />
                <span className="ml-2 text-sm text-gray-900">Klient byl upozorněn, že povinné ručení kryje pouze škody způsobené jiným osobám, nikoli škody na vlastním vozidle.</span>
              </label>
            </div>
          </div>

          {/* Otázky */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-purple-900 mb-2">Zákazník odmítá sdělit další požadavky?</label>
              <div className="flex gap-3">
                {[
                  { value: 'ne', label: 'Ne' },
                  { value: 'ano', label: 'Ano' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="clientRefusesRequirements"
                      value={option.value}
                      checked={formData.clientRefusesRequirements === option.value}
                      onChange={(e) => onDataChange({ clientRefusesRequirements: e.target.value as any })}
                      className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-900 mb-2">Zákazník má vedle této pojistné smlouvy uzavřenou další se stejným krytím</label>
              <div className="flex gap-3">
                {[
                  { value: 'ne', label: 'Ne' },
                  { value: 'ano', label: 'Ano' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="clientHasOtherContract"
                      value={option.value}
                      checked={formData.clientHasOtherContract === option.value}
                      onChange={(e) => onDataChange({ clientHasOtherContract: e.target.value as any })}
                      className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.noDiscrepanciesAware || false}
                onChange={(e) => onDataChange({ noDiscrepanciesAware: e.target.checked })}
                className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mt-0.5 flex-shrink-0"
              />
              <span className="ml-2 text-sm text-gray-900">Zákazník ani Zprostředkovatel si nejsou vědomí žádných nesrovnalostí mezi požadavky Zákazníka a nabízeným pojištěním.</span>
            </label>
          </div>

          {/* Místo sjednání */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Místo sjednání</label>
            <input
              type="text"
              value={formData.meetingPlace || ''}
              onChange={(e) => onDataChange({ meetingPlace: e.target.value })}
              placeholder="Např. Praha"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm h-[42px]"
            />
          </div>

          {/* Druh smlouvy */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Druh smlouvy</label>
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-full max-w-md">
              <button
                type="button"
                onClick={() => onDataChange({ contractType: 'nova' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.contractType === 'nova'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Nová smlouva
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ contractType: 'nahrada' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.contractType === 'nahrada'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Náhrada stávající
              </button>
            </div>
          </div>

          {/* Smlouva je sjednána */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Smlouva je sjednána</label>
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-full max-w-md">
              <button
                type="button"
                onClick={() => onDataChange({ contractConcluded: 'osobne' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.contractConcluded === 'osobne'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Osobně
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ contractConcluded: 'nadalku' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.contractConcluded === 'nadalku'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Na dálku
              </button>
            </div>
          </div>

          {/* Způsob sjednání */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Způsob sjednání</label>
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-full max-w-2xl">
              <button
                type="button"
                onClick={() => onDataChange({ conclusionMethod: 'podpisem' })}
                className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.conclusionMethod === 'podpisem'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Podpisem
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ conclusionMethod: 'zaplacenim' })}
                className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.conclusionMethod === 'zaplacenim'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Zaplacením
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ conclusionMethod: 'digitalnim' })}
                className={`flex-1 px-4 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.conclusionMethod === 'digitalnim'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Digitálním podpisem
              </button>
            </div>
          </div>

          {/* Upozornění na blížící se datum splatnosti */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Upozornění na blížící se datum splatnosti prvního pojistného</label>
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-full max-w-md">
              <button
                type="button"
                onClick={() => onDataChange({ premiumDueNotification: 'sjednatel' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.premiumDueNotification === 'sjednatel'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Sjednatel
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ premiumDueNotification: 'zakaznik' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.premiumDueNotification === 'zakaznik'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Zákazník
              </button>
            </div>
          </div>

          {/* Způsob první platby */}
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Způsob první platby</label>
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-full max-w-md">
              <button
                type="button"
                onClick={() => onDataChange({ firstPaymentMethod: 'platba' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.firstPaymentMethod === 'platba'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Platební brána
              </button>
              <button
                type="button"
                onClick={() => onDataChange({ firstPaymentMethod: 'prevod' })}
                className={`flex-1 px-6 py-2 rounded-full font-medium text-sm transition-all relative z-10 ${
                  formData.firstPaymentMethod === 'prevod'
                    ? 'bg-white text-purple-600 border border-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Převodem z účtu
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors text-sm"
        >
          Zpět
        </button>
        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm">
          Sjednat pojištění
        </button>
      </div>
    </div>
  )
}
