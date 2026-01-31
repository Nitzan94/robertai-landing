import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RobertAI - Custom AI Agents for Business",
  description: "We build, deploy, and manage custom AI agents that automate your workflows, handle customer support, and integrate with all your tools.",
  keywords: "AI agents, AI automation, custom AI, business automation, AI assistant, chatbot",
  openGraph: {
    title: "RobertAI - Custom AI Agents for Business",
    description: "We build, deploy, and manage custom AI agents that automate your workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
