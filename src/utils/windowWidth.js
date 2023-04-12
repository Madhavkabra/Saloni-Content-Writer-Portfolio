export function windowHandler(width) {
  let pdfWidth = 1.2;

  if (width <= 375) pdfWidth = 0.55;
  else if (width <= 425) pdfWidth = 0.6;
  else if (width <= 768) pdfWidth = 1.1;
  else if (width <= 1024) pdfWidth = 1.4;
  else if (width <= 1440) pdfWidth = 1.5;
  else pdfWidth = 1.12;

  return pdfWidth;
}
