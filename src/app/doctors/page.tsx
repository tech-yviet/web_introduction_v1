import { Footer } from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { DoctorsFeature } from "@/modules/doctors/DoctorsFeature";

export default function Doctors() {
  return (
    <div className="bg-doctors-gradient-mobile">
      <Header isFixed={true} />
      <DoctorsFeature />
      <Footer />
    </div>
  );
}
