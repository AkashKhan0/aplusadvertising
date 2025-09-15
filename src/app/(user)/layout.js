import Navbar from "@/components/Navbar";
import "../../styles/globals.css";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Aplus Asvertising Limited",
  description:
    "A Plus Advertising Limited - Expert web design, eCommerce, SEO & digital marketing to grow your business online",
  keywords: [
    "Website development Bangladesh", "Website design Bangladesh", "Web developer Dhaka", "Web design company Dhaka", "WordPress development Bangladesh", "IT Farm Dhaka", "IT Company Dhaka", "Digital marketing Bangladesh", "SEO services Bangladesh", "eCommerce solutions Bangladesh", "Freelance web developer Dhaka", "Custom website design Bangladesh", "Responsive web design Bangladesh", "Web application development Bangladesh", "Website maintenance Bangladesh", "Affordable web design Bangladesh", "Professional web developer Dhaka", "Small business web design Bangladesh", "Corporate website design Bangladesh", "Website redesign services Bangladesh", "Local SEO services Dhaka", "Social media marketing Bangladesh", "Content marketing Bangladesh", "PPC advertising Bangladesh", "Email marketing Bangladesh", "Online branding Bangladesh", "Web hosting services Bangladesh", "Domain registration Bangladesh", "Website optimization Bangladesh", "Mobile-friendly web design Bangladesh", "UI/UX design services Bangladesh", "E-commerce website development Bangladesh", "Digital strategy consulting Bangladesh",
  ],
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={``}>
        <Navbar />
        <Footer />
        <ScrollToTop />
        <main className=""><SmoothScrollProvider>{children}</SmoothScrollProvider></main>
      </body>
    </html>
  );
}
