import BannerAd from "@/components/BannerAd";
import CardInfo from "@/components/CardInfo";
import ReviewBanner from "@/components/ReviewBanner";
import About from "@/components/About";
import Header from "@/components/header/Header";
import Appointments from "@/components/appointments/Appointments";
import FAQs from "@/components/faqs/FAQs";
import Pharmacies from "@/components/pharmacies/Pharmacies";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <body
      className={
        "m-0 flex flex-col items-center font-['Proxima_Nova_Semibold'] text-greentwo"
      }
    >
      <Header />
      <main
        className={
          "flex w-3/4 flex-col items-center gap-16 text-greytwo xl:gap-32"
        }
      >
        <Appointments />
        <BannerAd />
        <CardInfo />
        <ReviewBanner />
        <FAQs />
        <Pharmacies />
        <About />
      </main>
      <Footer />
    </body>
  );
}
