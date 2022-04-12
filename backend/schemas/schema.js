// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  
  // We name our schema
  name: 'BD-Animals',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Animals",
      name: "Animals",
      type: "document",
      fields: [
        { title: "Name", name: "name", type: "string", },
        { title: 'Image', name: 'image', type: 'image', },
        { title: "Type", name: "type", type: "string", },
        { title: "Function", name: "function", type: "string", },
        { title: "Location", name: "location", type: "string", }
      ]
    }
  ])
})