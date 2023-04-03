import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navoptions',
  title: 'NavBarOptions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'hotels',
      title: 'Hotels',
      type: 'array',
      of: [{type: 'reference', to: {type: 'hotel'}}],
    }),
  ],
})
