"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { PricingCheckIcon } from "@/assets/svgs";

type Currency = 'NGN' | 'KES' | 'GHS' | 'ZAR' | 'USD';

const pricingData = {
  otg: {
    copy: (
      <>
        <strong>On The Ground (OTG):</strong> you scope and build the project — forms, logic, targets. WeCollect just does the dirty work: we deploy trained field agents to collect it, while you watch the data come in and query it in real time. Pricing below is your platform tier; the fieldwork itself is costed separately to your project&apos;s scope.
      </>
    ),
    plans: [
      { 
        name: 'Basic', sub: 'Get a feel for the platform', prices: { NGN: 0, KES: 0, GHS: 0, ZAR: 0, USD: 0 }, unit: null, cta: 'Get started', 
        features: [
          'Unlimited number of records', 'Data export in CSV', 'Full base record calculation', 'Validated data collected'
        ]
      },
      { 
        name: 'Premium', sub: 'For recurring, smaller projects', prices: { NGN: 49999, KES: 5500, GHS: 600, ZAR: 900, USD: 49 }, unit: '/month', cta: 'Get started', 
        features: [
          'Everything in Basic', 'Data export in CSV, SHP and more',
          {text: '25% off your project\'s base cost', note: 'e.g. a project costed at ₦1,000 per respondent gets this discount'},
          'AI chatbot built on your collected data', 'Dedicated account manager'
        ]
      },
      { 
        name: 'Premium +', sub: 'For teams running projects often', prices: { NGN: 74999, KES: 8500, GHS: 900, ZAR: 1400, USD: 75 }, unit: '/month', cta: 'Get started', featured: true, tag: 'Best value', 
        features: [
          'Everything in Premium',
          {text: '37% off your project\'s base cost', note: 'e.g. a project costed at ₦1,000 per respondent gets this discount'},
          'AI-based survey question generator', 'Data visualization builder', 'Integration with third-party applications'
        ]
      },
      { 
        name: 'Enterprise', sub: 'For organisation-wide deployment', prices: { NGN: null, KES: null, GHS: null, ZAR: null, USD: null }, unit: null, cta: 'Talk to us', 
        features: [
          'All Premium+ features', 'Data visualization builder', 'White-labeling', 'Agent management, monitoring & payment suite'
        ]
      },
    ]
  },
  pmd: {
    copy: (
      <>
        <strong>Powered by My Data (PMD):</strong> you bring and manage your own field agents on the WeCollect platform — priced by how much data you collect each month.
      </>
    ),
    plans: [
      { 
        name: 'Basic', sub: 'Academic research', prices: { NGN: 0, KES: 0, GHS: 0, ZAR: 0, USD: 0 }, unit: null, cta: 'Get started', 
        features: [
          'Up to 500 submissions/month', 'All current platform features', 'Offline capture & GPS lock', 'Real-time dashboard', 'CSV export', 'Email & chat support'
        ]
      },
      { 
        name: 'Essential', sub: 'Core features', prices: { NGN: 150000, KES: 16500, GHS: 1800, ZAR: 2800, USD: 149 }, unit: '/month', cta: 'Get started', 
        features: [
          'Up to 10,000 submissions/month', 'Everything in Basic', 'GeoAI quality assurance', 'GIS export (SHP + more)', 'Priority support', 'Account manager touchpoint'
        ]
      },
      { 
        name: 'Growth', sub: 'AI-driven', prices: { NGN: 325000, KES: 36000, GHS: 4000, ZAR: 6000, USD: 325 }, unit: '/month', cta: 'Get started', featured: true, tag: 'Most common', 
        features: [
          'Up to 50,000 submissions/month', 'Everything in Essential', 'AI chatbot integration', 'Data visualization builder', 'Personalized account manager'
        ]
      },
      { 
        name: 'Enterprise', sub: 'System ownership', prices: { NGN: null, KES: null, GHS: null, ZAR: null, USD: null }, unit: null, cta: 'Talk to us', 
        features: [
          '250,000+ submissions', 'Everything in Growth', 'Private hosting', 'Unlimited storage', 'White-labeling', 'Dedicated account manager'
        ]
      },
    ]
  }
};

