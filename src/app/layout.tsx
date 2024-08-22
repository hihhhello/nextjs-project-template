import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BaseLayout } from '@/app/_ui/BaseLayout';
import { NextAuthProvider } from '@/providers/NextAuthProvider';
import { QueryClientProvider } from '@/providers/QueryClientProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Nextjs13 Template',
  description: 'Created by Anton',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">
        <QueryClientProvider>
          <NextAuthProvider>
            <ToastContainer />

            <BaseLayout>{children}</BaseLayout>
          </NextAuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
