'use client';

import { Button } from '@/common/components/ui';
import { useLocale } from '@/common/stores/locale';
import { useHasMounted } from '@/common/lib/hooks';

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const hasMounted = useHasMounted();

  const toggleLocale = () => {
    setLocale(locale === 'de' ? 'en' : 'de');
  };

  if (!hasMounted) return null;

  return (
    <Button
      className="bg-transparent p-0 text-xs font-semibold text-gray-700 opacity-80 dark:text-white"
      size={'sm'}
      onClick={toggleLocale}
      aria-label="Toggle language"
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </Button>
  );
}
