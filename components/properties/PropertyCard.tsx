import Image from 'next/image';
import Link from 'next/link';

type PropertyCardProps = {
  id: string;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function PropertyCard({ id, name, location, price, imageUrl }: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48">
          <Image 
            src={imageUrl || '/images/placeholder.jpg'} 
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{location}</p>
          <p className="text-emerald-600 font-bold">${price} <span className="text-sm font-normal">/ night</span></p>
        </div>
      </div>
    </Link>
  );
}