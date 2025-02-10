import NumberTalk from "../../app/whyclearclaim/numbertalk";
import eclipse from "../../../public/images/Ellipse.png";
import Image from "next/image";

export default function scammerexposed() {
  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Warning : </span> Scammers Exposed
          </h2>
        </div>
        <div className="mt-6 lg:p-10 p-6 rounded-md">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <h2 className="md:text-3xl text-xl font-semibold md:!leading-[40px] text-[#000]">
                Beware of Deceptive Claim Services
              </h2>

              <button
                type="button"
                className="text-[#00BE5D] border-2 bg-transparent border-[#00BE5D] tracking-wide rounded-md font-semibold text-md px-4 py-3 w-64 !mt-6"
              >
                Don’t fall for scammers!
              </button>

              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3 text-md text-gray-600">
                  <Image src={eclipse} alt="clearclaim" 
                  className="w-[17]"
                  />
                  Some may charge 15% to 30% commission for claims services.
                </li>
                <li className="flex items-center gap-3 text-md text-gray-600">
                <Image src={eclipse} alt="clearclaim"
                className="w-[17]"
                />

                  Trust only verified professionals and genuine claim services.
                </li>
              </ul>
            </div>
            <div className="w-full overflow-hidden rounded-md row-2 ">
              <div></div>
              <div className="flex justify-center w-full">
  <iframe
    src="https://www.youtube.com/embed/X3Sme--jbkk"
    title="YouTube video"
    className="rounded-md shadow-lg"
    style={{ width: "650px", height: "370px" }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


  <h2 className="md:text-xl text-xl font-semibold md:!leading-[40px] text-[#000] mt-12">
    Stay Safe: Learn how to identify and avoid scams.
  </h2>
</div>

          </div>
        </div>
      </div>

      <NumberTalk />
    </>
  );
}
