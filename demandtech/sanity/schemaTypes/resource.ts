import { defineField, defineType } from 'sanity'

export const resource = defineType({
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Resource Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Whitepaper', value: 'whitepaper' },
                    { title: 'eBook', value: 'ebook' },
                    { title: 'Guide', value: 'guide' },
                    { title: 'Template', value: 'template' },
                    { title: 'Checklist', value: 'checklist' },
                    { title: 'Webinar', value: 'webinar' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: 'file',
            title: 'File',
            type: 'file',
            options: {
                accept: '.pdf,.doc,.docx,.ppt,.pptx',
            },
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type',
            media: 'coverImage',
        },
    },
})