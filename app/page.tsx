import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/geo-dome-mountain.jpg" 
            alt="Glamping dome in nature"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 z-10 bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              Experience Nature in Luxury
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Discover unique glamping experiences in breathtaking locations.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150">
              Book Your Adventure
            </button>
          </div>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-500 mb-8">Featured Glamping Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property cards will go here */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
            <Image
            src="/images/geo-dome.jpg" 
            alt="Glamping dome in nature"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Geo Dome</h3>
              <p className="text-gray-600 mb-4">Near Houstan, Texas</p>
              <p className="text-emerald-600 font-semibold">$299 / night</p>
            </div>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
            <Image
            src="/images/deck.jpg" 
            alt="Glamping dome in nature"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Geo Dome</h3>
              <p className="text-gray-600 mb-4">Near Houstan, Texas</p>
              <p className="text-emerald-600 font-semibold">$299 / night</p>
            </div>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
            <Image
            src="/images/projector.jpg" 
            alt="Glamping dome in nature"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Geo Dome</h3>
              <p className="text-gray-600 mb-4">Near Houstan, Texas</p>
              <p className="text-emerald-600 font-semibold">$299 / night</p>
            </div>
          </div>
         
          {/* Add more placeholder cards */}
        </div>
      </div>
    </div>
  );
}