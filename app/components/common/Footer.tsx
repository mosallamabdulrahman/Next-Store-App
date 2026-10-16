"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  VisaIcon,
  MastercardIcon,
  PaypalIcon,
  ApplePayIcon,
} from "@app/components/common/Icons";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand Info & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-black tracking-tight text-gray-900 font-sans flex items-center">
                woodmart
                <span className="w-2 h-2 rounded-full bg-purple-700 inline-block ml-0.5"></span>
              </span>
            </Link>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Discover cutting-edge consumer tech, premium household gadgets,
              and computers with world-class support and fast nationwide
              shipping.
            </p>

            <div className="space-y-2.5 text-xs text-gray-600 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>500 South Michigan Ave, Chicago, IL 60605</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-purple-700 shrink-0" />
                <span className="font-semibold text-gray-800">
                  +01 234 567 890
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-purple-700 shrink-0" />
                <span>support@woodmart.com</span>
              </div>
            </div>

            {/* Mobile App Download Badges */}
            <div className="pt-2 flex items-center gap-2.5">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors"
              >
                <span>Download on</span>
                <strong className="font-bold">App Store</strong>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors"
              >
                <span>Get it on</span>
                <strong className="font-bold">Google Play</strong>
              </Link>
            </div>
          </div>

          {/* Col 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Order Tracking
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  TV & Audio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Home & Outdoor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  PC Components
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-700 transition-colors"
                >
                  Cameras
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box (Vibrant Purple Card) (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-purple-700 rounded-3xl p-6 sm:p-7 text-white shadow-lg shadow-purple-700/20 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <h4 className="text-lg font-black tracking-tight leading-snug">
                  Join Our Mailing List
                </h4>
                <p className="text-xs text-purple-100 leading-relaxed">
                  Subscribe to our newsletter and receive a{" "}
                  <strong className="text-white font-bold">10% discount</strong>{" "}
                  on your first order.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                  <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full text-xs text-gray-800 placeholder-gray-400 px-3 py-2 outline-none bg-transparent"
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-purple-900 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                    >
                      {subscribed ? "Subscribed!" : "Sign Up"}
                    </button>
                  </div>
                  <p className="text-[10px] text-purple-200">
                    Will be used in accordance with our Privacy Policy
                  </p>
                </form>
              </div>

              {/* Decorative Circle in background */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-purple-600 rounded-full opacity-50 blur-xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Gateways */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 WoodMart. All Rights Reserved. Built with Next.js & Tailwind
            CSS.
          </p>

          <div className="flex items-center gap-2">
            <VisaIcon className="h-6 w-auto" />
            <MastercardIcon className="h-6 w-auto" />
            <PaypalIcon className="h-6 w-auto" />
            <ApplePayIcon className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};
