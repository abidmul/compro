export default function Timeline() {
    return (
      <>
        <div className=" flex p-2 text-3xl justify-center bg-teal-700">
          <h1 data-aos="fade-zoom-in"
       data-aos-easing="ease-in-back"
       data-aos-delay="300"
       data-aos-offset="0">Sejarah Perusahaan</h1>
        </div>
        <div className="flex bg-teal-700">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start md:text-end mb-10"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-black">KitchenAid</div>
                Didirikan pada tahun 2019 di Bandung oleh Muhammad Abid Mulawa.{" "}
                <br /> KitchenAid awalnya dikenal dengan mixer stand-nya yang
                ikonik. <br /> Perusahaan ini kemudian berkembang menjadi produsen{" "}
                <br /> berbagai peralatan dapur, seperti blender, pemanggang roti,
                dan lainnya.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-end mb-10"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">Cuisinart</div>
                pada tahun 2021 Kitman memperkenalkan Produk Baru yaitu Cuisinart
                dikenal karena memperkenalkan food processor pertama di indonesia,
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-start md:text-end mb-10"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <time className="font-mono italic">2024</time>
                <div className="text-lg font-black">Ekspansi Keluar Kota</div>
                KitMul berekspansi keluar Bandung dan kota pertama yaitu DKi
                Jakarta <br /> dan Juga tahun pertama untuk website Perusahaan{" "}
                <br /> nya yang akan diluncurkan bulan juni mendatang.
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
  