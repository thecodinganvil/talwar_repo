"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header() {
  const [open, setOpen] = useState(false);
  const GOLD = "#D4AF37";

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-column grid ensures perfect symmetry with the logo truly centered */}
        <div
          className={`grid grid-cols-3 items-center h-20 ${cinzel.className}`}
        >
          {/* Left Links */}
          <nav
            aria-label="Primary left"
            className="hidden md:flex justify-center gap-10"
          >
            <NavLink href="/" label="Home" />
            <NavLink href="/portfolio" label="Portfolio" />
            <NavLink href="/gallery" label="Gallery" />
          </nav>

          {/* Mobile menu button (left) */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black/70 bg-white/60 backdrop-blur-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="group inline-flex items-center">
              <span className="sr-only">Talwar Interiors — Home</span>
              <div className="relative h-12 w-12">
                <Image
                  src="/assets/talwarlogo.png"
                  alt="Talwar Interiors Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="48px"
                />
              </div>
            </Link>
          </div>

          {/* Right Links + CTA */}
          <div className="hidden md:flex justify-center items-center gap-10">
            <NavLink href="/services" label="Services" />
            {/* Enhanced CTA */}
            <Link
              href="/book-appointment"
              className="relative rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{
                color: GOLD,
                border: `2px solid ${GOLD}`,
                background:
                  "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
              }}
            >
              <span className="relative z-10 font-bold tracking-wide">
                Book an Appointment
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-xl">
            <div className="px-3 py-2">
              <MobileLink
                href="/"
                label="Home"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/portfolio"
                label="Portfolio"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/gallery"
                label="Gallery"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/services"
                label="Services"
                onClick={() => setOpen(false)}
              />

              <div className="pt-2">
                {/* Enhanced CTA (mobile) */}
                <Link
                  href="/book-appointment"
                  onClick={() => setOpen(false)}
                  className="relative block w-full text-center rounded-full px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    color: GOLD,
                    border: `2px solid ${GOLD}`,
                    background:
                      "linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
                  }}
                >
                  <span className="relative z-10 font-bold tracking-wide">
                    Book an Appointment
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Underline hover for links */
          .nav-link {
            position: relative;
          }
          .nav-link:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            height: 2px;
            width: 100%;
            background: ${GOLD};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 300ms;
          }
          .nav-link:hover:after {
            transform: scaleX(1);
          }

          /* Continuous shimmer across the button */
          .shimmer-mask {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: translateX(-100%);
            animation: shimmer 2.25s linear infinite;
          }

          /* Gold border pulse */
          .gold-pulse {
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.35),
              inset 0 0 6px rgba(212, 175, 55, 0.25);
            animation: pulseGold 2.6s ease-in-out infinite;
          }

          /* Floating particles */
          .particle {
            position: absolute;
            display: block;
            width: 5px;
            height: 5px;
            background: ${GOLD};
            border-radius: 9999px;
            opacity: 0.85;
            filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.8));
            animation: floatParticle 3s ease-in-out infinite;
          }
          .particle:nth-child(1) {
            animation-delay: 0.1s;
          }
          .particle:nth-child(2) {
            width: 6px;
            height: 6px;
            opacity: 0.95;
            animation-delay: 0.6s;
          }
          .particle:nth-child(3) {
            width: 4px;
            height: 4px;
            opacity: 0.8;
            animation-delay: 1s;
          }

          /* Keyframes */
          @keyframes shimmer {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }
          @keyframes pulseGold {
            0%,
            100% {
              box-shadow: 0 0 8px rgba(212, 175, 55, 0.35),
                inset 0 0 6px rgba(212, 175, 55, 0.25);
              opacity: 0.9;
            }
            50% {
              box-shadow: 0 0 22px rgba(212, 175, 55, 0.75),
                inset 0 0 10px rgba(212, 175, 55, 0.35);
              opacity: 1;
            }
          }
          @keyframes floatParticle {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-6px) translateX(2px) scale(1.08);
              opacity: 1;
            }
            100% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.85;
            }
          }
        `}</style>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="nav-link text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-[17px] text-black/80 hover:text-[#D4AF37] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
