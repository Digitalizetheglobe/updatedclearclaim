"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 leading-relaxed">
        Clearclaim Ventures Private Limited ("Clearclaim") is committed to safeguarding your
        privacy. This Privacy Policy outlines how we collect, use, and protect your personal
        information when you use our website and services. By accessing or using our services, you
        agree to the terms outlined in this policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Personal Identification Information:</strong> Name, contact details (email,
          phone number), and address.
        </li>
        <li>
          <strong>Identification Details:</strong> Aadhaar details for KYC purposes.
        </li>
        <li>
          <strong>Investment Information:</strong> Details about your investments, excluding account
          numbers or amounts invested.
        </li>
        <li>
          <strong>Emergency Contact Information:</strong> Contact details of your designated
          emergency contacts.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">How We Use the Information</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>To understand your needs and provide tailored services.</li>
        <li>For internal record keeping and maintaining your Clearclaim profile.</li>
        <li>To enhance our services based on feedback and interactions.</li>
        <li>To send you updates, account status, and relevant communications.</li>
        <li>For promotional activities and to inform you about special offers.</li>
        <li>For market research and website customization.</li>
        <li>For security monitoring, including website usage patterns.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Security of Your Information</h2>
      <p className="text-gray-700 leading-relaxed">
        We ensure the security of your personal information by implementing industry-standard
        physical, electronic, and managerial procedures. Sensitive information, such as investment
        or payment details, is encrypted during transmission.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Controlling Your Personal Information</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          You can opt out of direct marketing communications when filling out forms on our website.
        </li>
        <li>
          If you previously agreed to receive marketing communications, you can update your
          preference by contacting us at
          <a href="mailto:support@clearclaim.in" className="text-blue-600"> support@clearclaim.in</a>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Password Security</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Regularly update your password using the 'Change Password' feature.</li>
        <li>Do not disclose your password or store it in an insecure location.</li>
        <li>Two-factor authentication is used for added security via OTP.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Disclosure of Information</h2>
      <p className="text-gray-700 leading-relaxed">
        We do not sell, distribute, or lease your personal information to third parties unless
        required by law or regulatory purposes. If you have opted in, we may send promotional
        information about third parties that may interest you.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Changes to This Privacy Policy</h2>
      <p className="text-gray-700 leading-relaxed">
        Clearclaim may update this policy from time to time. Please check this page periodically
        for any changes. This policy is effective from 1st April 2022.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Contact Us</h2>
      <p className="text-gray-700 leading-relaxed">
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Email:</strong>
          <a href="mailto:sales@clearclaim.in" className="text-blue-600"> sales@clearclaim.in</a>
        </li>
        <li>
          <strong>Address:</strong> Office No C-201, 2nd Floor, Vantage Tower, Bramha Corp,
          Opposite Bavdhan Police Chowky, NDA Pashan Road, Bavdhan, Pune - 411021
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
