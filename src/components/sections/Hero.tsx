import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-gray-900 to-black py-16 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="heading-xl mb-6">
                Every feature built to help your business grow faster, smarter, and with zero guesswork.
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Go from data to insights in minutes
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="#" className="btn-primary w-full sm:w-auto text-center">
                  SIGN UP FOR FREE
                </Link>
                <Link href="#" className="btn-secondary w-full sm:w-auto text-center">
                  WATCH OVERVIEW
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                15-day free trial, no credit card required
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-800">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image 
                    src="public/images/products-brief-image.svg"
                    alt="Analytics Dashboard"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gray-700 rounded"></div>
              <span className="text-lg font-medium text-gray-300">Trusted by 20K+ Customers and 3M+ Users</span>
              <div className="h-1 w-12 bg-gray-700 rounded"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all">
                  <div className="h-8 w-24 bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
