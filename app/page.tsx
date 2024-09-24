import Hero from "@/components/hero";
import Features from "@/components/features";
import Intergrations from "@/components/intergrations";
import Empowerement from "@/components/empowerement";
import PoweredBy from "@/components/poweredBy";
import BookingInfo from "@/components/bookings";
import FAQs from "@/components/FAQ";
import Contact from "@/components/Contact";
import Technologies from "@/components/Technologies/index"
export default function Home() {
  return (
    <>
      <Hero />
      <Technologies/>
      <Features/>
      <Intergrations/>
      <Empowerement/>
      <BookingInfo/>
      <FAQs/>
      <PoweredBy/>
      <Contact/>
    </>
  );
}
