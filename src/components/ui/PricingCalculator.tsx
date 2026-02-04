'use client'

import { useState } from 'react'
import Link from 'next/link'

type ServiceType = 'tree-removal' | 'tree-pruning' | 'land-clearing' | 'landscaping' | null
type SizeType = 'small' | 'medium' | 'large' | 'very-large' | null

const serviceOptions = [
  { id: 'tree-removal', label: 'Tree Removal', icon: '🌲' },
  { id: 'tree-pruning', label: 'Tree Pruning', icon: '✂️' },
  { id: 'land-clearing', label: 'Land Clearing', icon: '🏗️' },
  { id: 'landscaping', label: 'Landscaping', icon: '🌿' },
]

const treeSizes = [
  { id: 'small', label: 'Small', description: 'Under 20 feet' },
  { id: 'medium', label: 'Medium', description: '20-40 feet' },
  { id: 'large', label: 'Large', description: '40-60 feet' },
  { id: 'very-large', label: 'Very Large', description: 'Over 60 feet' },
]

const propertySizes = [
  { id: 'small', label: 'Small', description: 'Under ¼ acre' },
  { id: 'medium', label: 'Medium', description: '¼ to 1 acre' },
  { id: 'large', label: 'Large', description: 'Over 1 acre' },
]

const priceRanges: Record<string, Record<string, string>> = {
  'tree-removal': {
    small: '$300 - $600',
    medium: '$600 - $1,500',
    large: '$1,500 - $3,000',
    'very-large': '$3,000 - $6,000+',
  },
  'tree-pruning': {
    small: '$150 - $400',
    medium: '$400 - $800',
    large: '$800 - $1,500',
    'very-large': '$1,500 - $2,500+',
  },
  'land-clearing': {
    small: '$1,000 - $3,000',
    medium: '$3,000 - $8,000',
    large: '$8,000 - $15,000+',
  },
  landscaping: {
    small: '$500 - $2,000',
    medium: '$2,000 - $5,000',
    large: '$5,000 - $15,000+',
  },
}

export default function PricingCalculator() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState<ServiceType>(null)
  const [size, setSize] = useState<SizeType>(null)

  const handleServiceSelect = (serviceId: ServiceType) => {
    setService(serviceId)
    setSize(null)
    setStep(2)
  }

  const handleSizeSelect = (sizeId: SizeType) => {
    setSize(sizeId)
    setStep(3)
  }

  const handleReset = () => {
    setStep(1)
    setService(null)
    setSize(null)
  }

  const sizeOptions = service === 'tree-removal' || service === 'tree-pruning' ? treeSizes : propertySizes

  const getEstimate = () => {
    if (service && size && priceRanges[service]) {
      return priceRanges[service][size] || 'Contact for quote'
    }
    return 'Contact for quote'
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-charcoal mb-2">Get an Instant Estimate</h3>
      <p className="text-charcoal/60 mb-6">Answer a few questions to see typical pricing for your project.</p>

      {/* Progress Steps */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 rounded-full transition-colors ${
              s <= step ? 'bg-cta-green' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Select Service */}
      {step === 1 && (
        <div className="space-y-3">
          <p className="font-medium text-charcoal mb-4">What service do you need?</p>
          {serviceOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleServiceSelect(option.id as ServiceType)}
              className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-cta-green hover:bg-cta-green/5 transition-all text-left"
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="font-medium text-charcoal">{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Select Size */}
      {step === 2 && service && (
        <div className="space-y-3">
          <button
            onClick={() => setStep(1)}
            className="text-sm text-cta-green hover:underline mb-2"
          >
            ← Back to services
          </button>
          <p className="font-medium text-charcoal mb-4">
            {service === 'tree-removal' || service === 'tree-pruning'
              ? 'How tall is the tree?'
              : 'What is your property size?'}
          </p>
          {sizeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSizeSelect(option.id as SizeType)}
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-cta-green hover:bg-cta-green/5 transition-all text-left"
            >
              <span className="font-medium text-charcoal">{option.label}</span>
              <span className="text-sm text-charcoal/60">{option.description}</span>
            </button>
          ))}
        </div>
      )}

      {/* Step 3: Show Estimate */}
      {step === 3 && service && size && (
        <div className="text-center">
          <div className="bg-cta-green/10 rounded-2xl p-6 mb-6">
            <p className="text-sm text-charcoal/60 mb-2">Estimated Price Range</p>
            <p className="text-2xl sm:text-4xl font-bold text-cta-green">{getEstimate()}</p>
          </div>

          <p className="text-sm text-charcoal/60 mb-6">
            *Prices are estimates based on typical projects in the DMV area.
            Final pricing depends on specific conditions, accessibility, and other factors.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors text-center"
            >
              Get Accurate Quote
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-charcoal font-semibold rounded-lg hover:border-cta-green transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
