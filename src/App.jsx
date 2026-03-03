import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import i18n from "./i18n";

// Components
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Header from "./components/Header.jsx";

// Main sections
import Hero from "./sections/Hero.jsx";
import Benefits from "./sections/Benefits.jsx";
import Services from "./sections/Services.jsx";
import Gallery from "./sections/Gallery.jsx";
import Contact from "./sections/Contact.jsx";

// Repairs Pages
import RepairsHome from "./pages/repairs/repairs-home.jsx";
import Standard from "./pages/repairs/standard.jsx";
import Premium from "./pages/repairs/premium.jsx";
import VIP from "./pages/repairs/vip.jsx";
import Apartments from "./pages/repairs/apartments.jsx";
import Houses from "./pages/repairs/houses.jsx";
import Offices from "./pages/repairs/offices.jsx";
import Ceilings from "./pages/repairs/ceilings.jsx";
import Floors from "./pages/repairs/floors.jsx";
import Plumbing from "./pages/repairs/plumbing.jsx";
import Walls from "./pages/repairs/walls.jsx";
import Electrics from "./pages/repairs/electrics.jsx";
import Openings from "./pages/repairs/openings.jsx";
import Demolition from "./pages/repairs/demolition.jsx";
import Finishing from "./pages/repairs/finishing.jsx";

// Design Pages
import DesignHome from "./pages/design/design-home.jsx";
import ProjectStandard from "./pages/design/project-standard.jsx";
import ProjectPremium from "./pages/design/project-premium.jsx";
import ProjectVip from "./pages/design/project-vip.jsx";
import Visualization3D from "./pages/design/visualization-3d.jsx";
import AuthorSupervision from "./pages/design/author-supervision.jsx";
import DesignGuarantees from "./pages/design/design-guarantees.jsx";
import DesignDiscounts from "./pages/design/design-discounts.jsx";
import Composition from "./pages/design/composition.jsx";

