'use client'

interface ProgressIndicatorProps {
  currentStep: number
}

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = [
    { number: 1, label: 'Základní údaje' },
    { number: 2, label: 'Parametry pojištění' },
    { number: 3, label: 'Kalkulace' },
    { number: 4, label: 'Doplnění informací' },
  ]

  return (
    <div className="flex items-center w-full px-4">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number
        const isLast = index === steps.length - 1
        const isFirst = index === 0

        return (
          <div key={step.number} className="flex items-center flex-1">
            <div className={`flex flex-col items-center w-full ${isFirst ? 'ml-0' : ''} ${isLast ? 'mr-0' : ''}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.number}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium whitespace-nowrap ${
                  isActive
                    ? 'text-purple-600'
                    : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div className="flex-1 h-0.5 mx-4 bg-gray-400" />
            )}
          </div>
        )
      })}
    </div>
  )
}
