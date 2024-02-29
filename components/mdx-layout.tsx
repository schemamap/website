import { Section } from "./section";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <Section innerWidth="container.lg">{children}</Section>;
}
