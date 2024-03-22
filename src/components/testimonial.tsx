import Image from "next/image";

export default function Argument() {
    return (
      <div>
        <div className="absolute overflow-hidden z-0 ">
          <Image src="https://i.pinimg.com/564x/40/39/e0/4039e0f1ef08b7b965bacb4641a7af49.jpg" width={150} height={250} alt="background" className="w-screen object-cover h-screen " />
        </div>
        <div className="flex relative text-4xl font-extrabold text-center justify-center text-white z-10">
          <h2> TESTIMONI PELANGGAN</h2>
        </div>
        <div className="chat chat-start"data-aos="zoom-in">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="mastersyifu"
                src="https://images4.alphacoders.com/134/thumb-440-1344938.webp"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="chat-header">Master Syifu</div>
          <div className="chat-bubble">
            <p className="mb-3 text-left rtl:text-right text-gray-500 dark:text-gray-400">Kami sangat puas dengan layanannya. Mereka menyediakan furniture
            <br /> berkualitas tinggi dengan harga yang kompetitif. Timnya juga
            sangat <br /> profesional dan membantu dalam memilih furniture
            yang <br /> tepat untuk kebutuhan kami</p>
          </div>
        </div>
        <div className="chat chat-end"data-aos="zoom-in">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="tamakonobi"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdo0m6rtobe7ZAdYvvO_wy18xYagyHnqiytw&usqp=CAU"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="chat-header">Tamako Nobi</div>
          <div className="chat-bubble">
            <p className="mb-3 text-right rtl:text-left text-gray-500 dark:text-gray-400"> tempat yang tepat untuk membeli perabotan dapur. <br /> Mereka
            memiliki banyak pilihan perabotan dapur <br /> dengan berbagai macam
            model dan harga. <br /> Pelayanannya juga ramah dan memuaskan.</p> 
          </div>
        </div>
        <div className="chat chat-start"data-aos="zoom-in-down">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="Obiwankenobi"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
          </div>
          <div className="chat-bubble">Saya membeli perabotan dapur dari Toko KitMul. Mantap Jaya <br /> karena mereka menawarkan desain yang unik dan fungsional. <br /> Saya juga terkesan dengan pelayanannya yang ramah dan profesional. <br /> Perabotan dapur dari CV. Mantap Jaya benar-benar membantu saya <br /> dalam memasak dengan lebih mudah dan efisien.</div>
        </div>
      </div>
    );
  }
  