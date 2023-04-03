import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenety',
  title: 'Amenety',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(selection) {
      return Object.assign({}, selection)
    },
  },
})
