import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "../../styles/globals.css";

export const metadata = {
  title: "Aplus Admin Dashboard",
};

export default function AdminLayout({ children }) {
  

  return (
    <>
      {/* Sidebar */}
      <html lang="en" className="scroll-smooth">
      <body className={``}>
        <main className=""><>{children}</></main>
      </body>
    </html>
    </>
  );
}
