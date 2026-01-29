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
            {/* Desktop only: Bottom left corner */}
            <div className="hidden sm:flex fixed bottom-6 left-6 z-[99] flex-col gap-2">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
            {/* Mobile: Switchers are in hamburger menu */}
            <Toaster position="top-right" />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
