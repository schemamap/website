type Dict = Record<string, any>;

export default {
  variants: {
    "nav-link": (props: Dict) => {
      const { isActive } = props;

      const hoverColor = "white";
      return {
        outline: "none",
        fontWeight: "500",
        color: isActive ? hoverColor : "whiteAlpha.700",
        transition: "color .2s ease-in",
        _hover: {
          textDecoration: "none",
          color: hoverColor,
        },
      };
    },
  },
};
