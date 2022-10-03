export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string'
    },
    {
      name: 'progress',
      title: 'Progress',
      description: 'Progress of skill rom 0 to 100%',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}