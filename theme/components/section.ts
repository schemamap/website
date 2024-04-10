const Section = {
  baseStyle: {
    pt: 20,
    pb: 20,
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: "primary.400",
    },
    alternate: ({ colorMode }: any) => ({
      bg: "gray.800",
    }),
  },
  defaultProps: {
    variant: "subtle",
  },
};

export default Section;
