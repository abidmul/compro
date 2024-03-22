import Image from "next/image";

export default function Cteam() {
    return (
      <div className="bg-white py-24 max-sm:max-md: py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 max-lg:px-8 xl:grid-cols-3" >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <Image className="h-16 w-16 rounded-full"data-aos="flip-left" src="https://web.pln.co.id/statics/uploads/2021/01/2.-Wadirut_Darmawan-Prasodjo.jpg" width={150} height={150} alt="presidentdirektur"/>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Wadirut Darmawan</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">President Direktur</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image className="h-16 w-16 rounded-full" data-aos="flip-left" src="https://cdn1.katadata.co.id/media/images/thumb/2020/11/23/ira-noviarti_Unilever-2020_11_23-19_24_11_03a51a5ce849a0fed4ea9d86ab0a4ae4_960x640_thumb.jpg"width={150} height={100} alt="direkturmarketing"/>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Direktur Marketing</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image className="h-16 w-16 rounded-full" data-aos="flip-left" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHtNa_hu8tLwviWJ5NOSvW-I5xOKLKlwxpg&usqp=CAU" width={185} height={275} alt="direkturproduksi"/>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Ainul Yaqin</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Direktur Produksi</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image className="h-16 w-16 rounded-full" data-aos="flip-left" src="https://www.peruri.co.id/images/tentang_kami/direksi/Dwina%20Septiani%20Wijaya-20210926135414.jpg" width={150} height={108} alt="direktur keuangan"/>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Nurdiana Darus</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Direktu Keuangan</p>
              </div>
            </div>
          </li>
    
          {/* <!-- More people... --> */}
        </ul>
      </div>
    </div>
    
    );
  }
  