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
        onClick={(e) => {
          window.open(`/static/images/${imgName}.svg`, "_blank");
        }}
        alt={alt}
        style={{ width: "100%", height: "auto", zIndex: 1000 }}
      />
    </picture>
  );
};

export const HeroImages = () => {
  return <HeroPicture alt="Sync Databases" imgName="env-sync" />;
};
