import Image from "next/image";

interface Props {
  folder: string;
  file: string;
  pictureCssClasses?: string;
  priority?: boolean;
  cssClasses?: string;
  phoneSize: number;
  tabletSize: number;
  desktopSmallSize: number;
  desktopSize: number;
  phoneBreakpoint?: number;
  tabletBreakpoint?: number;
  desktopSmallBreakpoint?: number;
}

const ImageComponent = ({
  folder,
  file,
  cssClasses,
  pictureCssClasses,
  priority,
  phoneSize,
  tabletSize,
  desktopSmallSize,
  desktopSize,
  phoneBreakpoint,
  tabletBreakpoint,
  desktopSmallBreakpoint,
}: Props) => {
  return (
    <picture className={pictureCssClasses}>
      <source
        media={`(max-width:${phoneBreakpoint || 400}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${phoneSize},q-75/${file}`}
      />
      <source
        media={`(max-width:${tabletBreakpoint || 600}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${tabletSize},q-65/${file}`}
      />
      <source
        media={`(max-width:${desktopSmallBreakpoint || 1100}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${desktopSmallSize},q-75/${file}`}
      />
      <Image
        src={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${desktopSize},q-75/${file}`}
        alt="Monk's Medical by Dr Kyle Rorke - Plettenberg Bay"
        loading={priority ? "eager" : "lazy"}
        width={desktopSize}
        height={desktopSize * 1.25}
        className={cssClasses}
      />
    </picture>
  );
};

export default ImageComponent;
