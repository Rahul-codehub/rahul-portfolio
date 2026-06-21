
"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certification";
import Contact from "@/sections/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () =>
      clearTimeout(timer);

  }, []);

  if (loading) {

    return <LoadingScreen />;

  }

  return (

    <main className="relative overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">

        <div
          className="
                    absolute
                    top-20
                    left-10
                    w-[300px]
                    h-[300px]
                    bg-blue-500/20
                    rounded-full
                    blur-[120px]
                    animate-float
                    "
        />

        <div
          className="
                    absolute
                    bottom-20
                    right-10
                    w-[350px]
                    h-[350px]
                    bg-purple-500/20
                    rounded-full
                    blur-[120px]
                    animate-float-delay
                    "
        />

      </div>

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Skills />

      <Projects />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />

      <Chatbot />
      <BackToTop />
    </main>

  );
}

