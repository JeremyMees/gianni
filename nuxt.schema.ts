import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    navigation: group({
      title: 'Navigation',
      description: 'Navigation configuration',
      fields: {
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Link columns',
          default: [],
        }),
      },
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration',
      fields: {
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Link columns',
          default: [],
        }),
      },
    }),
  },
})
