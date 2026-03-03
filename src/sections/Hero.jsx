import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, ArrowRight, Star, Quote } from "lucide-react";
import ContactPopup from "../components/ContactPopup";
import { Helmet } from "react-helmet";

export default function Hero({ setCurrentPage }) {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const reviews = [
    {
      name: t("hero.reviews.review1.name"),
      text: t("hero.reviews.review1.text"),
      rating: 5,
    },
    {
      name: t("hero.reviews.review2.name"),
      text: t("hero.reviews.review2.text"),
      rating: 5,
    },
    {
      name: t("hero.reviews.review3.name"),
      text: t("hero.reviews.review3.text"),
      rating: 5,
    },
  ];

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>{t("hero.title")}</title>
        <meta name="description" content={t("hero.description")} />
        {/* Open Graph */}
        <meta property="og:title" content={t("hero.title")} />
        <meta property="og:description" content={t("hero.description")} />
        <meta property="og:image" content="link-to-image.jpg" />{" "}
        {/* Замените на путь к изображению */}
        <meta property="og:url" content={window.location.href} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("hero.title")} />
        <meta name="twitter:description" content={t("hero.description")} />
        <meta name="twitter:image" content="/public/logo.png" />{" "}
        {/* Замените на путь к изображению */}
      </Helmet>

      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <section
        id="home"
        className="
          relative min-h-screen 
          flex flex-col lg:flex-row
          justify-start lg:justify-center 
          items-center 
          text-center lg:text-left 
          px-6 lg:px-20 
          overflow-hidden
        "
      >
        {/* ====== НЕТ НИКАКИХ КРУГОВ, ЧИСТОЕ ПОЛЕ ====== */}
        <div className="absolute inset-0 -z-10"></div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 50 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 lg:pr-12 max-w-2xl pt-24 lg:pt-0"
        >
          <motion.div
            initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
            animate={isMobile ? {} : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-sm font-semibold text-[#3B82F6]">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-gray-800">{t("hero.title")}</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
              {t("hero.city")}
            </span>
          </motion.h1>

          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed font-medium"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              whileHover={isMobile ? undefined : { scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("hero.btnConsult")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#3B82F6]">17+</div>
              <div className="text-sm text-gray-600 font-medium">
                {t("hero.stats.experience")}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#3B82F6]">5000+</div>
              <div className="text-sm text-gray-600 font-medium">
                {t("hero.stats.projects")}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#3B82F6]">100%</div>
              <div className="text-sm text-gray-600 font-medium">
                {t("hero.stats.satisfaction")}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: CARD */}
        <motion.div
          className="relative w-full lg:w-[550px] mt-16 lg:mt-0"
          initial={isMobile ? false : { opacity: 0, x: 50 }}
          animate={isMobile ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className={`relative w-full ${
                isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"
              } rounded-3xl border-2 border-blue-100 shadow-2xl overflow-hidden`}
              whileHover={isMobile ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#38BDF8]/10"></div>

              <div className="relative z-10 p-8">
                {/* GOOGLE RATING */}
                <motion.div
                  initial={isMobile ? false : { opacity: 0, y: 20 }}
                  animate={isMobile ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`${
                    isMobile
                      ? "bg-white"
                      : "bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm"
                  } rounded-2xl p-6 shadow-lg mb-6 border border-blue-100/50`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-2xl font-bold text-white">G</span>
                      </div>
                      <span className="font-bold text-gray-800 text-lg">
                        Google
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-800">
                        5.0
                      </div>
                      <div className="text-xs text-gray-500">
                        {t("hero.googleRating.basedOn")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* REVIEWS */}
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={isMobile ? false : { opacity: 0, y: 20 }}
                      animate={isMobile ? {} : { opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className={`${
                        isMobile ? "bg-white" : "bg-white/90 backdrop-blur-sm"
                      } rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-800 text-sm">
                              {review.name}
                            </h4>
                            <div className="flex gap-0.5">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* GOOGLE LINK */}
                <motion.a
                  href="https://www.google.com/search?kgmid=/g/11dxqgbtyp"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={isMobile ? false : { opacity: 0 }}
                  animate={isMobile ? {} : { opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="block mt-4 text-center text-sm text-[#3B82F6] hover:text-[#2563EB] font-medium transition-colors"
                >
                  {t("hero.googleRating.viewAll")}
                </motion.a>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"></div>
            </motion.div>

            {/* FLOATING DECOR */}
            <motion.div
              className={`absolute -top-6 -right-6 w-20 h-20 ${
                isMobile
                  ? "bg-white shadow-xl rounded-2xl border border-blue-100"
                  : "bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-blue-100"
              } flex items-center justify-center`}
              animate={isMobile ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
            </motion.div>

            <motion.div
              className={`absolute -bottom-6 -left-6 w-24 h-24 ${
                isMobile
                  ? "bg-white shadow-xl rounded-2xl border border-blue-100"
                  : "bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-blue-100"
              } flex items-center justify-center`}
              animate={isMobile ? undefined : { y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Quote className="w-10 h-10 text-[#3B82F6]" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
