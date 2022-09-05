import React from 'react'
import {
  createIconComponentFromSimpleIconsSvgPath,
  getForegroundColor
} from '@consent-manager/core'

import Translate, { translate } from '@docusaurus/Translate'
import YouTube from 'simple-icons/icons/youtube'

export function youtubeIntegration() {
  const { title, slug, hex, path } = YouTube
  const color = `#${hex}`
  const contrastColor = getForegroundColor(color)
  const Icon = createIconComponentFromSimpleIconsSvgPath(title, path)

  return {
    id: slug,
    title,
    category: 'Videos',
    color,
    contrastColor,
    Icon,
    // TODO: Probe current language dynamically
    // privacyPolicyUrl: `https://policies.google.com/privacy?hl=${lang}`,
    privacyPolicyUrl: translate(
      {
        message: "https://policies.google.com/privacy?hl=de-de",
        id: "consent-manager.youtube.policy"
      }),
    description:
      <Translate id="consent-manager.youtube.description">
        Genießen Sie die Videos und Musik,
        die Sie lieben, laden Sie Originalinhalte hoch und teilen Sie alles mit Freunden,
        Familie und der ganzen Welt auf YouTube.
      </Translate>
  }
}
