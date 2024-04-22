import Image from "next/image";

import HeroComponent from "./_components/home-page/hero-component";
import Button from "./_components/button";

import data from "@/app/_data/general-data.json";
import classNames from "classnames";

export default function Home() {
  const {
    homePage: {
      about: { paragraphs, kylesImage, images },
    },
  } = data;

  return (
    <>
      <HeroComponent />
      <main className="py-20 bg-[url('/images/monks-medical-16.jpg')] -mx-7 p-7 desktopSmall:-mx-[200px] desktopSmall:px-[200px]">
        <div className="grid gap-10 min-[800px]:grid-cols-3">
          <h2 className="min-[800px]:hidden">Dr. Kyle Rorke</h2>
          <div className="grid gap-4 order-2 min-[800px]:order-1 place-content-start min-[800px]:col-span-2">
            <h2 className="hidden mb-6 min-[800px]:block">Dr. Kyle Rorke</h2>
            {paragraphs.map((item, index) => (
              <p key={index} className="text-center min-[800px]:text-justify">
                {item}
              </p>
            ))}
            <Button
              link="mailto:reception@monksmedical.com"
              backgroundColor="light brown"
              cssClasses="mt-6 desktopSmall:mr-auto"
            >
              Book a consultation
            </Button>
          </div>
          <Image
            src={kylesImage}
            alt="Dr. Kyle Rorke from Monk's Medical - Plettenberg Bay"
            width={600}
            height={900}
            className="aspect-[3/4] phone:max-h-[450px] min-[800px]:max-h-fit min-[500px]:object-top min-[800px]:order-2 desktopSmall:aspect-square"
          />
        </div>
        <div className="grid gap-10 tablet:grid-cols-2 min-[800px]:grid-cols-3">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Monk's Medical by Dr Kyle Rorke - Plettenberg Bay"
              width={600}
              height={400}
              className={classNames("aspect-video", {
                "tablet:col-span-2 tablet:aspect-[16/7] min-[800px]:col-auto min-[800px]:aspect-video":
                  index === 2,
              })}
            />
          ))}
        </div>
      </main>
    </>
  );
}
