import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hotel',
  title: 'Hotel',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer().max(5),
    }),
    defineField({
      name: 'card_amenities',
      title: 'Card Amenities',
      type: 'string',
    }),
    defineField({
      name: 'card_amenities_ref',
      title: 'Card Amenities Icons',
      type: 'array',
      of: [{type: 'reference', to: {type: 'amenety'}}],
    }),
    defineField({
      name: 'meta_title',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'meta_desc',
      title: 'Meta Description',
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
      name: 'id',
      title: 'ID',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'map',
      title: 'Map Link',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{type: 'reference', to: {type: 'amenety'}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
            {
              name: 'ameneties',
              title: 'Ameneties',
              type: 'string',
            },
            {
              name: 'info',
              title: 'Info',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'totalRooms',
              title: 'Total Rooms',
              type: 'number',
            },
            {
              name: 'guests',
              title: 'Total Guests',
              type: 'number',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{type: 'image', options: {hotspot: true}}],
            },
            {
              name: 'plans',
              title: 'Plans',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'price',
                      title: 'Price',
                      type: 'number',
                    },
                    {
                      name: 'info',
                      title: 'Info',
                      type: 'string',
                    },
                    {
                      name: 'price_planner',
                      title: 'Price Planner',
                      type: 'array',
                      of: [
                        {
                          name: 'date_range',
                          title: 'Date Range',
                          type: 'object',
                          fields: [
                            {
                              name: 'starting_date',
                              title: 'Starting Date',
                              type: 'date',
                            },
                            {
                              name: 'ending_date',
                              title: 'Ending Date',
                              type: 'date',
                            },
                            {
                              name: 'price',
                              title: 'Price',
                              type: 'number',
                              validation: (Rule) => Rule.integer().positive(),
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'features',
                      title: 'Features',
                      type: 'array',
                      of: [
                        {
                          name: 'feature',
                          title: 'Feature',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    defineField({
      name: 'hotel_description',
      title: 'Hotel Description',
      type: 'array',
      of: [
        {
          name: 'desc_point',
          title: 'Description Point',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'hotel_amenities',
      title: 'Hotel Amenities',
      type: 'array',
      of: [
        {
          name: 'amenety_name',
          title: 'amenety',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'hotel_nearby_places',
      title: 'Hotel Nearby Places',
      type: 'array',
      of: [
        {
          name: 'place',
          title: 'Nearby Place',
          type: 'object',
          fields: [
            {
              name: 'nearby_place_name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'nearby_place_link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'images',
    },
    prepare(selection) {
      return Object.assign({}, selection)
    },
  },
})
