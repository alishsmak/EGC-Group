export interface ITextProps {
  element?: "p" | "span";
  variant?: "regular" | "medium" | "semibold" | "bold";
  size?:
    | "header1"
    | "header2"
    | "header3"
    | "header4"
    | "header5"
    | "header6"
    | "body1"
    | "body2"
    | "body3";
  className?: string;
}
