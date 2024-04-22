import Image from "next/image";
import HeroComponent from "./_components/home-page/hero-component";

import data from "@/app/_data/general-data.json";

export default function Home() {
  const {
    homePage: {
      about: { paragraphs, image: aboutImage },
    },
  } = data;

  return (
    <>
      <HeroComponent />
      <main className="pt-20 grid gap-10 bg-[url('/images/monks-medical-16.jpg')] -mx-7 p-7 min-[800px]:grid-cols-[1fr_250px] desktopSmall:grid-cols-[1fr_0.75fr] desktopSmall:-mx-[200px] desktopSmall:px-[200px]">
        <h2 className="min-[800px]:hidden">Dr. Kyle Rorke</h2>
        <div className="grid gap-4 order-2 min-[800px]:order-1 place-content-start">
          <h2 className="hidden mb-6 min-[800px]:block">Dr. Kyle Rorke</h2>
          {paragraphs.map((item, index) => (
            <p key={index} className="text-center min-[800px]:text-justify">
              {item}
            </p>
          ))}
        </div>
        <Image
          src={aboutImage}
          alt="Dr. Kyle Rorke"
          width={600}
          height={900}
          className="aspect-[3/4] phone:max-h-[450px] min-[800px]:max-h-fit min-[500px]:object-top min-[800px]:order-2 desktopSmall:aspect-square"
        />
      </main>
    </>
  );
}
