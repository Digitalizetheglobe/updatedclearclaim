import Image from "next/image";
import aniket from "../../../public/team/aniket.png";
import dhnyanesh from "../../../public/team/dhnyesh.png";
import dhanshree from "../../../public/team/dhanshree.png";
import vipul from "../../../public/team/vipul.png";
import vishupriya from "../../../public/team/vishupriya.png";
import shanjivani from "../../../public/team/shanjivani.png";
import piyush from "../../../public/team/iyush.png";
import isha from "../../../public/team/sha.png";
import prathmesh from "../../../public/team/rathmesh.png";
import ashwini from "../../../public/team/shwini.png";
import kishor from "../../../public/team/kishor.png";
import swapil from "../../../public/team/wapnil.png";
// import darshan from "../../../public/team/arshan.png";
import suyash from "../../../public/team/suyash.png";
import driraj from "../../../public/team/dhriraj.png";
import harshada from "../../../public/team/harshada.png";
import ganesh from "../../../public/team/ganesh.png";
import chandra from "../../../public/team/chandkant.png";
import gallery from "../../../public/images/20240902_151326-scaled.jpg";
import gallery1 from "../../../public/images/20240902_151419-scaled.jpg";
import gallery2 from "../../../public/images/20240902_151712-scaled.jpg";
import gallery3 from "../../../public/images/20240902_151851-scaled.jpg";
import gallery4 from "../../../public/images/20240902_151910-scaled.jpg";
import gallery5 from "../../../public/images/20240902_151919-scaled.jpg";
import gallery7 from "../../../public/images/20240902_152014-scaled.jpg";
import gallery8 from "../../../public/images/20240902_152059-scaled.jpg";
import amol from "../../../public/team/Amol Rahatkar.jpg";
import hrishikesh from "../../../public/team/Hrishikesh Albhar.png";
import rajshree from "../../../public/team/Rajashree Laygude.png";
import vaibhav from "../../../public/team/vaibhav-kadam.png";
import sarika from "../../../public/team/Sarika Kole.png";
import teammember from "../../../public/team/3.png";
import dipali from "../../../public/team/Dipali Tayade.png";
import poojapawar from "../../../public/team/Pooja Pawar.png";

export default function Meetourteam() {
  const images = [
    gallery,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery7,
    gallery8,
  ];

  return (
    <>
      <div className="">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
              <span className="text-[#283655]">Our </span> Core Team
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
          <div>
            <Image
              src={dhnyanesh}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Dnyaneshware Sathe</h4>
            </div>
          </div>
          <div>
            <Image
              src={suyash}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Suyash Kulkarni</h4>
            </div>
          </div>
          <div>
            <Image
              src={vishupriya}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Vishnupriya Amilineni</h4>
            </div>
          </div>
          <div>
            <Image
              src={shanjivani}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Shivanjali Kalbhor</h4>
            </div>
          </div>

          {/* <div>
            <Image
              src={rashi}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Rashi Jain</h4>
            </div>
          </div> */}

          <div>
            <Image
              src={teammember}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Darshan Kondhare</h4>
            </div>
          </div>

          <div>
            <Image
              src={driraj}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Dhiraj Patil</h4>
            </div>
          </div>
          <div>
            <Image
              src={isha}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Isha Ghotwadekar</h4>
            </div>
          </div>
          <div>
            <Image
              src={harshada}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Harshada Vatane</h4>
            </div>
          </div>

          <div>
            <Image
              src={poojapawar}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Pooja Pawar</h4>
            </div>
          </div>

          <div>
            <Image
              src={dipali}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Dipali Tayade</h4>
            </div>
          </div>
          <div>
            <Image
              src={amol}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Amol Rahatkar</h4>
            </div>
          </div>

          <div>
            <Image
              src={sarika}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Sarika Kole</h4>
            </div>
          </div>

          <div>
            <Image
              src={rajshree}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Rajashree Laygude</h4>
            </div>
          </div>

          <div>
            <Image
              src={hrishikesh}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Hrishikesh Albhar</h4>
            </div>
          </div>

          <div>
            <Image
              src={vaibhav}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Viabhav Kadam</h4>
            </div>
          </div>

         

        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
              <span className="text-[#283655]"> Advisory ​</span> Team
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
          <div>
            <Image
              src={ashwini}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Ashwini Adsare</h4>
              <p className="text-gray-600 text-sm">
                {" "}
                Software Architect & Technology Consultant
              </p>
            </div>
          </div>
          <div>
            <Image
              src={ganesh}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Ganesh Deshmukh t</h4>
              <p className="text-gray-600 text-sm">
                {" "}
                Senior Financial Advisor and Insurance Exper
              </p>
            </div>
          </div>
          <div>
            <Image
              src={swapil}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md"> Swapnil Dhone</h4>
              <p className="text-gray-600 text-sm"> CA and Company Secretory</p>
            </div>
          </div>
          <div>
            <Image
              src={dhanshree}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Adv. Dhanashree Borawke</h4>
              <p className="text-gray-600 text-sm">
                {" "}
                Senior Lawyer, Family/Corporate
              </p>
            </div>
          </div>
          <div>
            <Image
              src={chandra}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Chandrashekhar Adsare</h4>
              <p className="text-gray-600 text-sm"> Ex. Gov of Maharashtra</p>
            </div>
          </div>
          <div>
            <Image
              src={piyush}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Piyush Dhiamte</h4>
              <p className="text-gray-600 text-sm"> Technology Architect</p>
            </div>
          </div>
          <div>
            <Image
              src={prathmesh}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md"> Prathamesh Gumade</h4>
              <p className="text-gray-600 text-sm"> Cyber Security Expert</p>
            </div>
          </div>
          <div>
            <Image
              src={aniket}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Aniket Arkadi</h4>
              <p className="text-gray-600 text-sm"> HNI Investor</p>
            </div>
          </div>
          <div>
            <Image
              src={kishor}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Kishor Aradwad</h4>
              <p className="text-gray-600 text-sm">
                {" "}
                Senior Manager, Bank of Maharashtra
              </p>
            </div>
          </div>
          <div>
            <Image
              src={vipul}
              alt="dhyanesh"
              className="w-40 h-40 rounded-full inline-block"
            />
            <div className="py-4">
              <h4 className="text-black text-md">Vipin Khandelwal</h4>
              <p className="text-gray-600 text-sm"> Renowned Wealth Advisor</p>
            </div>
          </div>
        </div>

        {/* gallery */}
        <div className="mt-8 mb-24 max-w-6xl mx-auto max-md:px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded shadow-lg">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        {/* gallery */}
      </div>
    </>
  );
}
