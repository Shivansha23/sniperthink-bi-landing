import Link from 'next/link';

const CTA = () => {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-[#0e9390] text-white border-t border-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get actionable insights from your business data</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="#" className="bg-white text-[#0e9390] hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-200">
              SIGN UP FOR FREE
            </Link>
            <Link href="#" className="bg-transparent hover:bg-[#17605c] text-white border border-white font-medium py-3 px-6 rounded-md transition-all duration-200">
              Refer a friend
            </Link>
          </div>
          <p className="text-white/80">15-day free trial, no credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
