import Image from "next/image";
import footer from "../../public/images/footer.png";
import logo from "../../public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="h-[4px] bg-[#00BE5D] font-bold"></div>

      <footer
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footer.src})` }}
      >
        <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Logo and Tagline */}
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="footer logo"
                    className="w-[200px] sm:w-[290px]"
                  />
                </Link>
              </div>
              <p className="mt-4 max-w-xs mx-auto sm:mx-0 text-center sm:text-left text-black leading-relaxed">
                We can help you bring back your old shares and dividends easily
              </p>
            </div>

            {/* Menus Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 text-center sm:text-left">
              {/* Quick Links */}
              <div>
                <p className="text-xl font-bold text-gray-900 mt-5">Quick Links</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="/iepfclaim"
                    >
                      IEPF Claim
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="/recovery-of-shares"
                    >
                      Recovery of Shares
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="/blog"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <p className="text-xl font-bold text-gray-900 mt-5">Follow Us</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="https://www.instagram.com/clear_claim/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="https://www.youtube.com/@clearclaim"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] hover:text-gray-700/75"
                      href="https://www.linkedin.com/company/clear-claim/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <p className="text-xl font-bold text-gray-900 mt-5">Contact Us</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="tel:+919156701900" className="text-gray-700 text-[16px]">
                      +91 9156701900
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919970651900" className="text-gray-700 text-[16px]">
                      +91 9970651900
                    </a>
                  </li>
                  <li>
                    <a href="mailto:sales@clearclaim.in" className="text-gray-700 text-[16px]">
                      sales@clearclaim.in
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?q=Office+No+C-201,+2nd+Floor,+Vantage+Tower,+Bramha+Corp,+Opposite+to+Bavdhan+Police+Chowky,+NDA+Pashan+Road,+Bavdhan,+Pune+-+411021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-[16px]"
                    >
                      Office No C-201, 2nd Floor, Vantage Tower, Bavdhan, Pune - 411021
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t bg-[#00BE5D] border-gray-100 py-4">
          <div className="text-center">
            <p className="text-md text-white">
              Copyright © 2024 Clearclaim |{" "}
              <Link
                className="inline-block text-white hover:text-gray-800 ml-2"
                href="https://digitalizetheglobe.com/"
              >
                Crafted By Digitalize The Globe
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
