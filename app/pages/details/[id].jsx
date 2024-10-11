import { useRouter } from 'next/router';
import image from '../../public/weare.png'; 
import Image from 'next/image';
import Link from 'next/link';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const tourDetails = {
    1: {
      title: 'Nourissez vous bien !',
      date: 'Samedi 12 mai 2024',
      content: 'Détails sur cet événement...',
      image: image,
    },
    2: {
      title: 'Un autre événement',
      date: 'Dimanche 13 mai 2024',
      content: 'Détails sur cet autre événement...',
      image: image,
    },
    
  };

  const tour = tourDetails[id];

  if (!tour) return <p>Chargement...</p>; 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{tour.title}</h1>
      <p className="text-md text-gray-600">{tour.date}</p>
      <div className="relative h-64 w-full">
        <Image src={tour.image} alt={tour.title} layout="fill" objectFit="cover" />
      </div>
      <p className="mt-4">{tour.content}</p>
      <Link href="/news" passHref>
        <a className="text-blue-500">Retour à l'actualité</a>
      </Link>
    </div>
  );
};

export default DetailPage;
