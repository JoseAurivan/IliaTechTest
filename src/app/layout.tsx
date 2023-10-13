import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@/components/ReduxProvider";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export const metadata: Metadata = {
	title: "Technical Test Ilia"
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
      
			<body className='bg-body'>
				<div>
					<ReduxProvider>
						<Navbar></Navbar>
						{children}
						<Footer></Footer>
					</ReduxProvider>
				</div>
			</body>
		</html>
	);
}
