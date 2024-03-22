export default function Overview() {
    return (
      <>
      <div>
        
      </div>
        <div className="flex p-2 justify-center text-white bg-red-700 font-bold max-sm:text-base lg:text-3xl">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-700"id="overview"  > OUR LEGACY OF EXCELLENCE</h2>
        </div>
        <div className=" bg-red-700 text-center text-white w-full">
          <p > KitMul Company adalah Perusahan Perabotan Dapur 
              yang didirikan pada tahun 2019 di kota Bandung. <br /> 
              memiliki slogan Tingkatkan Kualitas Hidup dengan Dapur Berkualitas</p>
        </div>
        <div className="flex p-5 justify-center text-center  bg-red-700">
          <div className="stats max-sm:stats-vertical max-md:max-lg:stats-horizontal bg-amber-950">
            <div className="stat">
              <div className="stat-title">Jumlah Store</div>
              <div className="stat-value">10</div>
              <div className="stat-desc">2019 - 2024</div>
            </div>
  
            <div className="stat">
              <div className="stat-title">Jumlah Karyawan</div>
              <div className="stat-value">500</div>
              <div className="stat-desc"> 2017- 2024</div>
            </div>
  
            <div className="stat">
              <div className="stat-title">Jumlah Produksi</div>
              <div className="stat-value">700 </div>
              <div className="stat-desc"> Unit </div>
            </div>
          </div>
        </div>
  
      </>
    );
  }
  