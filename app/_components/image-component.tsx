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
  altIndex?: number;
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
  altIndex,
}: Props) => {
  return (
    <picture className={pictureCssClasses}>
      {/* standard res devices */}
      <source
        media={`(max-width:${phoneBreakpoint || 400}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          phoneSize * 1.25
        },q-75/${file}`}
      />
      <source
        media={`(max-width:${tabletBreakpoint || 600}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          tabletSize * 1.25
        },q-65/${file}`}
      />
      <source
        media={`(max-width:${desktopSmallBreakpoint || 1100}px)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          desktopSmallSize * 1.25
        },q-75/${file}`}
      />
      {/* high res devices */}
      <source
        media={`(max-width:${
          phoneBreakpoint || 400
        }px) and (min-resolution: 2dppx)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          phoneSize * 2
        },q-75/${file}`}
      />
      <source
        media={`(max-width:${
          tabletBreakpoint || 600
        }px) and (min-resolution: 2dppx)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          tabletSize * 2
        },q-75/${file}`}
      />
      <source
        media={`(max-width:${
          desktopSmallBreakpoint || 1100
        }px) and (min-resolution: 2dppx)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          desktopSmallSize * 2
        },q-75/${file}`}
      />
      <source
        media={`(min-width:${
          desktopSmallBreakpoint || 1101
        }px) and (min-resolution: 2dppx)`}
        srcSet={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          desktopSize * 2
        },q-75/${file}`}
      />
      <Image
        src={`https://ik.imagekit.io/thewrightdesigns/monks-medical/${folder}/tr:w-${
          desktopSize * 1.25
        },q-75/${file}`}
        alt={`Monk's Medical by Dr Kyle Rorke - Plettenberg Bay ${altIndex}`}
        loading={priority ? "eager" : "lazy"}
        width={desktopSize}
        height={desktopSize * 1.25}
        className={cssClasses}
      />
    </picture>
  );
};

export default ImageComponent;