// Design clients
import LivingRoomDesign from "./pages/design/living-room-design.jsx";
import HouseDesign from "./pages/design/house-design.jsx";
import Decoration from "./pages/design/decoration.jsx";
import InteriorDesign from "./pages/design/interior-design.jsx";
import OfficeDesign from "./pages/design/office-design.jsx";
import RestaurantDesign from "./pages/design/restaurant-design.jsx";
import ClubDesign from "./pages/design/club-design.jsx";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // ---- LANGUAGE HANDLER ----
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let lang = params.get("language");

    const allowed = ["lv", "ru", "en", "de", "el"]; // в†ђ РґРѕР±Р°РІРёР»Рё Greek

    if (!lang) {
      lang = "lv";
      params.set("language", lang);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      return;
    }

    if (!allowed.includes(lang)) {
      lang = "lv";
      params.set("language", lang);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location]);

  return (
    <>
      <AnimatedBackground />
      <Header />

      <Routes>
        {/* ---------------------- */}
        {/* MAIN PAGE */}
        {/* ---------------------- */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Services />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* ---------------------- */}
        {/* REPAIRS MAIN */}
        {/* ---------------------- */}
        <Route path="/remonts-un-apdare" element={<RepairsHome />} />
        <Route path="/remont-i-otdelka" element={<RepairsHome />} />
        <Route path="/renovation-and-finishing" element={<RepairsHome />} />
        <Route path="/anakainisi-kai-diakosmisi" element={<RepairsHome />} />

        {/* ---------------------- */}
        {/* REPAIRS в†’ CATEGORIES */}
        {/* ---------------------- */}
        <Route path="/standarta-remonts" element={<Standard />} />
        <Route path="/standart-remont" element={<Standard />} />
        <Route path="/standard-renovation" element={<Standard />} />
        <Route path="/standard-anakainisi" element={<Standard />} />

        <Route path="/premium-klases-remonts" element={<Premium />} />
        <Route path="/premium-remont" element={<Premium />} />
        <Route path="/premium-renovation" element={<Premium />} />
        <Route path="/premium-anakainisi" element={<Premium />} />

        <Route path="/vip-remonts" element={<VIP />} />
        <Route path="/vip-remont" element={<VIP />} />
        <Route path="/vip-renovation" element={<VIP />} />
        <Route path="/vip-anakainisi" element={<VIP />} />

        {/* ---------------------- */}
        {/* REPAIRS в†’ CLIENTS */}
        {/* ---------------------- */}
        <Route path="/dzivokla-remonts-riga" element={<Apartments />} />
        <Route path="/remont-kvartir-riga" element={<Apartments />} />
        <Route path="/apartment-renovation" element={<Apartments />} />
        <Route path="/anakainisi-diamerismatos-riga" element={<Apartments />} />

        <Route path="/privatmaju-remonts" element={<Houses />} />
        <Route path="/remont-kottedzhey" element={<Houses />} />
        <Route path="/house-renovation" element={<Houses />} />
        <Route path="/anakainisi-katoikias" element={<Houses />} />

        <Route path="/biroju-remonts" element={<Offices />} />
        <Route path="/remont-ofisov" element={<Offices />} />
        <Route path="/office-renovation" element={<Offices />} />
        <Route path="/anakainisi-grafeiou" element={<Offices />} />

        {/* ---------------------- */}
        {/* REPAIRS в†’ TECHNOLOGIES */}
        {/* ---------------------- */}
        <Route
          path="/griestu-apdare-riga-cena-no-eurodizains"
          element={<Ceilings />}
        />
        <Route
          path="/otdelka-potolkov-v-rige-cena-ot-eurodizains"
          element={<Ceilings />}
        />
        <Route
          path="/ceiling-finishing-riga-price-from-eurodizains"
          element={<Ceilings />}
        />
        <Route path="/aploma-oyranofonias-riga" element={<Ceilings />} />

        <Route path="/gridu-remonts-riga-eurodizains" element={<Floors />} />
        <Route path="/remont-polov-v-rige-eurodizains" element={<Floors />} />
        <Route path="/floor-renovation-riga-eurodizains" element={<Floors />} />
        <Route path="/anakainisi-dapedon-riga" element={<Floors />} />

        <Route
          path="/santehniskie-darbi-santehniskie-pakalpojumi-riga"
          element={<Plumbing />}
        />
        <Route
          path="/santehnicheskie-raboty-santehnicheskie-uslugi-v-rige"
          element={<Plumbing />}
        />
        <Route
          path="/plumbing-services-and-plumbing-works-riga"
          element={<Plumbing />}
        />
        <Route path="/ydravlika-ergasies-riga" element={<Plumbing />} />

        <Route
          path="/sienu-apdare-riga-cena-no-eurodizains"
          element={<Walls />}
        />
        <Route
          path="/otdelka-sten-v-rige-cena-РѕС‚-eurodizains"
          element={<Walls />}
        />
        <Route
          path="/wall-finishing-riga-price-from-eurodizains"
          element={<Walls />}
        />
        <Route path="/epifania-toichon-riga" element={<Walls />} />

        <Route path="/elektromontazas-darbi-riga" element={<Electrics />} />
        <Route
          path="/elektromontazhnye-raboty-v-rige"
          element={<Electrics />}
        />
        <Route
          path="/electrical-installation-works-riga"
          element={<Electrics />}
        />
        <Route path="/ilektrologikes-ergasies-riga" element={<Electrics />} />

        <Route path="/ailu-ierikosana" element={<Openings />} />
        <Route path="/ustroystvo-proemov" element={<Openings />} />
        <Route path="/doorway-installation-riga" element={<Openings />} />
        <Route path="/kataskevi-anoigmaton" element={<Openings />} />

        <Route
          path="/demontazas-darbi-cenas-no-eurodizains"
          element={<Demolition />}
        />
        <Route
          path="/demontazhnye-raboty-rascenki-ot-eurodizains"
          element={<Demolition />}
        />
        <Route
          path="/demolition-works-prices-from-eurodizains"
          element={<Demolition />}
        />
        <Route path="/katedafiseis-ergasies-riga" element={<Demolition />} />

        <Route
          path="/apdares-darbi-cenas-riga-dzivoklu-un-maju-iekseja-apdare"
          element={<Finishing />}
        />
        <Route
          path="/otdelochnye-raboty-ceny-v-rige-vnutrennyaya-otdelka-kvartir-i-doma"
          element={<Finishing />}
        />
        <Route
          path="/finishing-works-riga-interior-finishing-for-homes-and-flats"
          element={<Finishing />}
        />
        <Route
          path="/telikes-ergasies-esoterikou-chorou"
          element={<Finishing />}
        />

        {/* ---------------------- */}
        {/* DESIGN MAIN */}
        {/* ---------------------- */}
        <Route path="/interjera-dizains-riga" element={<DesignHome />} />
        <Route path="/dizayn-interera-v-rige" element={<DesignHome />} />
        <Route path="/interior-design-riga" element={<DesignHome />} />
        <Route path="/design-esoterikou-chorou-riga" element={<DesignHome />} />

        {/* ---------------------- */}
        {/* DESIGN PROJECT PAGES */}
        {/* ---------------------- */}
        <Route path="/dizaina-projekta-sastavs" element={<Composition />} />
        <Route path="/sostav-dizayn-proekta" element={<Composition />} />
        <Route path="/interior-design-composition" element={<Composition />} />
        <Route path="/synthesi-design-proetou" element={<Composition />} />

        <Route
          path="/dizaina-projekts-standard"
          element={<ProjectStandard />}
        />
        <Route
          path="/dizayn-proekt-standartnyy"
          element={<ProjectStandard />}
        />
        <Route
          path="/interior-design-project-standard"
          element={<ProjectStandard />}
        />
        <Route path="/design-proeto-standard" element={<ProjectStandard />} />

        <Route path="/dizaina-projekts-premium" element={<ProjectPremium />} />
        <Route path="/dizayn-proekt-premium" element={<ProjectPremium />} />
        <Route
          path="/interior-design-project-premium"
          element={<ProjectPremium />}
        />
        <Route path="/design-proeto-premium" element={<ProjectPremium />} />

        <Route path="/dizaina-projekts-vip" element={<ProjectVip />} />
        <Route path="/dizayn-proekt-vip" element={<ProjectVip />} />
        <Route path="/interior-design-project-vip" element={<ProjectVip />} />
        <Route path="/design-proeto-vip" element={<ProjectVip />} />

        <Route path="/3d-vizualizacija" element={<Visualization3D />} />
        <Route path="/3d-vizualizaciya" element={<Visualization3D />} />
        <Route path="/3d-visualization" element={<Visualization3D />} />
        <Route path="/3d-visualization" element={<Visualization3D />} />

        <Route
          path="/remonta-autoruzraudziba"
          element={<AuthorSupervision />}
        />
        <Route
          path="/avtorskiy-nadzor-nad-remontom"
          element={<AuthorSupervision />}
        />
        <Route
          path="/interior-design-author-supervision"
          element={<AuthorSupervision />}
        />
        <Route
          path="/epopteia-schediasmou-esoterikou-chorou"
          element={<AuthorSupervision />}
        />

        <Route path="/garantija" element={<DesignGuarantees />} />
        <Route path="/garantii-0" element={<DesignGuarantees />} />
        <Route
          path="/interior-design-warranty"
          element={<DesignGuarantees />}
        />
        <Route path="/engyisi-design" element={<DesignGuarantees />} />

        <Route
          path="/atlaides-interjera-dizainam"
          element={<DesignDiscounts />}
        />
        <Route
          path="/skidki-na-dizayn-interera"
          element={<DesignDiscounts />}
        />
        <Route
          path="/interior-design-discounts"
          element={<DesignDiscounts />}
        />
        <Route
          path="/ekptoseis-design-esoterikou-chorou"
          element={<DesignDiscounts />}
        />

        {/* ---------------------- */}
        {/* DESIGN CLIENT TYPES */}
        {/* ---------------------- */}
        <Route
          path="/dizains-un-dzivoklu-remonts"
          element={<LivingRoomDesign />}
        />
        <Route path="/dizayn-i-remont-kvartir" element={<LivingRoomDesign />} />
        <Route
          path="/apartment-interior-design"
          element={<LivingRoomDesign />}
        />
        <Route path="/design-diamerismatos" element={<LivingRoomDesign />} />

        <Route path="/node/289" element={<HouseDesign />} />
        <Route path="/majas-dizains" element={<HouseDesign />} />
        <Route path="/house-interior-design" element={<HouseDesign />} />
        <Route path="/design-katoikias" element={<HouseDesign />} />

        <Route path="/dekoresana" element={<Decoration />} />
        <Route path="/dekorirovanie" element={<Decoration />} />
        <Route path="/interior-decor" element={<Decoration />} />
        <Route path="/diakosmisi-esoterikou-chorou" element={<Decoration />} />

        <Route path="/telpu-dizains" element={<InteriorDesign />} />
        <Route path="/dizayn-pomeshcheniy" element={<InteriorDesign />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/design-esoterikon-choron" element={<InteriorDesign />} />

        <Route path="/biroju-dizains" element={<OfficeDesign />} />
        <Route path="/dizayn-ofisov" element={<OfficeDesign />} />
        <Route path="/office-interior-design" element={<OfficeDesign />} />
        <Route path="/design-grafeion" element={<OfficeDesign />} />

        <Route
          path="/kafejnicas-un-restorana-dizains"
          element={<RestaurantDesign />}
        />
        <Route path="/dizayn-restorana-i-kafe" element={<RestaurantDesign />} />
        <Route
          path="/restaurant-interior-design"
          element={<RestaurantDesign />}
        />
        <Route path="/design-estiatopion" element={<RestaurantDesign />} />

        <Route path="/naktsklubu-dizains" element={<ClubDesign />} />
        <Route path="/dizayn-nochnogo-kluba" element={<ClubDesign />} />
        <Route path="/nightclub-interior-design" element={<ClubDesign />} />
        <Route path="/design-nychtinou-klubou" element={<ClubDesign />} />
      </Routes>
    </>
  );
}

