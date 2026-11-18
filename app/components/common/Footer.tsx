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
    <footer className="w-full bg-[#0F3D3E] text-[#FAF9F6] border-t border-[#09292A] mt-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Mosalam Store Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-xl bg-[#E85D3F] text-white flex items-center justify-center font-display font-bold text-lg tracking-tighter">
                M
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#FAF9F6]">
                Mosalam <span className="text-[#F4A261] font-medium">Store</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed max-w-sm">
              Curated consumer electronics, studio sound, and precision home
              appliances—delivered with transparent pricing and official warranty
              protection.
            </p>

            <div className="space-y-3 text-xs text-[#FAF9F6]/80 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
                <span>500 South Michigan Ave, Chicago, IL 60605</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#F4A261] shrink-0" />
                <span className="font-semibold text-[#FAF9F6] tabular-nums">
                  +01 234 567 890
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-[#F4A261] shrink-0" />
                <span>support@mosalamstore.com</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#09292A] hover:bg-[#18181B] border border-[#FAF9F6]/15 text-[#FAF9F6] px-3.5 py-2 rounded-xl text-[11px] font-medium transition-colors"
              >
                <span>Download on</span>
                <strong className="font-bold">App Store</strong>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#09292A] hover:bg-[#18181B] border border-[#FAF9F6]/15 text-[#FAF9F6] px-3.5 py-2 rounded-xl text-[11px] font-medium transition-colors"
              >
                <span>Get it on</span>
                <strong className="font-bold">Google Play</strong>
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold text-[#F4A261] uppercase tracking-[0.14em]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF9F6]/75">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Mosalam
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Editorial Journal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms &amp; Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold text-[#F4A261] uppercase tracking-[0.14em]">
              Departments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF9F6]/75">
              <li>
                <Link
                  href="/product-category/smartphones"
                  className="hover:text-white transition-colors"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  href="/product-category/pc-components"
                  className="hover:text-white transition-colors"
                >
                  PC &amp; Components
                </Link>
              </li>
              <li>
                <Link
                  href="/product-category/appliances"
                  className="hover:text-white transition-colors"
                >
                  Home Appliances
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Studio Audio
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Gaming Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  All Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tactile Newsletter Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAF9F6] text-[#18181B] rounded-3xl p-6 sm:p-7 border border-[#E5E0D8] shadow-xl">
              <div className="space-y-3">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-[#F2EFE9] text-[#0F3D3E]">
                  Insider Dispatch
                </span>
                <h4 className="font-display text-xl font-bold tracking-tight leading-snug">
                  Join the Mosalam Dispatch
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Subscribe for early product drops and unlock{" "}
                  <strong className="text-[#E85D3F] font-bold">10% off</strong>{" "}
                  your first curated order.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-2.5 pt-2">
                  <div className="flex items-center bg-[#F2EFE9] border border-[#E5E0D8] focus-within:border-[#0F3D3E] rounded-xl p-1 transition-colors">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full text-xs text-[#18181B] placeholder-[#57534E]/70 px-3 py-2.5 outline-none bg-transparent"
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer"
                    >
                      {subscribed ? "Joined!" : "Sign Up"}
                    </button>
                  </div>
                  <p className="text-[10px] text-[#57534E]">
                    Protected by our Privacy Policy. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Payment Strip */}
        <div className="mt-12 pt-6 border-t border-[#FAF9F6]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/65">
          <p>© 2026 Mosalam Store. All Rights Reserved.</p>

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
