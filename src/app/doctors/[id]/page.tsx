import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function DoctorPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <Header isFixed={true} />
      <div className="h-screen text-black">Test {id}</div>
      <Footer />
    </div>
  );
}
