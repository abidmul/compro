import Image from "next/image";

export default function CarTesti() {
  return (
    <div className="flex  py-5 max-sm:max-md:join join-vertical lg:join-horizontal bg-[#D6DAC8] justify-center">
      <Image
        src="https://images.pexels.com/photos/3772534/pexels-photo-3772534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cooking"
        width={936}
        height={624}
        className="w-96 h-72 wls:50% "
      />
      <Image
        src="https://images.pexels.com/photos/5083228/pexels-photo-5083228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="eating"
        width={936}
        height={624}
        className="w-96 h-72"
      />
      <Image
        src="https://images.pexels.com/photos/7415049/pexels-photo-7415049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="travelling"
        width={936}
        height={624}
        className="w-80 h-72"
      />
      <Image
        src="https://images.pexels.com/photos/3764485/pexels-photo-3764485.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="gabut"
        width={600}
        height={400}
        className="w-80 h-72"
      />
    </div>
  );
}
