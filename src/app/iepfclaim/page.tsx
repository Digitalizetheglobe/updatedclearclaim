"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import Content from "./content";
import ScrollButton from "@/components/scrollbutton";

export default function IEPFClaim() {
  const [isClient, setIsClient] = useState(false); // Check if we're on the client
  const [bgImage, setBgImage] = useState(""); // State to manage background image

  useEffect(() => {
    setIsClient(true); // Ensure we are on the client
    setBgImage("url(/images/geomatric.png)"); // Set the background image after the component mounts
  }, []);

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
    const handleScriptLoad = () => {
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

    const scriptElement = existingScript as HTMLScriptElement || script;
    if (scriptElement.onload === null || (scriptElement as any).readyState === 'complete') {
      // Script already loaded
      handleScriptLoad();
    } else {
      scriptElement.onload = handleScriptLoad;
    }

    // Cleanup function
    return () => {
      // Optionally remove script on unmount
      const scriptToRemove = document.querySelector(
        'script[form-id="2a09aa6f-0148-4eb3-99eb-74496865764d"]'
      );
      if (scriptToRemove && scriptToRemove !== existingScript) {
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
    <ScrollButton/>

      <div
        className="object-cover overflow-hidden min-h-screen flex items-center justify-center px-4 md:px-8"
        style={{ backgroundImage: bgImage }} // Use bgImage state
      >
        <div className="grid md:grid-cols-2 gap-16 items-center px-3">
          {/* Content Section */}
          <div>
            <div className="max-w-xl bg-[#00BE5D] mt-6 md:mt-12 mx-auto md:mx-0">
              <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white py-2 px-2 text-start md:text-left">
                India’s No.1 IEPF Consultant
              </h2>
            </div>
            <div className="max-w-full md:max-w-lg mx-auto md:mx-0">
              <ul className="space-y-4 p-6 md:p-12">
                {[
                  "Recover of shares from IEPF",
                  "Recovery of unclaimed dividends from IEPF",
                  "Transmission of shares and recovery from IEPF in death claims",
                  "Issue of duplicate and recovery from IEPF",
                  "Recovery of share transferred from DEMAT to IEPF",
                  "Discover your forgotten shares/dividends transferred to IEPF",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" width={20} height={24} className="w-5 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Section - Kylas CRM Form */}
          <div className="flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:px-6 max-md:mt-4 min-h-[400px] w-full md:min-w-[350px] mb-8">
            <div className="max-w-lg p-4 mx-auto max-md:px-4 w-full">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#FEB066] text-center">
                  Talk to experts – FREE
                </h3>
              </div>
              {/* Kylas Form Container */}
              <div id="kl__form-container"></div>
              </div>
          </div>
        </div>
      </div>

      <Content />
    </>
  );
}