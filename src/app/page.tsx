import HomeFeature from "@/modules/home/HomeFeature";
import { Footer } from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function Home() {
  return (
    <div className="bg-mobile-gradient md:bg-desktop-gradient overflow-scroll scrollbar-hide ">
      <Header />
      <HomeFeature />
      <Footer />
    </div>
  );
}
