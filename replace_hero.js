const fs = require('fs');
let content = fs.readFileSync('src/app/nri-services/page.tsx', 'utf8');

const newHero = `        <section className="relative bg-[#041a0f] bg-gradient-to-br from-[#020d08] via-[#052616] to-[#010a05] flex items-start justify-center px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">

          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/images/recovery_shares_bg.png')] bg-cover bg-center mix-blend-overlay"></div>
          </div>

          {/* Premium Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: \`linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)\`,
            backgroundSize: '40px 40px'
          }} />

          {/* Floating Light Specks */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-40 blur-sm animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-30 blur-md animate-pulse [animation-delay:1s] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT CONTENT */}
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
                  <span className="block">NRI Share</span>
                  <span className="block text-[#00BE5D] bg-clip-text">Recovery Services</span>
                </h1>

                <p className="text-base md:text-base text-white/90 mb-6 font-medium max-w-xl">
                  Reclaim Your Unclaimed Investments in India: <br />
                  <span className="text-white">Remotely, Securely, and Legally</span>
                </p>

                <p className="text-white/80 mb-8 text-base">
                  Indias trusted investment recovery company helping NRIs recover stuck financial investments without setting foot in India
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">150+ Cr</div>
                    <div className="text-white/80 text-sm">Shares Recovered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">1,250+</div>
                    <div className="text-white/80 text-sm">Clients Assisted</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">2,500+</div>
                    <div className="text-white/80 text-sm">Claims Settled</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-5 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ Dedicated Claim Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 25+ Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 400+ Companies Worked</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+919156701900"
                    className="bg-white text-[#00BE5D] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition flex items-center justify-center gap-2"
                  >
                    <Image src={phoneIcon} alt="Phone" width={20} height={20} />
                    +91 9156-70-1900
                  </a>
                  <a
                    href="mailto:sales@clearclaim.in"
                    className="bg-[#00BE5D] border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#008C44] hover:border-[#008C44] transition flex items-center justify-center gap-2"
                  >
                    <Image
                      src={emailIcon}
                      alt="Email"
                      width={20}
                      height={20}
                      className="invert brightness-0"
                    />
                    sales@clearclaim.in
                  </a>
                </div>
              </div>

              {/* RIGHT FORM - NRI Get Started */}
              <div id="form" className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center tracking-wide uppercase mb-6">
                  Start Your Recovery Journey
                </h3>

                <form
                  ref={heroFormRef}
                  onSubmit={submitInquiry}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hero_first_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                        First Name
                      </label>
                      <input
                        id="hero_first_name"
                        name="first_name"
                        type="text"
                        placeholder="Enter First Name"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="hero_last_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="hero_last_name"
                        name="last_name"
                        type="text"
                        placeholder="Enter Last Name"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero_email" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="hero_email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="hero_phone" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0">
                        <SearchablePhoneCode
                          id="hero_phone_code"
                          name="phone_country_code"
                          options={COUNTRY_OPTIONS}
                          className="h-full bg-white/[0.85] rounded-lg px-2 py-2.5 text-gray-800 text-[11px] font-semibold outline-none border border-transparent shadow-inner cursor-pointer"
                        />
                      </div>
                      <input
                        id="hero_phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        minLength={PHONE_MIN_LENGTH}
                        maxLength={PHONE_MAX_LENGTH}
                        pattern="[0-9]{6,15}"
                        onInput={(e) => {
                          const target = e.target;
                          target.value = target.value.replace(/\D/g, "");
                          if (phoneError) setPhoneError("");
                        }}
                        className={\`w-full bg-white/[0.92] border text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner \${phoneError ? "border-red-400 focus:border-red-400" : "border-transparent focus:border-emerald-400"}\`}
                        required
                        title={\`Enter \${PHONE_MIN_LENGTH}–\${PHONE_MAX_LENGTH} digits without country code\`}
                        aria-invalid={!!phoneError}
                        aria-describedby={phoneError ? "hero_phone_error" : undefined}
                      />
                    </div>
                    {phoneError && (
                      <p id="hero_phone_error" className="text-red-400 text-[11px] mt-1" role="alert">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div ref={countryDropdownRef}>
                    <label htmlFor="hero_country" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Current Country
                    </label>
                    <input type="hidden" name="country" value={selectedCountry} required />
                    <div className="relative">
                      <button
                        type="button"
                        id="hero_country"
                        onClick={() => setCountryDropdownOpen((o) => !o)}
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner flex items-center gap-3 text-left"
                        aria-haspopup="listbox"
                        aria-expanded={countryDropdownOpen}
                      >
                        {selectedCountry ? (
                          (() => {
                            const c = COUNTRY_OPTIONS.find((x) => x.value === selectedCountry);
                            return c ? (
                              <>
                                {c.iso2 ? (
                                  <img src={\`\${FLAG_IMG_BASE}/\${c.iso2}.png\`} alt="" className="w-6 h-4 object-cover rounded shrink-0" />
                                ) : (
                                  <span className="text-lg">{c.flag}</span>
                                )}
                                <span className="text-gray-900">{c.label}</span>
                              </>
                            ) : (
                              <span className="text-gray-900">{selectedCountry}</span>
                            );
                          })()
                        ) : (
                          <span className="text-gray-400">Select Country</span>
                        )}
                        <span className="ml-auto shrink-0 text-gray-800">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={countryDropdownOpen ? "rotate-180" : ""}>
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      {countryDropdownOpen && (
                        <ul
                          className="absolute z-20 mt-1 w-full max-h-52 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg py-1 text-sm"
                          role="listbox"
                        >
                          {COUNTRY_OPTIONS.map((c) => (
                            <li
                              key={c.value}
                              role="option"
                              aria-selected={selectedCountry === c.value}
                              onClick={() => {
                                setSelectedCountry(c.value);
                                setCountryDropdownOpen(false);
                              }}
                              className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-emerald-50 text-gray-800"
                            >
                              {c.iso2 ? (
                                <img src={\`\${FLAG_IMG_BASE}/\${c.iso2}.png\`} alt="" className="w-6 h-4 object-cover rounded shrink-0" />
                              ) : (
                                <span className="text-lg w-6 text-center">{c.flag}</span>
                              )}
                              <span>{c.label}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero_investment_type" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Type of Unclaimed Investment
                    </label>
                    <div className="relative">
                      <select
                        id="hero_investment_type"
                        name="type_of_unclaimed_investments"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 pr-10 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select type</option>
                        {(options?.type_of_unclaimed_investments ?? INVESTMENT_TYPES).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero_callback_time" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Preferred Callback Time (IST)
                    </label>
                    <div className="relative">
                      <select
                        id="hero_callback_time"
                        name="preferred_callback_time"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 pr-10 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select time slot</option>
                        {(options?.preferred_callback_time ?? CALLBACK_TIMES).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="hero_agree"
                      name="agree"
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-white/20 accent-emerald-500 cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="hero_agree"
                      className="text-sm text-white leading-tight cursor-pointer"
                    >
                      Yes, I agree with the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-[#00BE5D] hover:underline"
                      >
                        privacy policy
                      </Link>
                    </label>
                  </div>

                  <div className="pt-2 items-center justify-center flex">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="group relative overflow-hidden bg-[#00BE5D] hover:bg-[#00b569] active:bg-[#00a35e] text-white font-extrabold py-3.5 px-4 rounded-full transition-all duration-200 shadow-lg shadow-emerald-950/50 tracking-wider text-xs cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div
                        className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="relative z-10">
                        {formSubmitting ? "Processing..." : "Get Free Consulting"}
                      </span>
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                  <p>Your information is secure & confidential</p>
                </div>
              </div>
            </div>
          </div>
        </section>`;

const regex = /<section className="relative bg-gradient-to-r from-\[#1a3a1f\][\s\S]*?<\/section>/;
if (regex.test(content)) {
  content = content.replace(regex, newHero);
  fs.writeFileSync('src/app/nri-services/page.tsx', content, 'utf8');
  console.log('Replaced successfully.');
} else {
  console.log('Could not find the target section.');
}
