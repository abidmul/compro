import Image from "next/image";
import Link from "next/link";

export default function IsiAboutUs() {
  return (
    <div className="carousel w-full h-72">

      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="/photo-1610912591861-4ea5fae8f804.webp"
          width={500}
          height={303}
          alt="gambar1"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide4" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbiUyMGNhYmluZXRzfGVufDB8fDB8fHww"
          width={500}
          height={333}
          alt="gambar2"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://media.istockphoto.com/id/1323649948/photo/shot-of-creatives-working-in-cubicles.webp?b=1&s=170667a&w=0&k=20&c=lTyBpURkXhG0ygX22g5DHyoyRRRu31LnkLdXuBZOu60="
          width={533}
          height={323}
          alt="gambar3"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide4" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNhcm91c2VsJTIwb2ZmaWNlfGVufDB8fDB8fHww"
          width={500}
          height={333}
          alt="gambar4"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div>
  );
}
