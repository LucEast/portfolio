import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/common/theme/theme-provider';
import { ModeToggle } from '@/common/theme/mode-toggler';
import { LanguageSwitcher } from '@/common/components/shared/language-switcher';

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
    <html className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="fixed right-2 top-2 z-[99] flex gap-2 sm:bottom-6 sm:left-6 sm:right-auto sm:top-auto sm:flex-col">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
            <Toaster position="top-right" />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
