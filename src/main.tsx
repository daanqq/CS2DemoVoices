import './index.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import { Toaster } from '@/components/ui/sonner'

i18next.use(LanguageDetector).init({
  supportedLngs: ['ru', 'en'],
  resources: {
    en: {
      translation: {
        next: 'Next',
        copy: 'Copy',
        again: 'Start again',
        back: 'Back',
        copied: 'The command has been copied',
        placeholder: '"2, 4, 5, 6, 8" or "2 4 5 6 8"',
        enterString: 'Execute',
        enterStringEnd: 'command in the console',
        enterStringDesc: 'Use the command and copy its result into the bottom field',
        atLeastOne: 'Enter atleast one spec_player number',
        result: 'The final command',
        resultDesc: 'Run it in the console',
        madeBy: 'made by',
        sourceCode: 'source_code'
      }
    },
    ru: {
      translation: {
        next: 'Далее',
        copy: 'Скопировать',
        again: 'Начать заново',
        back: 'Назад',
        copied: 'Команда скопирована',
        placeholder: '"2, 4, 5, 6, 8" или "2 4 5 6 8"',
        enterString: 'Выполни команду',
        enterStringEnd: 'в консоли',
        enterStringDesc: 'Используй команду и скопируй результат в нижнее поле',
        atLeastOne: 'Введите хотя бы один номер spec_player',
        result: 'Итоговая команда',
        resultDesc: 'Используй её в консоли',
        madeBy: 'cделал',
        sourceCode: 'исходный_код'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
    <Toaster position="top-center" />
  </React.StrictMode>
)
