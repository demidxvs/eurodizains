import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import ContactPopup from "../components/ContactPopup";
import { slugMap } from "../utils/slugMap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // РђРґР°РїС‚РёРІРЅС‹Рµ СЃРѕСЃС‚РѕСЏРЅРёСЏ
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // РћРїСЂРµРґРµР»РµРЅРёРµ СЂР°Р·РјРµСЂР° СЌРєСЂР°РЅР°
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // РЎРєСЂС‹С‚РёРµ header РїСЂРё РїСЂРѕРєСЂСѓС‚РєРµ
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setShowHeader(true);
      } else if (y > lastY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastY = y;
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // РџРµСЂРµРєР»СЋС‡РµРЅРёРµ СЏР·С‹РєР°
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    const currentPath = location.pathname;
    let targetPath = currentPath;

    for (const key in slugMap) {
      const langs = slugMap[key];
      if (Object.values(langs).includes(currentPath)) {
        targetPath = langs[lng];
        break;
      }
    }

    navigate(`${targetPath}?language=${lng}`, { replace: true });
  };

  // РќР°РІРёРіР°С†РёСЏ
  const handleRoute = (to) => {
    setIsOpen(false);
    const lang = i18n.language;

    if (slugMap[to]) {
      const translatedSlug = slugMap[to][lang];
      navigate(`${translatedSlug}?language=${lang}`);
    } else {
      navigate(`${to}?language=${lang}`);
    }
  };

  // РџСѓРЅРєС‚С‹ РјРµРЅСЋ
  const routeItems = [
    { to: "/", label: t("nav.home"), id: "home-route" },
    { to: "/repairs", label: t("nav.repairs"), id: "repairs-route" },
    { to: "/design", label: t("nav.design"), id: "design-route" },
  ];

  // РџСЂРѕРІРµСЂРєР° Р°РєС‚РёРІРЅРѕРіРѕ РјР°СЂС€СЂСѓС‚Р°
  const isRouteActive = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return Object.values(slugMap[to] || {}).includes(location.pathname);
  };

  // Р’С‹СЃРѕС‚Р° header РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЂР°Р·РјРµСЂР° СЌРєСЂР°РЅР°
  const getHeaderHeight = () => {
    if (screenSize.isMobile) return "h-16";
    if (screenSize.isTablet) return "h-20";
    return "h-24";
  };

  // Р Р°Р·РјРµСЂС‹ Р»РѕРіРѕС‚РёРїР°
  const getLogoClasses = () => {
    if (screenSize.isMobile) return "-top-6 left-4 w-[160px]";
    if (screenSize.isTablet) return "-top-8 left-8 w-[200px]";
    return "-top-10 left-20 w-[230px] xl:w-[260px]";
  };

  return (
    <>
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* HEADER */}
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50
          ${
            screenSize.isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"
          }
          ${getHeaderHeight()}
          border-b border-blue-100 shadow-sm
        `}
        animate={{ y: showHeader ? 0 : -140 }}
        transition={{ duration: 0.25 }}
      >
        {/* Р›РћР“РћРўРРџ */}
        <img
          src="/logo.png"
          alt="EuroDizains Logo"
          className={`
            absolute cursor-pointer select-none opacity-95 transition-all duration-300
            ${getLogoClasses()}
          `}
          onClick={() => handleRoute("/")}
        />

        {/* РќРђР’РР“РђР¦РРЇ */}
        <nav className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex-1" onClick={() => handleRoute("/")}></div>

          {/* DESKTOP Р’Р•Р РЎРРЇ (1024px+) */}
          {screenSize.isDesktop && (
            <div className="flex items-center gap-4 xl:gap-6">
              {/* РќР°РІРёРіР°С†РёРѕРЅРЅС‹Рµ СЃСЃС‹Р»РєРё */}
              {routeItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleRoute(item.to)}
                  className={`
                    relative text-sm font-semibold transition-colors
                    ${
                      isRouteActive(item.to)
                        ? "text-[#3B82F6]"
                        : "text-gray-700 hover:text-[#3B82F6]"
                    }
                  `}
                >
                  {item.label}
                  {isRouteActive(item.to) && (
                    <motion.div
                      layoutId="route-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]"
                    />
                  )}
                </button>
              ))}

              {/* РЇР·С‹РєРё */}
              <div className="flex items-center gap-2 border-l pl-4 ml-2 border-blue-200">
                {["lv", "ru", "en", "de", "el"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`
                      px-3 py-1.5 rounded-md text-sm font-semibold transition-all
                      ${
                        i18n.language === lng
                          ? "bg-blue-50 text-[#3B82F6]"
                          : "text-gray-600 hover:bg-blue-50 hover:text-[#3B82F6]"
                      }
                    `}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/eurodizainsm2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-semibold hidden xl:inline">
                  eurodizainsm2
                </span>
              </a>

              {/* РўРµР»РµС„РѕРЅ */}
              <a
                href="tel:+37122469222"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold hidden xl:inline">
                  +371 22469222
                </span>
              </a>

              {/* РљРЅРѕРїРєР° Р·РІРѕРЅРєР° */}
              <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white rounded-full shadow hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{t("buttons.call")}</span>
              </button>
            </div>
          )}

          {/* TABLET Р’Р•Р РЎРРЇ (768px-1024px) */}
          {screenSize.isTablet && (
            <div className="flex items-center gap-3">
              {/* РќР°РІРёРіР°С†РёСЏ */}
              {routeItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleRoute(item.to)}
                  className={`
                    relative text-sm font-semibold transition-colors px-2
                    ${
                      isRouteActive(item.to)
                        ? "text-[#3B82F6]"
                        : "text-gray-700 hover:text-[#3B82F6]"
                    }
                  `}
                >
                  {item.label}
                  {isRouteActive(item.to) && (
                    <motion.div
                      layoutId="route-underline-tablet"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]"
                    />
                  )}
                </button>
              ))}

              {/* РЇР·С‹РєРё РєРѕРјРїР°РєС‚РЅРѕ */}
              <div className="flex items-center gap-1 border-l pl-2 ml-1 border-blue-200">
                {["lv", "ru", "en", "de", "el"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`
                      px-2 py-1 rounded text-xs font-semibold transition-all
                      ${
                        i18n.language === lng
                          ? "bg-blue-50 text-[#3B82F6]"
                          : "text-gray-600 hover:bg-blue-50 hover:text-[#3B82F6]"
                      }
                    `}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* РљРЅРѕРїРєР° Р·РІРѕРЅРєР° - С‚РѕР»СЊРєРѕ РёРєРѕРЅРєР° */}
              <button
                onClick={() => setShowPopup(true)}
                className="w-10 h-10 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white rounded-full shadow hover:shadow-lg transition-all flex items-center justify-center"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* MOBILE РљРќРћРџРљРђ РњР•РќР® */}
          {screenSize.isMobile && (
            <button
              className="w-10 h-10 flex items-center justify-center bg-blue-50 text-[#3B82F6] rounded-lg shadow-sm hover:shadow-md transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          )}
        </nav>

        {/* MOBILE Р‘РћРљРћР’РћР• РњР•РќР® */}
        <AnimatePresence>
          {isOpen && screenSize.isMobile && (
            <>
              {/* Р—Р°С‚РµРјРЅРµРЅРёРµ */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Р‘РѕРєРѕРІР°СЏ РїР°РЅРµР»СЊ */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* РЁР°РїРєР° РјРµРЅСЋ */}
                  <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                    <span className="text-lg font-bold text-gray-800">
                      Menu
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* РЎРѕРґРµСЂР¶РёРјРѕРµ */}
                  <div className="flex-1 px-6 py-6">
                    {/* РќР°РІРёРіР°С†РёСЏ */}
                    <div className="space-y-2 mb-6">
                      {routeItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleRoute(item.to)}
                          className={`
                            w-full text-left py-3 px-4 rounded-xl font-semibold transition-all
                            ${
                              isRouteActive(item.to)
                                ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-[#3B82F6] shadow-sm"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* РЇР·С‹РєРё */}
                    <div className="mb-6">
                      <div className="grid grid-cols-4 gap-2">
                        {["lv", "ru", "en", "de", "el"].map((lng) => (
                          <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className={`
                              py-2.5 rounded-xl text-sm font-semibold transition-all
                              ${
                                i18n.language === lng
                                  ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }
                            `}
                          >
                            {lng.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* РљРѕРЅС‚Р°РєС‚С‹ */}
                    <div className="space-y-3 mb-6">
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/eurodizainsm2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Instagram className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">
                          eurodizainsm2
                        </span>
                      </a>

                      {/* РўРµР»РµС„РѕРЅ */}
                      <a
                        href="tel:+37122469222"
                        className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">
                          +371 22469222
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Р¤СѓС‚РµСЂ - РєРЅРѕРїРєР° Р·РІРѕРЅРєР° */}
                  <div className="p-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setShowPopup(true);
                        setIsOpen(false);
                      }}
                      className="w-full py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white rounded-xl flex justify-center items-center gap-2 shadow-lg font-semibold hover:shadow-xl transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      {t("buttons.call")}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

