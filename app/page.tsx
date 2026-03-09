"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, BadgeCheck, HandCoins, PackageCheck, ShieldCheck, Users, QrCode } from 'lucide-react';

const slides = [
  {
    lang: 'en',
    title: 'SIDNEY LEADERSHIP PRESENTS',
    subtitle: 'Kaizen Submission Portal',
    categories: [
      { id: 'productivity', label: 'Productivity', icon: TrendingUp },
      { id: 'quality', label: 'Quality', icon: BadgeCheck },
      { id: 'cost', label: 'Cost', icon: HandCoins },
      { id: 'delivery', label: 'Delivery', icon: PackageCheck },
      { id: 'safety', label: 'Safety', icon: ShieldCheck },
      { id: 'morale', label: 'Morale', icon: Users },
    ],
    quote: '“Small Ideas Can Spark Big Improvements”\nShare Yours Today!',
    sidebar: {
      process: 'Process', scan: 'Scan', scanDesc: 'Use your mobile device', submit: 'Submit', submitDesc: 'Detail your Kaizen idea', improve: 'Improve', improveDesc: 'Watch the change happen',
      rewardTitle: 'Monthly Rewards*', first: '1st Prize', firstDesc: '50 JOD', second: '2nd Prize', secondDesc: '30 JOD', third: '3rd Prize', thirdDesc: '20 JOD', rewardNote: '*Awarded Monthly'
    },
    dir: 'ltr'
  },
  {
    lang: 'ar',
    title: 'تتشرف إدارة سيدني بتقديم',
    subtitle: 'بوابة تسجيل طلبات كايزن',
    categories: [
      { id: 'productivity', label: 'إنتاجية', icon: TrendingUp },
      { id: 'quality', label: 'جودة', icon: BadgeCheck },
      { id: 'cost', label: 'يكلف', icon: HandCoins },
      { id: 'delivery', label: 'توصيل', icon: PackageCheck },
      { id: 'safety', label: 'أمان', icon: ShieldCheck },
      { id: 'morale', label: 'الروح المعنوية', icon: Users },
    ],
    quote: '“ابدأ بفكرة صغيرة واصنع فرقًا كبيراً”\nشاركنا أفكارك اليوم!',
    sidebar: {
      process: 'العملية', scan: 'مسح', scanDesc: 'استخدم هاتفك المحمول', submit: 'إرسال', submitDesc: 'اكتب فكرة كايزن', improve: 'تحسين', improveDesc: 'شاهد التغيير يحدث',
      rewardTitle: 'مكافآت شهرية*', first: 'الجائزة الأولى', firstDesc: '50 JOD', second: 'الجائزة الثانية', secondDesc: '30 JOD', third: 'الجائزة الثالثة', thirdDesc: '20 JOD', rewardNote: '*تُمنح شهرياً'
    },
    dir: 'rtl'
  },
  {
    lang: 'bn',
    title: 'সিডনি লিডারশিপ উপস্থাপনা',
    subtitle: 'কাইজেন জমা দেওয়ার পোর্টাল',
    categories: [
      { id: 'productivity', label: 'উৎপাদনশীলতা', icon: TrendingUp },
      { id: 'quality', label: 'গুণমান', icon: BadgeCheck },
      { id: 'cost', label: 'খরচ', icon: HandCoins },
      { id: 'delivery', label: 'ডেলিভারি', icon: PackageCheck },
      { id: 'safety', label: 'নিরাপত্তা', icon: ShieldCheck },
      { id: 'morale', label: 'মনোবল', icon: Users },
    ],
    quote: '“ছোট ছোট ধারণা বড় উন্নতির সূত্রপাত করতে পারে”\nআজই আপনারটি শেয়ার করুন!',
    sidebar: {
      process: 'প্রক্রিয়া', scan: 'স্ক্যান', scanDesc: 'আপনার মোবাইল ব্যবহার করুন', submit: 'জমা দিন', submitDesc: 'আপনার কাইজেন ধারণা দিন', improve: 'উন্নত করুন', improveDesc: 'পরিবর্তন দেখুন',
      rewardTitle: 'মাসিক পুরস্কার*', first: '১ম পুরস্কার', firstDesc: '50 JOD', second: '২য় পুরস্কার', secondDesc: '30 JOD', third: '৩য় পুরস্কার', thirdDesc: '20 JOD', rewardNote: '*প্রতি মাসে দেওয়া হয়'
    },
    dir: 'ltr'
  },
  {
    lang: 'si',
    title: 'සිඩ්නි නායකත්වය ඉදිරිපත් කරයි',
    subtitle: 'කයිසන් ඉදිරිපත් කිරීමේ ද්වාරය',
    categories: [
      { id: 'productivity', label: 'ඵලදායිතාව', icon: TrendingUp },
      { id: 'quality', label: 'ගුණාත්මකභාවය', icon: BadgeCheck },
      { id: 'cost', label: 'පිරිවැය', icon: HandCoins },
      { id: 'delivery', label: 'භාරදීම', icon: PackageCheck },
      { id: 'safety', label: 'ආරක්ෂාව', icon: ShieldCheck },
      { id: 'morale', label: 'චිත්ත ධෛර්යය', icon: Users },
    ],
    quote: '“කුඩා අදහස් විශාල දියුණුවක් ඇති කළ හැකියි”\nඅදම ඔබේ අදහස් බෙදා ගන්න!',
    sidebar: {
      process: 'ක්‍රියාවලිය', scan: 'ස්කෑන්', scanDesc: 'ඔබේ ජංගම දුරකථනය භාවිතා කරන්න', submit: 'ඉදිරිපත් කරන්න', submitDesc: 'ඔබේ කයිසන් අදහස දෙන්න', improve: 'දියුණු කරන්න', improveDesc: 'වෙනස දකින්න',
      rewardTitle: 'මාසික ත්‍යාග*', first: '1 වන ත්‍යාගය', firstDesc: '50 JOD', second: '2 වන ත්‍යාගය', secondDesc: '30 JOD', third: '3 වන ත්‍යාගය', thirdDesc: '20 JOD', rewardNote: '*මාසිකව පිරිනැමේ'
    },
    dir: 'ltr'
  },
  {
    lang: 'hi',
    title: 'सिडनी लीडरशिप प्रस्तुत करता है',
    subtitle: 'काइज़ेन सबमिशन पोर्टल',
    categories: [
      { id: 'productivity', label: 'उत्पादकता', icon: TrendingUp },
      { id: 'quality', label: 'गुणवत्ता', icon: BadgeCheck },
      { id: 'cost', label: 'लागत', icon: HandCoins },
      { id: 'delivery', label: 'वितरण', icon: PackageCheck },
      { id: 'safety', label: 'सुरक्षा', icon: ShieldCheck },
      { id: 'morale', label: 'हौसला', icon: Users },
    ],
    quote: '“छोटे विचार बड़े सुधारों की प्रेरणा बन सकते हैं”\nआज ही अपना विचार साझा करें!',
    sidebar: {
      process: 'प्रक्रिया', scan: 'स्कैन', scanDesc: 'अपने मोबाइल का उपयोग करें', submit: 'जमा करें', submitDesc: 'अपना काइज़ेन विचार दें', improve: 'सुधारें', improveDesc: 'बदलाव देखें',
      rewardTitle: 'मासिक पुरस्कार*', first: 'प्रथम पुरस्कार', firstDesc: '50 JOD', second: 'द्वितीय पुरस्कार', secondDesc: '30 JOD', third: 'तृतीय पुरस्कार', thirdDesc: '20 JOD', rewardNote: '*हर महीने दिया जाता है'
    },
    dir: 'ltr'
  }
];

