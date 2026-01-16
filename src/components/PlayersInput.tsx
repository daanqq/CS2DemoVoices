import i18next from 'i18next'
import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useStore } from '@/store'
import { Input } from './ui/input'

const PlayersInput = () => {
  const {
    stringToParse,
    setStringToParse,
    copyCommand
  } = useStore()

  const placeholder = i18next.t('placeholder')

  return (
    <motion.div
      initial={{ x: '5%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-5%', opacity: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>
            {i18next.t('enterString')}
            <Button
              variant="outline"
              className="px-1 h-6 mx-1 rounded-sm"
              onClick={copyCommand}
            >
              voice_show_mute
            </Button>
            {i18next.t('enterStringEnd')}
          </CardTitle>
          <CardDescription>{i18next.t('enterStringDesc')}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input
            className="resize-none"
            placeholder={placeholder}
            value={stringToParse}
            spellCheck={false}
            onChange={(e) => setStringToParse(e.currentTarget.value)}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default PlayersInput
