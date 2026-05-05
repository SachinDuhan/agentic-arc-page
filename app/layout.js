import "./globals.css";

export const metadata = {
  title: "Agentic Arc | SVIT Bengaluru",
  description:
    "Agentic Arc — the Agentic AI Club of the Department of CSE (AI & ML) at Sai Vidya Institute of Technology, Bengaluru. Building intelligent, autonomous AI systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
