import Image from "next/image";
import footer from "../../public/images/footer.png";
import logo from "../../public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className="h-[4px] bg-[#00BE5D] font-bold"
        style={{ fontWeight: "bold" }}
      ></div>

      <footer
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footer.src})` }}
      >
        <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Logo and Tagline */}
            <div>
              <div className="flex items-start justify-start">
                <Link href="/">
                  <Image src={logo} alt="footer logo" className="w-[290px]" />
                </Link>
              </div>
              <p className="mt-4 max-w-md text-left leading-relaxed text-black sm:max-w-xs sm:text-center">
                We can help you bring back your old shares and dividends easily
              </p>
            </div>

            {/* Menus Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              {/* Quick Links */}
              <div className="text-left sm:text-left">
                <p className="text-xl font-bold text-gray-900">Quick Links</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="/iepfclaim"
                    >
                      IEPF Claim
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="/recovery-of-shares"
                    >
                      Recovery of Shares
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="/blog"
                    >
                      Blogs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div className="text-left sm:text-left">
                <p className="text-xl font-bold text-gray-900">Follow Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="https://www.instagram.com/clear_claim/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="https://www.youtube.com/@clearclaim?themeRefresh=1"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 text-[16px] transition hover:text-gray-700/75"
                      href="https://www.linkedin.com/company/clear-claim/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="text-left sm:text-left">
                <p className="text-xl font-bold text-gray-900">Contact Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="tel:+919156701900" // Add the phone number here with the "tel:" protocol
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="flex-1 text-[16px] text-gray-700">
                        +91 9156701900
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="tel:+919970651900" // Add the second phone number with the "tel:" protocol
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="flex-1 text-[16px] text-gray-700">
                        +91 9970651900
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="mailto:sales@clearclaim.in" // Add the email address with the "mailto:" protocol
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="flex-1 text-[15px] text-gray-700">
                        sales@clearclaim.in
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <a
                      href="https://www.google.com/maps/search/?q=Office+No+C-201,+2nd+Floor,+Vantage+Tower,+Bramha+Corp,+Opposite+to+Bavdhan+Police+Chowky,+NDA+Pashan+Road,+Bavdhan,+Pune+-+411021"
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Security measure
                      className="flex-1 not-italic text-gray-700 text-[15px]"
                    >
                      Office No C-201, 2nd Floor, Vantage Tower, Bramha Corp,
                      Opposite to Bavdhan Police Chowky, NDA Pashan Road,
                      Bavdhan, Pune - 411021
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t bg-[#00BE5D] border-gray-100 pt-4 pb-4">
          <div className="text-center">
            <p className="text-md text-white">
              <a
                className="inline-block text-white transition hover:text-teal-600/75"
                href="#"
              >
                Copyright © 2024 Clearclaim |{" "}
              </a>
              <a
                className="inline-block text-white transition hover:text-teal-600/75 ml-2"
                href="#"
              >
                Crafted By Digitalize The Globe
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