const Gear = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M93.3,44.8l-8.5-1.4c-0.6-2.5-1.5-4.9-2.7-7.2l5.4-6.7c1.3-1.6,1.1-3.9-0.4-5.3l-6.1-6.1c-1.4-1.4-3.7-1.6-5.3-0.4 l-6.7,5.4c-2.3-1.2-4.7-2.1-7.2-2.7L60.4,12c-0.3-2-2-3.5-4-3.5H43.6c-2,0-3.7,1.5-4,3.5l-1.4,8.5c-2.5,0.6-4.9,1.5-7.2,2.7 l-6.7-5.4c-1.6-1.3-3.9-1.1-5.3,0.4l-6.1,6.1c-1.4,1.4-1.6,3.7-0.4,5.3l5.4,6.7c-1.2,2.3-2.1,4.7-2.7,7.2l-8.5,1.4 c-2,0.3-3.5,2-3.5,4v8.6c0,2,1.5,3.7,3.5,4l8.5,1.4c0.6,2.5,1.5,4.9,2.7,7.2l-5.4,6.7c-1.3,1.6-1.1,3.9,0.4,5.3l6.1,6.1 c1.4,1.4,3.7,1.6,5.3,0.4l6.7-5.4c2.3,1.2,4.7,2.1,7.2,2.7l1.4,8.5c0.3,2,2,3.5,4,3.5h12.8c2,0,3.7-1.5,4-3.5l1.4-8.5 c2.5-0.6,4.9-1.5,7.2-2.7l6.7,5.4c1.6,1.3,3.9,1.1,5.3-0.4l6.1-6.1c1.4-1.4,1.6-3.7,0.4-5.3l-5.4-6.7c1.2-2.3,2.1-4.7,2.7-7.2 l8.5-1.4c2-0.3,3.5-2,3.5-4v-8.6C96.8,46.8,95.3,45.1,93.3,44.8z M50,68.5c-10.2,0-18.5-8.3-18.5-18.5S39.8,31.5,50,31.5 S68.5,39.8,68.5,50S60.2,68.5,50,68.5z" />
  </svg>
);

