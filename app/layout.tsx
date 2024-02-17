import Navigation from "../components/navigation";
import "../styles/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // 문자열 스트링 추가
    template: "%s | Next Movies",
    default: "Loading...",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
