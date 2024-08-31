import React from "react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-primary-50 via-primary-200 to-primary-300 p-4">
      <div className="px-2 mt-3 grid-cols-1 gap-8">
        {/* Social Media Links */}
        <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-4">
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="https://www.linkedin.com/company/blockfuse-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-primary-300"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562117006926"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-primary-300"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/blockfuselabs?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-primary-300"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://x.com/blockfuselabs?s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-primary-300"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://youtube.com/@blockfuselabs?si=zd2wB-1X8VlnndCI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-primary-300"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t mt-5 border-primary-mt-8 pt-4 flex md:flex-row justify-between text-sm sm:text-base text-gray-100">
          <p className="mb-6 md:mb-0">
            Copyright © 2024 TokenLens Team . All Rights Reserved.{" "}
          </p>
          <p>Powered by Blockfuse Labs Cohort One</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
