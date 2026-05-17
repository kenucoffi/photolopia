import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav_bar/Navbar";
import Sidebar from './components/Nav_bar/Sidebar'
import RightSidebar from "./components/Nav_bar/RightSidebar";
import Modula from "./Modula/Modula";
import LoginModal from "./Modula/LoginModal";
import SignUpModal from "./Modula/SignUpModal";
import BigImage  from "./profile/BigImage";
import ProfileImage from "./profile/ProfileImage";
import UserInfo from "./profile/UserInfo";
import ClientInfo from "./profile/ClintInfo";
import BioUpdate from "./profile/BioUpdate";
import Post_open from "./profile/Post";
import DetailPage from "./components/dynamic_page/detail";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photolopia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1/1.5 "> 
              <Sidebar/>
          </div>
        
          <div className="col-span-2 top-20 mt-30">
            {children}
          </div>
          
        </div>
        <LoginModal/>
        <SignUpModal/>
        <BigImage/>
        <ProfileImage/>
        <UserInfo/>
        <BioUpdate/>
        <Post_open/>
        <DetailPage/>
        <ClientInfo/>
      </body>
    </html>
  );
}
