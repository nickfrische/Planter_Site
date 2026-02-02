'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fonts = [
  { name: 'Poppins (Current)', family: 'var(--font-poppins)', category: 'Sans-serif', description: 'Geometric, friendly, versatile' },
  { name: 'Playfair Display', family: '"Playfair Display", serif', category: 'Serif', description: 'Elegant, classic, editorial feel' },
  { name: 'Lora', family: '"Lora", serif', category: 'Serif', description: 'Well-balanced, contemporary serif' },
  { name: 'Merriweather', family: '"Merriweather", serif', category: 'Serif', description: 'Warm, readable, screen-optimized' },
  { name: 'Montserrat', family: '"Montserrat", sans-serif', category: 'Sans-serif', description: 'Urban, modern, geometric' },
  { name: 'Raleway', family: '"Raleway", sans-serif', category: 'Sans-serif', description: 'Elegant, thin weights available' },
  { name: 'Inter', family: '"Inter", sans-serif', category: 'Sans-serif', description: 'Clean, versatile, great for UI' },
  { name: 'Sora', family: '"Sora", sans-serif', category: 'Sans-serif', description: 'Modern, geometric, highly legible' },
  { name: 'Cormorant Garamond', family: '"Cormorant Garamond", serif', category: 'Serif', description: 'Luxurious, sophisticated, display' },
  { name: 'DM Sans', family: '"DM Sans", sans-serif', category: 'Sans-serif', description: 'Low-contrast, geometric, modern' },
];

const sampleTexts = {
  headline: 'Planter Business',
  tagline: 'Your Private Gardener',
  paragraph: 'Year-round beauty with seasonal refreshes. Professional design, installation, and maintenance included. Transform your outdoor space with our expert planter services.',
  cta: 'Get Started Today',
};

