import { Section } from "./section";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <Section innerWidth="container.lg">{children}</Section>;
}
