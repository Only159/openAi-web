
import { Inter } from "next/font/google";

import "./styles/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata={
  title: "ChatGPT-HZQ",
  description: "您的 ChatGPT 贴心助手！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
