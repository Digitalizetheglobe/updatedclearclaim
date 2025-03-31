"use client";
import aboutgif from "../../../public/gif/Clear-claim-about.gif";
import Image from "next/image";
import service from "../../../public/images/services-bg-1.jpg";
import shrikant from "../../../public/images/shrikant.png";
import hardik from "../../../public/images/hardik.png";
import Meetourteam from "./meetourteam";
import linkedin from "../../../public/images/linkedin.png";
import CustomHead from '../../components/CustomHead';

export default function About() {
  return (
    <>
    <CustomHead
        pageSlug='/about'
        title='Full Stack JavaScript Developer - Alamin Shaikh'
        content='I am a full stack JavaScript developer specializing in web application development. I write technical articles about JavaScript and freelancing.'
      />
      <div className="p-10 md:p-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
            <span className="text-[#283655]"> What </span> We Do
          </h2>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-4 gap-6 max-w-5xl max-md:max-w-md mx-auto">
          <div className="max-md:order-1 max-md:text-center mt-6 max-md:mt-0">
            <p className="mt-2 text-[16px] text-gray-600 text-justify">
              In a nation where aspirations and dreams fuel the pursuit of
              financial security, we understand the importance of investing to
              fulfil those desires. All individuals try to invest to meet their
              basic needs, save a portion of their income, and invest in various
              avenues. Whether its a modest vision or a grand ambition, people
              invest their hard-earned money with the hope of realizing their
              dreams in the future.
            </p>
            <p className="mt-2 text-[16px] text-gray-600 text-justify max-md:mt-0">
              In India, countless individuals have invested in stocks, mutual
              funds, ULIPs, insurance schemes, bonds, FDs, RDs, gold, and more.
              As our nation progresses, transitioning from paper- based
              transactions to digital platforms has become the norm. Yet, not
              everyone has made this shift, and numerous investors still hold
              their investments in paper format.
            </p>
            <p className="mt-2 text-[16px] text-gray-600 text-justify max-md:mt-0">
              The Government of India has made substantial efforts to streamline
              this transition. However, considering India vast population of
              1.25 billion people, it will naturally take time to complete the
              process.
            </p>
          </div>
          <div className="md:h-[470px]">
            <Image
              src={aboutgif}
              alt="about"
              className="w-full h-full md:object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* VISSION/MISSION */}
      <div className="max-w-5xl mx-auto mb-12 py-12 max-md:px-4">
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {/* VISION Box */}
          <div className="relative rounded-[60px] overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.src})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#4b9f47] opacity-70"></div>
            {/* Content */}
            <div className="relative text-white max-sm:px-8 px-12 py-8">
              <h2 className="mt-8 text-4xl font-bold">VISION</h2>
              <div className="mt-7">
                <p className="text-md leading-relaxed">
                  To help society by offering foremost financial safety which
                  improves the quality of life &amp; contributes to economic
                  development.
                </p>
              </div>
            </div>
          </div>

          {/* MISSION Box */}
          <div className="relative rounded-[60px] overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.src})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#4b9f47] opacity-70"></div>
            {/* Content */}
            <div className="relative text-white max-sm:px-8 px-12 py-8">
              <h2 className="mt-8 text-4xl font-bold">MISSION</h2>
              <div className="mt-7">
                <p className="text-md leading-relaxed">
                  To make sure that every single invested penny of our customer
                  gets a clear claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VISSION/MISSION */}

      {/* MEET PEOPLE */}
      <div className=" bg-white p-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]"> Meet </span> The Team
          </h2>
          <p className="text-black text-sm">Clearclaim Ventures Pvt. Ltd.</p>
        </div>

        <div className="md:max-w-5xl max-w-xl mx-auto mt-14">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="max-h-72 max-md:order-1">
              <Image
                src={shrikant}
                alt="Placeholder Image"
                className="rounded-lg object-contain w-full h-[350px]"
              />
            </div>
            <div className="text-left max-md:px-4">
              <h2 className="text-black text-2xl font-bold mb-4">
                Shrikant Pandore
              </h2>

              {/* Co-Founder & CEO with LinkedIn Link */}
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-sm">Co-Founder & CEO</p>
                <a
                  href="https://www.linkedin.com/in/shrikant-pandore-a9438b19/" // Replace with the actual LinkedIn profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>

              <p className="mb-4 mt-4 text-md text-justify text-gray-600">
                Shrikant is the Chief Executive Officer (CEO) of Clearlcaim.
                With a strong vision and strategic acumen, Shrikant has been
                instrumental in steering the company towards its goals. His
                leadership style fosters innovation and encourages team
                collaboration. Shrikant’s commitment to excellence and his
                passion for the industry have been key factors in the company’s
                success. His responsibilities include setting the company’s
                overall strategic direction, making major corporate decisions,
                and managing the overall operations and resources of the
                company. Shrikant’s dedication and leadership continue to drive
                the company’s growth and success.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-24">
            <div className="text-left max-md:px-4">
              <h2 className="text-black text-2xl font-bold mb-4">
                Hardik Manek
              </h2>

              {/* Co-Founder & COO with LinkedIn Link */}
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-sm">Co-Founder & COO</p>
                <a
                  href="https://www.linkedin.com/in/hardik-manek/" // Replace with the actual LinkedIn profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>

              <p className="mb-4 mt-4 text-md text-justify text-gray-600">
                Hardik, as the Chief Operating Officer (COO) of Clearclaim,
                plays a pivotal role in the company’s success. With his
                extensive experience in research and operations, Hardik oversees
                the company’s day-to-day administrative and operational
                functions. He heads the Operations team and ensures smooth claim
                processing. His commitment towards excellence plays a very
                important role in customer success. This helps in building trust
                and transparency with clients, which in turn builds the companys
                reputation.
              </p>
            </div>

            <div className="max-h-72 max-md:order-1">
              <Image
                src={hardik}
                alt="Placeholder Image"
                className="rounded-lg object-contain w-full h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* MEET PEOPLE */}

      <Meetourteam />
    </>
  );
}
