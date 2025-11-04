import NumberTalk from "../../app/whyclearclaim/numbertalk";
// import eclipse from "../../../public/images/Ellipse.png";
// import Image from "next/image";

export default function scammerexposed() {
  return (
    <>
     <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Physical shareholders - </span> Dont miss this video
          </h2>
        </div>
        <div className="flex justify-center">
          <div
            className="relative overflow-hidden rounded-md"
            style={{
              width: '650px',
              height: '370px',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/wNqDCTfOwBI?si=z6DP9b3TH9rHnvZ8"
              title="YouTube video"
              className="absolute top-0 left-0 w-full h-96"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* <h2 className="md:text-xl text-xl font-semibold md:!leading-[40px] text-[#000] mt-12">
                Stay Safe: Learn how to identify and avoid scams.
              </h2> */}
        </div>
      </div>


      <NumberTalk />
    </>
  );
}
