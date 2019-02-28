import { createDocument, Editor, Plugin } from '@edtr-io/core'
import { spoilerPlugin } from '@edtr-io/plugin-spoiler'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { blockquotePlugin } from '@edtr-io/plugin-blockquote'

const plugins: Record<string, Plugin<any>> = {
  spoiler: spoilerPlugin,
  blockquote: blockquotePlugin
}

storiesOf('SpoilerPlugin', module).add('Empty example', () => {
  const state = createDocument({
    plugin: 'spoiler'
  })
  return <Editor plugins={plugins} defaultPlugin="blockquote" state={state} />
})
