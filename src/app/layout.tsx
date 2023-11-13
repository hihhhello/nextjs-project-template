import { QueryClientProvider } from '@/features/QueryClientProvider';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { BaseLayout } from '@/app/_ui/BaseLayout';
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer />

          <BaseLayout>{children}</BaseLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
