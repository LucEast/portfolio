'use client'

import React, { useState, createContext, useContext, useEffect } from 'react'

export type Locale = 'de' | 'en'

type LocaleContextType = {
  locale: Locale
  setLocale: React.Dispatch<React.SetStateAction<Locale>>
}

export const LocaleContext = createContext<LocaleContextType | null>(null)

const STORAGE_KEY = 'locale'

export default function LocaleContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState<Locale>('de')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (context === null) {
    throw new Error('useLocale must be used within a LocaleContextProvider')
  }

  return context
}
