"use client";

import { useState, useEffect } from "react";
// import eclipse from "../../../public/images/Ellipse.png";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import google from '../../../public/images/google.webp'

export default function LandingTestimonial() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    // Capture and store UTM parameters for lead tracking
    const captureUTMParameters = () => {
      if (typeof window === "undefined") return;

      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: Record<string, string> = {};

      // UTM parameters to capture
      const utmFields = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ];

      utmFields.forEach((field) => {
        const value = urlParams.get(field);
        if (value) {
          utmParams[field] = value;
          // Store in sessionStorage to persist across page navigation
          sessionStorage.setItem(field, value);
        } else {
          // If not in URL, check sessionStorage for previously stored values
          const storedValue = sessionStorage.getItem(field);
          if (storedValue) {
            utmParams[field] = storedValue;
          }
        }
      });

      // Store all UTM params as a JSON object for easy access
      if (Object.keys(utmParams).length > 0) {
        sessionStorage.setItem("utm_params", JSON.stringify(utmParams));

        // Also set them as data attributes on the form container for Kylas to pick up
        const formContainer = document.getElementById("kl__form-container-testimonial");
        if (formContainer) {
          Object.keys(utmParams).forEach((key) => {
            formContainer.setAttribute(`data-${key}`, utmParams[key]);
          });
        }
      }

      // If UTM params exist in URL, preserve them in the URL for Kylas to read
      if (Object.keys(utmParams).length > 0 && window.location.search) {
        // Kylas will automatically read UTM parameters from the URL
        console.log("UTM Parameters captured:", utmParams);
      }
    };

    // Add CSS to hide email field and style form (more targeted approach)
    const addEmailHideStyles = () => {
      const styleId = "hide-kylas-email-field-testimonial";
      if (document.getElementById(styleId)) return;

      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        /* Hide only email input fields specifically for testimonial */
        #kl__form-container-testimonial input[type="email"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          opacity: 0 !important;
          position: absolute !important;
          left: -9999px !important;
        }
        
        /* Hide labels that are directly associated with email inputs */
        #kl__form-container-testimonial label[for*="email" i],
        #kl__form-container-testimonial label:has(input[type="email"]) {
          display: none !important;
        }
        
        /* Hide divs that contain ONLY email inputs (but be careful not to hide the whole form) */
        #kl__form-container-testimonial > * > div:has(> input[type="email"]:only-child),
        #kl__form-container-testimonial > * > div:has(> label:has(input[type="email"]):only-child) {
          display: none !important;
        }
        
        /* Make form background white */
        #kl__form-container-testimonial,
        #kl__form-container-testimonial form,
        #kl__form-container-testimonial > div,
        #kl__form-container-testimonial .form-wrapper {
          background-color: #ffffff !important;
          padding: 16px !important;
          border-radius: 8px !important;
        }
        
        /* Ensure text is dark/black on white background */
        #kl__form-container-testimonial label,
        #kl__form-container-testimonial .label,
        #kl__form-container-testimonial .form-label,
        #kl__form-container-testimonial .field-label {
          color: #1f2937 !important;
        }
        
        /* Style input placeholders - black color */
        #kl__form-container-testimonial input::placeholder,
        #kl__form-container-testimonial textarea::placeholder {
          color: #000000 !important;
          opacity: 0.7 !important;
        }
        
        /* Make required field indicators black */
        #kl__form-container-testimonial .required,
        #kl__form-container-testimonial [required]::before,
        #kl__form-container-testimonial label .required,
        #kl__form-container-testimonial .asterisk,
        #kl__form-container-testimonial label span[style*="color"] {
          color: #000000 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add CSS styles
    addEmailHideStyles();

    // Capture UTM parameters
    captureUTMParameters();

    // Load Kylas CRM form script dynamically
    // Check if script is already loaded (might be loaded by another component)
    const existingScript = document.querySelector(
      'script[form-id="2a09aa6f-0148-4eb3-99eb-74496865764d"]'
    );
    
    let script: HTMLScriptElement;
    if (!existingScript) {
      script = document.createElement("script");
      script.src = "https://assets.kylas.io/lead-capture-forms/lcf.min.js";
      script.setAttribute("form-id", "2a09aa6f-0148-4eb3-99eb-74496865764d");
      script.async = true;
      document.body.appendChild(script);
    } else {
      script = existingScript as HTMLScriptElement;
    }

    // Function to initialize form in the testimonial container by cloning from the first form
    const initializeForm = () => {
      const formContainer = document.getElementById("kl__form-container-testimonial");
      if (!formContainer) return;

      // Check if form is already rendered
      if (formContainer.querySelector('form')) {
        return; // Form already rendered
      }

      // Wait for the default form to render, then clone it
      const cloneForm = () => {
        const defaultContainer = document.getElementById('kl__form-container');
        if (defaultContainer && defaultContainer.querySelector('form')) {
          const originalForm = defaultContainer.querySelector('form');
          if (originalForm) {
            // Clone the entire form structure
            const clonedForm = originalForm.cloneNode(true) as HTMLElement;
            
            // Update form IDs to make them unique (but keep names original for Kylas)
            const allInputs = clonedForm.querySelectorAll('input, select, textarea');
            allInputs.forEach((input, index) => {
              const inputElement = input as HTMLElement;
              if (inputElement.id) {
                inputElement.id = `${inputElement.id}_testimonial_${index}`;
              }
              // Keep original names so Kylas can process the form correctly
            });

            // Update label 'for' attributes
            const allLabels = clonedForm.querySelectorAll('label');
            allLabels.forEach((label, index) => {
              const forAttr = label.getAttribute('for');
              if (forAttr) {
                label.setAttribute('for', `${forAttr}_testimonial_${index}`);
              }
            });

            // Clear container and add cloned form
            formContainer.innerHTML = '';
            formContainer.appendChild(clonedForm);
            
            // Make form background white
            const makeBackgroundWhite = () => {
              // Set background to white
              formContainer.style.backgroundColor = '#ffffff';
              formContainer.style.padding = '16px';
              formContainer.style.borderRadius = '8px';
              
              // Ensure form and wrapper also have white background
              const form = formContainer.querySelector('form');
              if (form) {
                (form as HTMLElement).style.backgroundColor = '#ffffff';
              }
              
              // Make labels dark/black
              const labels = formContainer.querySelectorAll('label');
              labels.forEach((label) => {
                (label as HTMLElement).style.color = '#1f2937';
              });
            };
            
            // Apply styles immediately and after a short delay
            makeBackgroundWhite();
            setTimeout(makeBackgroundWhite, 100);
            
            // Kylas's global handlers should work with the cloned form
            // The form will submit through Kylas's own submission handler
            
            hideEmailField();
            return true;
          }
        }
        return false;
      };

      // Try to clone immediately, if form is already rendered
      if (!cloneForm()) {
        // If form not ready, check periodically
        let attempts = 0;
        const maxAttempts = 20; // Try for 10 seconds (20 * 500ms)
        const checkInterval = setInterval(() => {
          attempts++;
          if (cloneForm() || attempts >= maxAttempts) {
            clearInterval(checkInterval);
          }
        }, 500);
      }
    };

    // Function to hide email field from Kylas form (more targeted)
    const hideEmailField = () => {
      const formContainer = document.getElementById("kl__form-container-testimonial");
      if (!formContainer) return;

      // Find email inputs and hide only them, not entire containers
      const emailInputs = formContainer.querySelectorAll('input[type="email"]');
      emailInputs.forEach((input) => {
        const inputElement = input as HTMLElement;
        // Hide the input itself
        inputElement.style.display = 'none';
        inputElement.style.visibility = 'hidden';
        inputElement.style.height = '0';
        inputElement.style.margin = '0';
        inputElement.style.padding = '0';
        inputElement.style.position = 'absolute';
        inputElement.style.left = '-9999px';
        
        // Hide associated label if it exists
        const inputName = (inputElement as HTMLInputElement).name;
        const label = formContainer.querySelector(`label[for="${inputElement.id}"], label[for="${inputName}"]`);
        if (label) {
          (label as HTMLElement).style.display = 'none';
        }
        
        // Only hide parent if it contains ONLY the email field
        const parent = inputElement.parentElement;
        if (parent && parent !== formContainer) {
          const siblings = Array.from(parent.children).filter(child => child !== inputElement && child !== label);
          // If parent only has the email input (and maybe its label), hide the parent
          if (siblings.length === 0) {
            (parent as HTMLElement).style.display = 'none';
          }
        }
      });

      // Find by name attribute containing "email" (only if it's an email input)
      const emailFieldsByName = formContainer.querySelectorAll('[name*="email" i], [name*="Email"]');
      emailFieldsByName.forEach((field) => {
        const fieldElement = field as HTMLElement;
        if (fieldElement.tagName === 'INPUT' && (fieldElement as HTMLInputElement).type === 'email') {
          fieldElement.style.display = 'none';
          fieldElement.style.visibility = 'hidden';
        }
      });
    };

    // After script loads, ensure UTM params are available and hide email field
    const handleScriptLoad = () => {
      captureUTMParameters();
      
      // Wait a bit for the first form to render, then clone it
      setTimeout(() => {
        initializeForm();
        hideEmailField();
      }, 2000);

      // Also use MutationObserver to watch for form changes
      const formContainer = document.getElementById("kl__form-container-testimonial");
      if (formContainer) {
        const observer = new MutationObserver(() => {
          hideEmailField();
        });

        observer.observe(formContainer, {
          childList: true,
          subtree: true,
          attributes: false,
        });

        // Also check periodically in case form loads later
        const checkInterval = setInterval(() => {
          hideEmailField();
          // Stop checking after 15 seconds
          setTimeout(() => clearInterval(checkInterval), 15000);
        }, 1000);
      }
    };

    // Also watch the default container to know when form is ready
    const defaultContainer = document.getElementById('kl__form-container');
    if (defaultContainer) {
      const defaultObserver = new MutationObserver(() => {
        // When default form appears, initialize the testimonial form
        if (defaultContainer.querySelector('form')) {
          setTimeout(() => {
            initializeForm();
          }, 500);
        }
      });

      defaultObserver.observe(defaultContainer, {
        childList: true,
        subtree: true,
      });
    }

    // Check if script is already loaded
    if (script.onload === null) {
      // Script already loaded
      handleScriptLoad();
    } else {
      script.onload = handleScriptLoad;
    }

    // Cleanup function
    return () => {
      // Optionally remove script on unmount
      const scriptToRemove = document.querySelector(
        'script[form-id="2a09aa6f-0148-4eb3-99eb-74496865764d"]'
      );
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  // Separate effect to continuously monitor and hide email field (more targeted)
  useEffect(() => {
    const hideEmailField = () => {
      const formContainer = document.getElementById("kl__form-container-testimonial");
      if (!formContainer) return;

      // Find and hide only email inputs, not entire containers
      const emailInputs = formContainer.querySelectorAll('input[type="email"]');
      emailInputs.forEach((input) => {
        const inputElement = input as HTMLElement;
        // Hide the input itself
        inputElement.style.display = 'none';
        inputElement.style.visibility = 'hidden';
        inputElement.style.height = '0';
        inputElement.style.margin = '0';
        inputElement.style.padding = '0';
        inputElement.style.position = 'absolute';
        inputElement.style.left = '-9999px';
        
        // Hide associated label
        const inputName = (inputElement as HTMLInputElement).name;
        const label = formContainer.querySelector(`label[for="${inputElement.id}"], label[for="${inputName}"]`);
        if (label) {
          (label as HTMLElement).style.display = 'none';
        }
        
        // Only hide parent if it contains ONLY the email field
        const parent = inputElement.parentElement;
        if (parent && parent !== formContainer) {
          const siblings = Array.from(parent.children).filter(child => child !== inputElement && child !== label);
          if (siblings.length === 0) {
            (parent as HTMLElement).style.display = 'none';
          }
        }
      });
    };

    // Wait a bit before initial hide attempt to let form load
    const initialTimeout = setTimeout(() => {
      hideEmailField();
    }, 500);

    // Set up MutationObserver to watch for form changes
    const formContainer = document.getElementById("kl__form-container-testimonial");
    if (formContainer) {
      const observer = new MutationObserver(() => {
        // Debounce to avoid too many calls
        setTimeout(() => {
          hideEmailField();
        }, 100);
      });

      observer.observe(formContainer, {
        childList: true,
        subtree: true,
      });

      // Check periodically but less frequently
      const interval = setInterval(() => {
        hideEmailField();
      }, 2000);

      return () => {
        clearTimeout(initialTimeout);
        observer.disconnect();
        clearInterval(interval);
      };
    } else {
      return () => {
        clearTimeout(initialTimeout);
      };
    }
  }, []);



  const reviews = [
    {
      name: "Vinayak Gaitonde",
      date: "22 January 2025",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges. I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Jayant V Patil",
      date: "a month ago",
      stars: 5,
      content:
        "Clear claim transferred my physical shares within given time, very professional, very prompt, overall a hassle-free experience, i highly recommend Clear claim for you share transfer and other related works.. thank u",
    },
    {
      name: "Rajagopalan V",
      date: "6 January 2025",
      stars: 5,
      content:
        "Mr. Srikant is a good person and guides us in a proper way with his expertise in his business areas. You may negotiate and go with them for your requirements.",
    },
    {
      name: "Piyush Dhimate",
      date: "4 January 2025",
      stars: 5,
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!",
    },
    {
      name: "INDRANEEL TAMBE",
      date: "3 January 2025",
      stars: 4,
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidance and thanks for sorting and clearing my case ... And thanks for helping us...",
    },
    {
      name: "RAKESH G PATIL",
      date: "10 months ago",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "Chetan",
      date: "10 months ago",
      stars: 5,
      content:
        "I recently got to know about Clearclaim and till the time I wasn’t aware of that we can claim our old unclaimed shares. I tried to reach them and explained my situation and asked for help. The process was smooth and transparent, with clear instructions provided at each step. The customer support team was very responsive, answering all my questions promptly. They also made sure to explain any paperwork and helped me complete it correctly. Although the process took a few weeks, they kept me updated throughout, and I received my shares without any issues. Their fees were reasonable, and I appreciated the upfront disclosure of all charges. I would definitely recommend their services to anyone looking to claim unclaimed shares.",
    },
    {
      name: "shahaji dudhabhate",
      date: "10 months ago",
      stars: 5,
      content:
        "Due to change in name and signature, my father-in-law's Reliance Company shares were stuck in the papers for many years, despite many attempts, they were repeatedly rejected. When I contacted the company Clear Claim on Facebook, they made my work very easy and at a low cost, their working method is very transparent. They are trustworthy people, if you have any work related to old shares, close your eyes and get it done from them. Thank you team🙏🙏🙏",
    },
    {
      name: "Mukund Shah",
      date: "10 months ago",
      stars: 5,
      content:
        "I had a great experience working with Clearclaim. They helped me recover my parents SBI Limited unclaimed shares and dividends from IEPF and convert them to DEMAT. Their team was very responsive and kept me updated throughout the process. I would definitely recommend their services to anyone looking to recover their shares.",
    },
  ];


  const renderStars = (count: number) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < count ? "⭐" : "☆"}</span>
        ))}
      </div>
    );
  };

  const toggleReadMore = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the boolean value
    }));
  };

  const loadMore = () => {
    setVisibleCount(reviews.length);
  };


  return (
    <>


<div className="max-w-6xl mx-auto px-4 md:px-0">
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
      



      <section className="bg-gray-100 py-12 px-6 mt-10 mb-5">
        <div className="text-center mb-8">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
            <span className="text-[#283655]"> Google Reviews That </span> Speak for Themselves
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Show limited testimonials with Load More */}
          <div className="sm:hidden flex flex-col gap-6 px-6">
            {reviews.slice(0, visibleCount).map((review, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 shadow-sm flex flex-col hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
                role="article"
                aria-label={`Review by ${review.name}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <Image src={google} alt="Google" width={48} height={24} />
                </div>
                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                {renderStars(review.stars)}
                <p className="text-gray-700 text-sm flex-1">
                  {expandedReviews[index]
                    ? review.content
                    : `${review.content.substring(0, 100)}...`}
                </p>
                <button
                  className="mt-2 text-green-500 text-sm font-semibold hover:underline self-start"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedReviews[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
            {visibleCount < reviews.length && (
              <button
                onClick={loadMore}
                className="mt-4 px-6 py-3 bg-[#00BE5D] text-white rounded-md font-semibold hover:bg-[#00a050] transition-colors duration-300 self-center"
              >
                Load More
              </button>
            )}
          </div>
          {/* Desktop: Show all reviews in scrollable container */}
          <div className="hidden sm:block h-[500px] overflow-y-scroll rounded-lg bg-gray-200 shadow-md p-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-4 shadow-sm flex flex-col hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
                  role="article"
                  aria-label={`Review by ${review.name}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <Image src={google} alt="Google" width={48} height={24} />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                  {renderStars(review.stars)}
                  <p className="text-gray-700 text-sm flex-1">
                    {expandedReviews[index]
                      ? review.content
                      : `${review.content.substring(0, 100)}...`}
                  </p>
                  <button
                    className="mt-2 text-green-500 text-sm font-semibold hover:underline self-start"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedReviews[index] ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scammers Exposed */}
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


      {/* How it works */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">How It</span> Works
          </h2>
        </div>
        <div className="lg:p-8 p-6 rounded-md">
          <div className="grid md:grid-cols-2 items-center gap-16">
            {/* Image Section */}
            <div className="relative w-full flex flex-col items-center md:items-start text-center md:text-left">
              <Image src={aiimg} alt="Logo" className="w-[420px]" priority />
              <p className="text-2xl text-[#00BE5D] font-semibold mt-4">
                AI-Powered Smart Claim Framework
              </p>
            </div>

            {/* Content Section */}
            <div className="text-xl text-left md:text-left">
              <div className="grid sm:grid-cols-2 gap-4 mx-auto w-full">
                {[
                  "Find your real worth of shares",
                  "Know your exact claim type of shares",
                  "Get exclusive consultation from experts",
                  "Accurate documentation of your claim",
                  "Get your shares in your DEMAT",
                  "Superior Follow-up of your claim",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex md:grid md:grid-cols-[auto_1fr] md:items-start items-center gap-3 hover:shadow-md transition-all duration-300 rounded-xl h-28 p-4 w-full bg-[#d9fce9]"
                  >
                    <Image src={tick} alt="tick" className="w-6 h-6" />
                    <h3 className="text-gray-800 text-base">{text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* REquest acll back form  */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 max-md:px-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-12 lg:gap-16">

              {/* Left Side: Form Section - Kylas CRM Form */}
              <div className="flex bg-black border border-white items-center lg:ml-auto h-[500px] w-full md:w-[450px] mx-auto py-0 sm:py-6">
                <div className="max-w-lg p-4 mx-auto max-md:px-4 w-full">
  <div className="mb-12">
    <h3 className="text-3xl font-bold text-[#FEB066]">Talk to experts – FREE </h3>
  </div>
                  {/* Kylas Form Container */}
                  <div id="kl__form-container-testimonial"></div>
  </div>
              </div>


              {/* Right Side: Text Content */}
              <div className="text-left flex flex-col justify-center pl-6 md:pl-10 lg:pl-14 max-md:px-4">
                <div className="bg-[#00BE5D] text-white py-4 px-6">
                  <h2 className="text-2xl font-bold">India’s No.1 Shares Recovery Experts</h2>
                </div>
                <ul className="space-y-6 mt-8 text-gray-600 text-[16px]">
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Old shares and dividends recovery
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Physical shares to DEMAT conversion
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Transmission of shares for death claims
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Recovery of lost shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Issue of duplicate shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claims of shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claim of dividends
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
