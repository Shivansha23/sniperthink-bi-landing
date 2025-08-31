import Hero from '@/components/sections/Hero';
import Layers from '@/components/sections/Layers';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Layers />
      <WhyUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
