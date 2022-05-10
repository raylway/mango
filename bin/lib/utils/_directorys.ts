import path from 'path';
import { getPath } from 'global-modules-path';

const _Directories = {
  theme: path.join(`${getPath('@shopackify/mango')}/bin/theme`, process.platform === 'win32' ? 'theme.exe' : 'theme'),
  shopRoot: path.resolve('./shop'),
  developmentRoot: path.resolve('./shop/src'),
  productionRoot: path.resolve('./shop/dist'),
  devRoot: path.resolve('./shop/src/dev'),
  staticRoot: path.resolve('./shop/src/dev/static'),
  stylesRoot: path.resolve('./shop/src/dev/styles'),
  stylesBase: path.resolve('./shop/src/dev/styles/base'),
  stylesComponents: path.resolve('./shop/src/dev/styles/components'),
  stylesMixins: path.resolve('./shop/src/dev/styles/mixins'),
  stylesSections: path.resolve('./shop/src/dev/styles/sections'),
  stylesTemplates: path.resolve('./shop/src/dev/styles/templates'),
  stylesTypography: path.resolve('./shop/src/dev/styles/typography'),
  stylesVariables: path.resolve('./shop/src/dev/styles/variables'),
  scriptsRoot: path.resolve('./shop/src/dev/js'),
  scriptsModuleRoot: path.resolve('./shop/src/dev/js/modules'),
  fontsRoot: path.resolve('./shop/src/dev/fonts'),
  imagesRoot: path.resolve('./shop/src/dev/images'),
  layoutRoot: path.resolve('./shop/src/layout'),
  templatesRoot: path.resolve('./shop/src/templates'),
  customersRoot: path.resolve('./shop/src/templates/customers'),
  snippetsRoot: path.resolve('./shop/src/snippets'),
  sectionsRoot: path.resolve('./shop/src/sections'),
  configRoot: path.resolve('./shop/src/config'),
  localesRoot: path.resolve('./shop/src/locales'),
  assetsRoot: path.resolve('./shop/src/assets'),
  distLayoutRoot: path.resolve('./shop/dist/layout'),
  distTemplatesRoot: path.resolve('./shop/dist/templates'),
  distCustomersRoot: path.resolve('./shop/dist/templates/customers'),
  distSnippetsRoot: path.resolve('./shop/dist/snippets'),
  distSectionsRoot: path.resolve('./shop/dist/sections'),
  distConfigRoot: path.resolve('./shop/dist/config'),
  distLocalesRoot: path.resolve('./shop/dist/locales'),
  distAssetsRoot: path.resolve('./shop/dist/assets'),
  configSettings: `${getPath('@shopackify/mango')}/bin/settings`
};

export default _Directories;
