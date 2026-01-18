import React from 'react'
import ReactDOM from 'react-dom/client'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import App from '@/App'
import { Toaster } from '@/components/ui/sonner'

import ru from './i18n/ru.json'
import en from './i18n/en.json'
import './index.css'

i18next.use(LanguageDetector).init({
  supportedLngs: ['ru', 'en'],
  resources: { ru, en }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
    <Toaster position="top-center" />
  </React.StrictMode>
)
