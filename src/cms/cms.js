import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
    media_folder: 'static/img',
    public_folder: '/img',
    collections: [
      {
        name: 'blog',
        label: 'blog',
        folder: 'src/pages/blog',
        create: true,
        fields: [
          {
            label: 'Template key',
            name: 'templateKey',
            widget: 'hidden',
            default: 'blog-post',
          },
          {
            label: 'title',
            name: 'title',
            widget: 'string',
          },
        ],
      },
    ],
  },
});

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
