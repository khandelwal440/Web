import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import ProofSection from '../components/ProofSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import PreviewSection from '../components/PreviewSection.jsx';
import PromptsSection from '../components/PromptsSection.jsx';
import AfterPurchaseSection from '../components/AfterPurchaseSection.jsx';
import OfferSection from '../components/OfferSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTASection from '../components/CTASection.jsx';
import Footer from '../components/Footer.jsx';
import StickyBuyBar from '../components/StickyBuyBar.jsx';

/** Shows the sticky buy bar once the hero price card has scrolled away, and hides it at the final CTA. */
function useStickyBar(heroCardRef, finalRef) {
  const [state, setState] = useState({ pastHero: false, atFinal: false });

  useEffect(() => {
    const hero = heroCardRef.current;
    const final = finalRef.current;
    if (!hero || !final || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver((entries) => {
      setState((prev) => {
        const next = { ...prev };
        entries.forEach((entry) => {
          if (entry.target === hero) {
            next.pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          } else if (entry.target === final) {
            next.atFinal = entry.isIntersecting;
          }
        });
        return next;
      });
    });

    observer.observe(hero);
    observer.observe(final);
    return () => observer.disconnect();
  }, [heroCardRef, finalRef]);

  return state.pastHero && !state.atFinal;
}

export default function Home() {
  const heroCardRef = useRef(null);
  const finalRef = useRef(null);
  const showStickyBar = useStickyBar(heroCardRef, finalRef);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <div className="page">
        <main id="main">
          <Hero ref={heroCardRef} />
          <ProofSection />
          <ProcessSection />
          <FeatureSection />
          <PreviewSection />
          <PromptsSection />
          <AfterPurchaseSection />
          <OfferSection />
          <FAQSection />
          <CTASection ref={finalRef} />
        </main>
        <Footer />
      </div>
      <StickyBuyBar visible={showStickyBar} />
    </>
  );
}
