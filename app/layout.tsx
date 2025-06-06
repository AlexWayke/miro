import { Toaster } from '@/components/ui/sonner';
import './globals.css';

import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { ModalProvider } from '@/providers/modal-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
