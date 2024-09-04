import { getImageProps } from "next/image";

type ResponsiveImageTabPanelProps = {
  children?: React.ReactNode;
  alt: string;
  imgName: string;
};

const HeroPicture = ({ alt, imgName }: ResponsiveImageTabPanelProps) => {
  const common = { alt, width: 1800, height: 800 };
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: `static/images/${imgName}-vertical.svg`,
  });

  // FIXME: Naively opening the SVG URI with window.open results in 0x0 dimensions with Vercel hosting.
  // This is a workaround to open the SVG in a new tab.
  const handleImageClick = async () => {
    const url = encodeURI(
      `${window.location.origin}/static/images/${imgName}.svg`
    );
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok.");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    } catch (error) {
      console.error("Error fetching the SVG:", error);
    }
  };

  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={`static/images/${imgName}.svg`}
      />
      <source
        media="(max-width: 768px)"
        srcSet={`static/images/${imgName}-vertical.svg`}
      />
      <img
        onClick={handleImageClick}
        alt={alt}
        style={{ width: "100%", height: "auto", zIndex: 1000 }}
      />
    </picture>
  );
};

export const HeroImages = () => {
  return <HeroPicture alt="Sync Databases" imgName="env-sync" />;
};
