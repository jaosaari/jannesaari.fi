//? First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

//? Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//? We import object and document schemas
// import photos from './objects/photos'
import blockContent from './objects/block-content'
import dates from './objects/dates'
import seo from './objects/seo'
import label from './documents/label'
import labelCategory from './documents/label-category'
import hero from './modules/hero'
import featured from './modules/featured'
import history from './modules/history'
import page from './documents/page'
import feature from './documents/feature'
import experience from './documents/experience'
import generalSettings from './documents/settings-general'
import footerSettings from './documents/settings-footer'
import headerSettings from './documents/settings-header'
import seoSettings from './documents/settings-seo'

//? Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  //? We name our schema
  name: 'default',
  //? Then proceed to concatenate our document type
  //? to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //? The following are document types which will appear
    //? in the studio.

    //* Objects
    dates,
    // photos,
    seo,
    
    //* Modules
    hero,
    featured,
    history,

    //* Documents
    page,
    feature,
    experience,
    label,
    labelCategory,

    //* Settings Documents
    generalSettings,
    footerSettings,
    headerSettings,
    seoSettings,
    
    //? When added to this list, object types can be used as
    //? { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
