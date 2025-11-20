"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import map3 from "../../../public/images/geomatric.png";
import ContentSection from "./contentsection";
import ScrollButton from "@/components/scrollbutton";

export default function IEPFClaim() {
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
        const formContainer = document.getElementById("kl__form-container");
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

    // Add CSS to hide email field (more targeted approach)
    const addEmailHideStyles = () => {
      const styleId = "hide-kylas-email-field";
      if (document.getElementById(styleId)) return;

      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        /* Hide only email input fields specifically */
        #kl__form-container input[type="email"] {
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
        #kl__form-container label[for*="email" i],
        #kl__form-container label:has(input[type="email"]) {
          display: none !important;
        }
        
        /* Hide divs that contain ONLY email inputs (but be careful not to hide the whole form) */
        #kl__form-container > * > div:has(> input[type="email"]:only-child),
        #kl__form-container > * > div:has(> label:has(input[type="email"]):only-child) {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add CSS styles
    addEmailHideStyles();

    // Capture UTM parameters
    captureUTMParameters();

    // Load Kylas CRM form script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.kylas.io/lead-capture-forms/lcf.min.js";
    script.setAttribute("form-id", "2a09aa6f-0148-4eb3-99eb-74496865764d");
    script.async = true;

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[form-id="2a09aa6f-0148-4eb3-99eb-74496865764d"]'
    );
    if (!existingScript) {
      document.body.appendChild(script);
    }

    // Function to hide email field from Kylas form (more targeted)
    const hideEmailField = () => {
      const formContainer = document.getElementById("kl__form-container");
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
    script.onload = () => {
      captureUTMParameters();
      
      // Try to hide email field immediately
      setTimeout(() => {
        hideEmailField();
      }, 100);

      // Also use MutationObserver to watch for form changes
      const formContainer = document.getElementById("kl__form-container");
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
          // Stop checking after 5 seconds
          setTimeout(() => clearInterval(checkInterval), 5000);
        }, 500);
      }
    };

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
      const formContainer = document.getElementById("kl__form-container");
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
    const formContainer = document.getElementById("kl__form-container");
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

  return (
    <>
      <ScrollButton />
     <div
  className="object-cover overflow-hidden min-h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${map3.src})` }} // Corrected template literal
>
<div className="grid md:grid-cols-2 gap-16 items-center max-md:flex max-md:flex-col max-md:gap-6 max-md:px-4">
  {/* Content Section */}
          <div>
    <div className="max-w-xl bg-[#00BE5D] mt-12">
      <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white pt-2 pb-2 p-4">
      India’s No.1 Shares Recovery Experts
      </h2>
    </div>
            <div>
      <ul className="space-y-4 p-12">
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          Old shares and dividends recovery
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          Physical shares to DEMAT conversion
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          Transmission of shares for death claims
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          Recovery of lost shares
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          Issue of duplicate shares
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          IEPF claims of shares
        </li>
        <li className="flex items-center gap-3 text-md text-white">
          <Image src={tick} alt="clearclaim" className="w-5 h-6" />
          IEPF claim of dividends
        </li>
      </ul>
    </div>
  </div>

          {/* Form Section - Kylas CRM Form */}
          <div className="mt-2 flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:w-full max-md:px-6 max-md:py-6 max-md:mt-4 min-h-[400px] md:min-w-[350px] mb-8">
            <div className="max-w-lg p-4 mx-auto max-md:px-4 max-md:w-full">
        <div className="mb-6 max-md:text-center">
                {/* <h3 className="text-2xl md:text-3xl font-bold text-[#FEB066]">
            Talk to experts – FREE
                </h3> */}
        </div>
              {/* Kylas Form Container */}
              <div id="kl__form-container"></div>
        </div>
          </div>
        </div>
      </div>

      <ContentSection />
    </>
  );
}
