import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import LocaleContextProvider from '@/common/stores/locale';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import { ModeToggle } from '@/common/theme/mode-toggler';
import { LocaleToggle } from '@/common/components/shared/locale-toggler';

export const metadata: Metadata = {
  title: 'Lucas Ostmann | Portfolio',
  description:
    'Built using TypeScript, Next.js 15, Framer Motion and Tailwind CSS.',
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <LocaleContextProvider>
            <ActiveSectionContextProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
                <Footer />
                <div className="fixed left-1 right-auto top-1 z-[99] flex items-center gap-3 sm:bottom-6 sm:left-6 sm:top-auto">
                  <ModeToggle />
                  <LocaleToggle />
                </div>
                <Toaster position="top-right" />
              </ThemeProvider>
            </ActiveSectionContextProvider>
          </LocaleContextProvider>
        </div>
      </body>
    </html>
  );
}
