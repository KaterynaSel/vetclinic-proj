import type { Metadata } from "next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ветеринарна клініка — догляд за вашими улюбленцями",
  description:
    "Сучасна ветеринарна клініка: консультації, вакцинація, стерилізація та діагностика. Запишіться на прийом онлайн.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
