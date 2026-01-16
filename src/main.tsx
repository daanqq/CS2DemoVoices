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
        placeholder: '"2, 8, 5, 4, 6" or "2 8 5 4 6"',
        instructionsTitle: 'How to use the app:',
        instructionsStep1: '1. Open the demo',
        instructionsStep2: '2. Use console commands \'spec_player 1\', \'spec_player 2\', \'spec_player 3\' etc. to switch between players',
        instructionsStep3: '3. Remember the spec_player IDs of players whose voices you want to hear',
        instructionsStep4: '4. Enter these spec_player IDs in the field below in any order',
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
        placeholder: '"2, 8, 5, 4, 6" или "2 8 5 4 6"',
        instructionsTitle: 'Как использовать приложение:',
        instructionsStep1: '1. Откройте демо',
        instructionsStep2: '2. Используйте консольные команды \'spec_player 1\', \'spec_player 2\', \'spec_player 3\' и т.д. для переключения между игроками',
        instructionsStep3: '3. Запомните spec_player ID игроков, голоса которых хотите слышать',
        instructionsStep4: '4. Введите эти spec_player ID в поле ниже в произвольном порядке',
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