const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: ['-5%', '10%', '-5%'],
          y: ['-5%', '10%', '-5%'],
          rotate: [0, 90, 180],
          borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "50% 50% 50% 50%", "40% 60% 70% 30%"],
          backgroundColor: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60cqw] h-[60cqw] filter blur-[8cqw]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: ['5%', '-15%', '5%'],
          y: ['5%', '-10%', '5%'],
          rotate: [180, 90, 0],
          borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "50% 50% 50% 50%", "60% 40% 30% 70%"],
          backgroundColor: ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.08)", "rgba(0,0,0,0.05)"]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[70cqw] h-[70cqw] filter blur-[10cqw]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: ['-10%', '5%', '-10%'],
          y: ['10%', '-5%', '10%'],
          rotate: [0, -90, -180],
          borderRadius: ["30% 70% 70% 30%", "50% 50% 50% 50%", "70% 30% 30% 70%", "30% 70% 70% 30%"],
          backgroundColor: ["rgba(165,214,167,0.15)", "rgba(129,199,132,0.1)", "rgba(165,214,167,0.15)"]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[20%] w-[40cqw] h-[40cqw] mix-blend-overlay filter blur-[6cqw]"
      />
      <motion.div
        animate={{
          scale: [0.9, 1.2, 0.9],
          x: ['10%', '-10%', '10%'],
          y: ['-10%', '10%', '-10%'],
          rotate: [0, 45, 0],
          borderRadius: ["50% 50% 50% 50%", "40% 60% 70% 30%", "60% 40% 30% 70%", "50% 50% 50% 50%"],
          backgroundColor: ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.03)", "rgba(255,255,255,0.08)"]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[10%] w-[50cqw] h-[50cqw] mix-blend-overlay filter blur-[12cqw]"
      />
    </div>
  );
};

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(slideTimer);
  }, []);

  const slide = slides[currentIndex];

  return (
    <main className="flex items-center justify-center min-h-screen bg-black font-sans overflow-hidden">
      {/* 16:9 Container */}
      <div className="relative w-full max-w-[177.78vh] max-h-[56.25vw] aspect-video bg-gradient-to-b from-[#43A047] to-[#1B5E20] overflow-hidden shadow-2xl flex flex-col @container">
        <BackgroundBlobs />

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.lang}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-between p-[4cqh] z-10"
            dir={slide.dir}
          >
            {/* Header Section */}
            <div className="flex flex-col items-center text-center space-y-[1.5cqh] mt-[2cqh] shrink-0">
              {/* Logo */}
              <div className="h-[10cqh] flex items-center justify-center mb-[1cqh]">
                <img
                  src="logo.png" 
                  alt="Logo"
                  className="h-full object-contain drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-[8cqh] h-[8cqh] bg-white/20 rounded-full items-center justify-center backdrop-blur-sm shadow-sm">
                  <span className="text-[4cqh] font-serif italic text-white">S</span>
                </div>
              </div>
              {/* Supporting Title */}
              <h2 className="text-[2.5cqh] font-medium tracking-[0.2em] uppercase text-white">
                {slide.title}
              </h2>
              {/* Main Title */}
              <h1 className="text-[7cqh] font-bold tracking-wide text-white drop-shadow-md">
                {slide.subtitle}
              </h1>
            </div>

            {/* Middle Section: 5 Columns */}
            <div className="flex-1 w-full flex flex-row items-center justify-between px-[2cqw] my-[2cqh]">

              {/* Col 1: Left Sidebar - Process */}
              <div className="flex flex-col gap-[3cqh] w-[20%]">
                <div className="text-white font-bold text-[2.2cqh] uppercase tracking-widest mb-[1cqh] ml-[1cqw]">{slide.sidebar.process}</div>
                {[
                  { step: '01', title: slide.sidebar.scan, desc: slide.sidebar.scanDesc },
                  { step: '02', title: slide.sidebar.submit, desc: slide.sidebar.submitDesc },
                  { step: '03', title: slide.sidebar.improve, desc: slide.sidebar.improveDesc }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-[1.5cqw]">
                    <div className="text-[3.5cqh] font-black text-white/70">{item.step}</div>
                    <div className="w-[2px] h-[4cqh] bg-white/50"></div>
                    <div className="flex flex-col">
                      <span className="text-[2cqh] font-bold text-white">{item.title}</span>
                      <span className="text-[1.5cqh] text-white/90">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Col 2: Left Categories */}
              <div className="flex flex-col justify-center gap-[4cqh] w-[15%]">
                {slide.categories.slice(0, 3).map((cat) => (
                  <div key={cat.id} className="flex flex-col items-center gap-[1cqh]">
                    <cat.icon className="w-[6cqh] h-[6cqh] text-white" strokeWidth={1.5} />
                    <span className="text-[2.2cqh] font-medium text-white text-center leading-tight drop-shadow-md">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Col 3: Center QR */}
              <div className="relative h-[40cqh] aspect-square flex items-center justify-center w-[30%]">
                {/* Blurred Gear */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[140%] h-[140%] flex items-center justify-center pointer-events-none opacity-20 blur-[4px]"
                >
                  <Gear className="w-full h-full text-white" />
                </motion.div>

                {/* Themed QR Code (No Glassmorphism) */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-[3cqh] p-[2.5cqh]"
                >
                  <img
                    src="qr.png" 
                    alt="QR Code"
                    className="w-[22cqh] h-[22cqh] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                  <QrCode className="hidden w-[22cqh] h-[22cqh] text-black" strokeWidth={1.2} />
                </motion.div>
              </div>

              {/* Col 4: Right Categories */}
              <div className="flex flex-col justify-center gap-[4cqh] w-[15%]">
                {slide.categories.slice(3, 6).map((cat) => (
                  <div key={cat.id} className="flex flex-col items-center gap-[1cqh]">
                    <cat.icon className="w-[6cqh] h-[6cqh] text-white" strokeWidth={1.5} />
                    <span className="text-[2.2cqh] font-medium text-white text-center leading-tight drop-shadow-md">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Col 5: Right Sidebar - Rewards */}
              <div className="flex flex-col gap-[3cqh] w-[20%] text-right items-end">
                <div className="text-white font-bold text-[2.2cqh] uppercase tracking-widest mb-[1cqh] mr-[1cqw]">{slide.sidebar.rewardTitle}</div>
                {[
                  { rank: '1', title: slide.sidebar.first, desc: slide.sidebar.firstDesc },
                  { rank: '2', title: slide.sidebar.second, desc: slide.sidebar.secondDesc },
                  { rank: '3', title: slide.sidebar.third, desc: slide.sidebar.thirdDesc }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-end gap-[1.5cqw]">
                    <div className="flex flex-col text-right">
                      <span className="text-[2cqh] font-bold text-white">{item.title}</span>
                      <span className="text-[2.2cqh] font-black text-[#FFD700] drop-shadow-md">{item.desc}</span>
                    </div>
                    <div className="w-[2px] h-[4cqh] bg-white/50"></div>
                    <div className="flex items-center justify-center w-[4cqh] h-[4cqh] rounded-full border-2 border-white/50 text-[2cqh] font-black text-white/90">
                      {item.rank}
                    </div>
                  </div>
                ))}
                <div className="text-[1.5cqh] text-white/70 italic mt-[1cqh] mr-[1cqw]">
                  {slide.sidebar.rewardNote}
                </div>
              </div>

            </div>

            {/* Footer Section */}
            <div className="text-center mb-[3cqh] max-w-[80%]">
              <p className="text-[3.5cqh] font-normal leading-relaxed text-white drop-shadow-md whitespace-pre-line">
                {slide.quote}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
