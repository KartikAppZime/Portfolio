import React from 'react'

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">
            Let&apos;s work together
          </h2>

          <p className="mt-4 max-w-md leading-8 text-slate-300">
            I&apos;m always open to discussing new projects and
            opportunities.
          </p>

          <div className="mt-8 flex gap-5 text-2xl">
            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="space-y-5 text-slate-300">
          <p className="flex items-center gap-3">
            <FaEnvelope />
            kartik.dev@gmail.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhoneAlt />
            +91 9654276139
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt />
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
