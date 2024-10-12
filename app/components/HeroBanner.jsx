import Image from 'next/image'

export default function HeroBanner({ 
  imageUrl, 
  title = "Bienvenue sur notre site", 
  imageAlt = "Hero background" 
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full animate-zoom">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>
      </div>
    </div>
  )
}