import HeroComponent from "./_components/home-page/hero-component";
import AboutComponent from "./_components/home-page/about-component";
import ServicesComponent from "./_components/home-page/services-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <div id="services" className=" desktopSmall:-translate-y-20"></div>
      <ServicesComponent />
    </>
  );
}
