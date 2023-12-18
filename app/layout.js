import './globals.css'

export const metadata = {
  title: 'Next Demo Food',
  description: 'NextJS Demo application for food.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
