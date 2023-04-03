import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'package',
  title: 'Tour Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
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