function formatPrice(amount: number, currency: Currency) {
  const locales: Record<Currency, string> = {
    NGN: 'en-NG',
    KES: 'en-KE',
    GHS: 'en-GH',
    ZAR: 'en-ZA',
    USD: 'en-US'
  };
  return new Intl.NumberFormat(locales[currency], {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount);
}

export function PricingContent() {
  const [mode, setMode] = useState<'otg' | 'pmd'>('otg');
  const [annual, setAnnual] = useState(true);
  const [currency, setCurrency] = useState<Currency>('NGN');

  // Automatically detect user location and map to major African currencies
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const country = data.country_code;
        if (country === 'NG') setCurrency('NGN');
        else if (country === 'KE') setCurrency('KES');
        else if (country === 'GH') setCurrency('GHS');
        else if (country === 'ZA') setCurrency('ZAR');
        else setCurrency('USD'); // Default for other countries (USD is universally accepted)
      })
      .catch(() => {
        // Fallback silently
      });
  }, []);

  const currentSet = pricingData[mode];

  return (
    <section className="bg-[#FAFAFD] text-[#15132B] pb-24">
      <Container>
        {/* Toggle Controls */}
        <div className="flex flex-col items-center pt-12 pb-4 gap-4">
          <div className="inline-flex bg-[#ECEAFC] rounded-full p-1 gap-1">
            <button
              onClick={() => setMode('otg')}
              className={`px-5 py-2.5 rounded-full font-semibold text-[14px] md:text-[15px] transition-colors ${
                mode === 'otg' ? 'bg-[#4747D6] text-white' : 'text-[#4747D6] hover:bg-white/50'
              }`}
            >
              OTG — we run the field
            </button>
            <button
              onClick={() => setMode('pmd')}
              className={`px-5 py-2.5 rounded-full font-semibold text-[14px] md:text-[15px] transition-colors ${
                mode === 'pmd' ? 'bg-[#4747D6] text-white' : 'text-[#4747D6] hover:bg-white/50'
              }`}
            >
              PMD — your own field team
            </button>
          </div>
          
          <div className="max-w-[700px] text-center text-[15px] text-[#6b6885] leading-relaxed px-4">
            {currentSet.copy}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
            {/* Billing Toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-[14px] font-medium ${!annual ? 'text-[#15132b]' : 'text-[#6b6885]'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`w-11 h-6 rounded-full relative transition-colors ${annual ? 'bg-[#4747D6]' : 'bg-[#ECEAFC] border border-[#E7E4F3]'}`}
              >
                <div className={`absolute top-[2px] w-[18px] h-[18px] rounded-full transition-all duration-200 ${annual ? 'left-[22px] bg-white' : 'left-[2px] bg-[#4747D6]'}`} />
              </button>
              <span className={`text-[14px] font-medium ${annual ? 'text-[#15132b]' : 'text-[#6b6885]'}`}>Annual</span>
              <span className="bg-[#ECEAFC] text-[#4747D6] text-[12px] font-bold px-2.5 py-1 rounded-full">
                2 months free
              </span>
            </div>

            {/* Currency Selector (Manual Override) */}
            <div className="flex items-center gap-2 border-l border-[#E7E4F3] pl-6">
              <span className="text-[14px] font-medium text-[#6b6885]">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent border border-[#E7E4F3] text-[#15132b] text-[14px] font-semibold rounded-lg px-2 py-1 outline-none focus:border-[#4747D6]"
              >
                <option value="NGN">₦ NGN</option>
                <option value="KES">KSh KES</option>
                <option value="GHS">GH₵ GHS</option>
                <option value="ZAR">R ZAR</option>
                <option value="USD">$ USD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 items-start">
          {currentSet.plans.map((p, idx) => {
            let priceHtml = null;
            let noteHtml = null;

            const basePrice = p.prices[currency];

            if (basePrice === null) {
              priceHtml = <div className="text-[32px] font-extrabold text-[#202064] leading-tight">Custom</div>;
            } else if (basePrice === 0) {
              priceHtml = <div className="text-[32px] font-extrabold text-[#202064] leading-tight">Free</div>;
            } else {
              let shown = basePrice;
              if (annual) {
                shown = Math.round((basePrice * 10) / 12);
                noteHtml = `Billed annually · ${formatPrice(basePrice * 10, currency)}/yr`;
              }
              priceHtml = (
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-extrabold text-[#202064] leading-tight">{formatPrice(shown, currency)}</span>
                  <span className="text-[13px] text-[#6b6885]">{p.unit}</span>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`flex flex-col bg-white border rounded-[18px] overflow-hidden transition-all duration-300 ${
                  p.featured
                    ? 'border-[#4747D6] lg:-translate-y-3 shadow-[0_24px_48px_-20px_rgba(74,63,214,0.35)] relative z-10'
                    : 'border-[#E7E4F3] shadow-sm'
                }`}
              >
                <div className={`p-6 pb-5 relative text-white ${p.featured ? 'bg-gradient-to-br from-[#5548e8] to-[#4433c4]' : 'bg-gradient-to-br from-[#4747D6] to-[#3636B5]'}`}>
                  {p.tag && (
                    <div className="absolute top-4 right-4 bg-white text-[#4747D6] text-[11px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                      {p.tag}
                    </div>
                  )}
                  <div className="font-bold text-[19px] mb-1">{p.name}</div>
                  <div className="text-[13px] text-[#D9D5FA] leading-tight pr-12">{p.sub}</div>
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <div className="min-h-[50px] flex flex-col justify-end">
                    {priceHtml}
                  </div>
                  <div className="text-[12px] text-[#6b6885] mt-1 mb-6 min-h-[16px]">
                    {noteHtml}
                  </div>

                  <Button
                    href={p.cta === "Talk to us" ? "/contact-us" : "https://app.wecollect.tech/register"}
                    variant={p.featured ? "primary" : "outline"}
                    className="w-full mb-8 font-semibold"
                    size="lg"
                  >
                    {p.cta}
                  </Button>

                  <ul className="flex flex-col text-[13.5px] leading-relaxed m-0 p-0">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex gap-2.5 py-2.5 border-t border-[#E7E4F3] first:border-0 items-start">
                        <PricingCheckIcon className="shrink-0 mt-1 text-[#4747D6]" />
                        <span className="flex-1 text-[#6b6885]">
                          {typeof f === 'object' ? (
                            <>
                              <strong className="text-[#15132b] font-semibold block">{f.text}</strong>
                              <em className="not-italic text-[12px] text-[#6b6885] block mt-0.5">{f.note}</em>
                            </>
                          ) : (
                            f
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Annual Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#4747D6] to-[#3636B5] rounded-[18px] p-6 md:p-8 text-white shadow-md">
          <div>
            <div className="font-bold text-[16px] md:text-[18px] mb-1">Commit annually, get 2 months on us</div>
            <div className="text-[14px] text-[#D6D1F8]">Applies to Premium, Premium+, Essential and Growth plans. Billed once a year.</div>
          </div>
        </div>

        {/* Fineprint */}
        <div className="text-center text-[12.5px] text-[#6b6885] mt-8 max-w-[800px] mx-auto">
          ** Terms and conditions apply. Custom volumes and multi-country deployments are quoted directly — talk to us.
        </div>
      </Container>
    </section>
  );
}
