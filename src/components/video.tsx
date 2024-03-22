import React from 'react';

export default function CardVideo() {
  const videos = [
    { title: 'Donor Darah', videoUrl: 'https://www.youtube.com/watch?v=8Zz4mrtZcIE' },
    { title: 'Memperingati 17 Agustus', videoUrl: 'https://www.youtube.com/watch?v=_3-PA2Zj50M' },
    { title: 'Safety First', videoUrl: 'https://www.youtube.com/watch?v=gIfIHvh8Lqw' },
  ];

  return (
    <div className='bg-white text-black'>

    <div className='flex justify-center text-3xl font-bold '>
        <h2> Kegiatan Kegiatan yang diadakan Perusahaan</h2>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video) => (
          <div key={video.title} className="card flex flex-col bg-blue-600 shadow-md rounded-lg overflow-hidden items-center" data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
            {/* Extract video ID from URL */}
            <iframe
              width="100%" // Responsive width
              height="250" // Adjust as needed
              src={`https://www.youtube.com/embed/${video.videoUrl.split('?v=')[1]}`} // Embed URL
              title={video.title}
              loading='lazy'
              rel="preload"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="card-body p-4 flex-grow">
              <h2 className="card-title text-lg font-medium text-gray-900">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
