import Image from "next/image";

export default function CardProduct() {
    let cards = [
      {
        title: "Blender",
        desc: "",
        price: 1500000,
        src: "https://media.istockphoto.com/id/1322052001/id/foto/blender-di-atas-dapur.jpg?s=1024x1024&w=is&k=20&c=2uQgkx1BtDN251kflrnZZAoew83MDq1URgBXRootxuk=",
        width: 936,
        height: 624
      },
      {
        title: "rice cooker",
        desc: "",
        price: 2000000,
        src: "https://media.istockphoto.com/id/1218421458/id/foto/peralatan-dapur-penanak-nasi-otomatis-abu-abu.jpg?s=612x612&w=0&k=20&c=XNSA05PxYhb2n5UhsUEAzdGijM1XxYnNmH20fEdJTH0=",
        width: 612,
        height: 408
      },
      {
        title: "Electrical Stove",
        desc: "",
        price: 10000000,
        src: "https://media.istockphoto.com/id/960909816/id/foto/oven-di-atas-latar-belakang-putih.jpg?s=1024x1024&w=is&k=20&c=SfZDRPccMv2IFAxJUJGtSNIR4nNeFvQW_WhO1ArWa3o=",
        width: 936,
        height: 608
      },
      {
        title: "Gelas",
        desc: "",
        price: 50000,
        src: "https://images.pexels.com/photos/1148450/pexels-photo-1148450.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 600,
        height: 400
      },
      {
        title: "Plate",
        desc: "",
        price: 70000,
        src: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 936,
        height: 624
      },
      {
        title: "Sendok",
        desc: "",
        price: 30000,
        src: "https://media.istockphoto.com/id/178504196/id/foto/sendok.jpg?s=1024x1024&w=is&k=20&c=BAaEDgGcxiR15W9jzLx6O-VC3rzKN_6I72m5cUtCcvY=",
        width: 936,
        height: 624
      },
      {
        title: "Garpu",
        desc: "",
        price: 20000,
        src: "https://images.pexels.com/photos/106346/pexels-photo-106346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 936,
        height:624
      },
      {
        title: "microwave",
        desc: "",
        price: 8000000,
        src: "https://media.istockphoto.com/id/182915079/id/foto/oven-microwave.jpg?s=612x612&w=0&k=20&c=cX6tzBuTO5OSf02TujfPDMnEqcAntXBMXtA3BZ0amQg=",
        width: 612,
        height: 405
      },
      {
        title: "Kulkas",
        desc: "",
        price: 300000000,
        src: "https://media.istockphoto.com/id/480528139/id/foto/buka-kulkas-dengan-produk-makanan-yang-diisi.jpg?s=1024x1024&w=is&k=20&c=wATQTsD27tL09MWAOMMh5J_YG499F-BsdLxN_BvGO1Q=",
        width: 936,
        height: 624
      },
    ];
  
    return (
      <>
        <div>
          <h1 className="text-5xl py-20 pb-5 text-center justify-center bg-[#D6DAC8] text-black font-bold">
            Our Product
          </h1>
        </div>
        <div className="flex justify-center bg-[#D6DAC8]">
        <div className="flex flex-wrap gap-2.5 justify-center border-2 solid border-[#D6DAC8] w-[74rem]">
          {cards.map((item, idx) => {
            return (
              <div
                key={idx}
                className="card card-compact w-96 bg-[#B19470] shadow-xl glass" data-aos="zoom-out-up"
              >
                <figure>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body " >
                  <h2 className="card-title text-black font-bold">{item.title}</h2>
                  <p className="text-black">Rp{item.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#EBC49F] text-black">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </>
    );
  }
  