export default function FontKitPage() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [customText, setCustomText] = useState('');
  const [fontSize, setFontSize] = useState(48);
  const [showAllFonts, setShowAllFonts] = useState(true);

  return (
    <>
      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&family=Merriweather:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Header />

      <main className="pt-[72px] min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-forest-900 text-white py-16">
          <div className="container-padding max-w-[1200px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Font Kit</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Preview and compare different font options for Planter Business.
              Click on any font to see it in action across different use cases.
            </p>
          </div>
        </section>

        {/* Font Selector */}
        <section className="py-12 bg-white border-b">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-forest-900">Select a Font</h2>
              <button
                onClick={() => setShowAllFonts(!showAllFonts)}
                className="px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
              >
                {showAllFonts ? 'Compare Selected Only' : 'Show All Fonts'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {fonts.map((font) => (
                <button
                  key={font.name}
                  onClick={() => setSelectedFont(font)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedFont.name === font.name
                      ? 'border-forest-600 bg-forest-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-forest-300 hover:shadow'
                  }`}
                >
                  <span
                    className="block text-2xl mb-2 text-forest-900"
                    style={{ fontFamily: font.family }}
                  >
                    Aa
                  </span>
                  <span className="block font-semibold text-sm text-gray-900">{font.name}</span>
                  <span className="block text-xs text-gray-500">{font.category}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Font Details */}
        <section className="py-12 bg-cream-50">
          <div className="container-padding max-w-[1400px] mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8 pb-8 border-b">
                <div>
                  <h3
                    className="text-4xl md:text-5xl font-bold text-forest-900 mb-2"
                    style={{ fontFamily: selectedFont.family }}
                  >
                    {selectedFont.name}
                  </h3>
                  <p className="text-gray-600">{selectedFont.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-forest-100 text-forest-700 text-sm rounded-full">
                    {selectedFont.category}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600">Size:</label>
                  <input
                    type="range"
                    min="24"
                    max="96"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-sm text-gray-600 w-12">{fontSize}px</span>
                </div>
              </div>

              {/* Custom Text Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Try your own text:
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Type something to preview..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 text-lg"
                />
                {customText && (
                  <p
                    className="mt-4 text-forest-900"
                    style={{ fontFamily: selectedFont.family, fontSize: `${fontSize}px` }}
                  >
                    {customText}
                  </p>
                )}
              </div>

              {/* Sample Content Preview */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Headline</span>
                  <h4
                    className="text-forest-900"
                    style={{ fontFamily: selectedFont.family, fontSize: `${fontSize}px`, lineHeight: 1.2 }}
                  >
                    {sampleTexts.headline}
                  </h4>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Tagline</span>
                  <p
                    className="text-forest-700"
                    style={{ fontFamily: selectedFont.family, fontSize: `${Math.round(fontSize * 0.6)}px` }}
                  >
                    {sampleTexts.tagline}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Body Text</span>
                  <p
                    className="text-gray-700 max-w-3xl"
                    style={{ fontFamily: selectedFont.family, fontSize: '18px', lineHeight: 1.7 }}
                  >
                    {sampleTexts.paragraph}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Button</span>
                  <button
                    className="px-8 py-4 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
                    style={{ fontFamily: selectedFont.family, fontSize: '16px', fontWeight: 600 }}
                  >
                    {sampleTexts.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* Font Weights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-forest-900 mb-6">Font Weights</h3>
              <div className="space-y-4">
                {[300, 400, 500, 600, 700].map((weight) => (
                  <div key={weight} className="flex items-baseline gap-4">
                    <span className="text-sm text-gray-500 w-20">{weight}</span>
                    <span
                      className="text-2xl text-forest-900"
                      style={{ fontFamily: selectedFont.family, fontWeight: weight }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Set */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-forest-900 mb-6">Character Set</h3>
              <div
                className="text-3xl text-forest-900 leading-relaxed"
                style={{ fontFamily: selectedFont.family }}
              >
                <p className="mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="mb-4">abcdefghijklmnopqrstuvwxyz</p>
                <p className="mb-4">0123456789</p>
                <p>{'!@#$%^&*()_+-=[]{}|;\':\",./<>?'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison */}
        {showAllFonts && (
          <section className="py-12 bg-white">
            <div className="container-padding max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-bold text-forest-900 mb-8">Compare All Fonts</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Font</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Headline Preview</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Body Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fonts.map((font, index) => (
                      <tr
                        key={font.name}
                        className={`border-b border-gray-100 hover:bg-forest-50 cursor-pointer transition-colors ${
                          selectedFont.name === font.name ? 'bg-forest-50' : ''
                        }`}
                        onClick={() => setSelectedFont(font)}
                      >
                        <td className="py-6 px-4">
                          <span className="font-semibold text-forest-900">{font.name}</span>
                          <span className="block text-xs text-gray-500">{font.category}</span>
                        </td>
                        <td className="py-6 px-4">
                          <span
                            className="text-2xl text-forest-900"
                            style={{ fontFamily: font.family }}
                          >
                            Planter Business
                          </span>
                        </td>
                        <td className="py-6 px-4">
                          <span
                            className="text-base text-gray-700"
                            style={{ fontFamily: font.family }}
                          >
                            Year-round beauty with seasonal refreshes.
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Mock Website Section */}
        <section className="py-12 bg-gray-100">
          <div className="container-padding max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-bold text-forest-900 mb-8">Preview on Website Mock-up</h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Mock Header */}
              <div className="bg-forest-900 text-white px-8 py-4 flex items-center justify-between">
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: selectedFont.family }}
                >
                  Planter Business
                </span>
                <div className="flex gap-6 text-sm" style={{ fontFamily: selectedFont.family }}>
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Mock Hero */}
              <div
                className="relative h-[400px] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/potted_plants_patio_pool.webp)' }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: selectedFont.family }}
                  >
                    Your Private Gardener
                  </h2>
                  <p
                    className="text-xl mb-8 max-w-2xl"
                    style={{ fontFamily: selectedFont.family }}
                  >
                    Professional seasonal planter services for the Detroit metro area
                  </p>
                  <button
                    className="px-8 py-4 bg-forest-600 text-white rounded-lg font-semibold"
                    style={{ fontFamily: selectedFont.family }}
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Mock Content */}
              <div className="p-8 md:p-12">
                <h3
                  className="text-3xl font-bold text-forest-900 mb-4 text-center"
                  style={{ fontFamily: selectedFont.family }}
                >
                  What We Do
                </h3>
                <p
                  className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
                  style={{ fontFamily: selectedFont.family }}
                >
                  From spring blooms to winter evergreens, we keep your planters beautiful year-round
                  with our professional design, installation, and maintenance services.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Planter Subscriptions', 'Seasonal Decor', 'Maintenance'].map((service) => (
                    <div key={service} className="bg-cream-50 rounded-xl p-6 text-center">
                      <h4
                        className="text-lg font-semibold text-forest-900 mb-2"
                        style={{ fontFamily: selectedFont.family }}
                      >
                        {service}
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: selectedFont.family }}
                      >
                        Professional service tailored to your needs.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="py-12 bg-forest-900 text-white">
          <div className="container-padding max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Based on the brand's aesthetic, we recommend using <strong>Sora</strong> for headlines
              and <strong>Inter</strong> for body text. This combination provides a modern, professional
              look while maintaining excellent readability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedFont(fonts[0])}
                className="px-6 py-3 bg-white text-forest-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Preview Sora
              </button>
              <button
                onClick={() => setSelectedFont(fonts[1])}
                className="px-6 py-3 bg-forest-600 text-white rounded-lg font-semibold hover:bg-forest-700 transition-colors border border-white/20"
              >
                Preview Inter
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
