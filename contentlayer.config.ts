import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `**/*.md`,
  fields: {
    date: { type: 'date', required: true },
    title: { type: 'string', required: true },
    subTitle: { type: 'string', required: true },
    serviceImage: { type: 'string', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields: {
    service: {
      type: 'string',
      resolve: (service) => service._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'services',
  documentTypes: [Service],
})
