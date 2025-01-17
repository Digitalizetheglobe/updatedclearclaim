import Testimonial from '../../app/testimonial/testimonial'

export default function WhatClientSay() {
  return (
    <>
      <div className="max-w-6xl mx-auto ">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">What </span> Client Say
          </h2>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <div
            className="relative overflow-hidden rounded-md"
            style={{
              width: '650px',
              height: '370px',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/yagxF8loMrM?si=VKRfV1CSjfXR7fCZ"
              title="YouTube video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
<Testimonial />
    </>
  );
}
