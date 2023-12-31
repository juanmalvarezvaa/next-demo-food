import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Next Demo Food",
  description: "NextJS Demo application for food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
