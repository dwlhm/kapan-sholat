import { ReactNode } from "react";

export interface TextBaseProps {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string
}

export default ({
  children,
  color = "text-gray-900",
  fontSize = "text-normal",
  fontWeight = "font-normal",
  textAlign = "text-left"
}: TextBaseProps) => (
  <p
    data-testid="text-base"
    className={[
      color,
      fontSize,
      fontWeight,
      textAlign,
      "leading-relaxed",
    ].join(" ")}
  >
    {children}
  </p>
);
