/**
 * Método que sirve para parsear la configuración SEO de una página
 * y convertirla en el formato requerido por vue-meta.
 *
 * @author jualoppaz
 */
function getCommonMetas(seoConfig) {
  const obj = {
    meta: [],
    link: [],
  };

  if (seoConfig.title) obj.title = seoConfig.title;
  // Standard metas
  if (seoConfig.description) {
    obj.meta.push({
      hid: 'description',
      name: 'description',
      content: seoConfig.description,
    });
  }
  if (seoConfig.keywords) {
    obj.meta.push({
      hid: 'keywords',
      name: 'keywords',
      content: seoConfig.keywords,
    });
  }
  if (seoConfig.canonical_url) {
    obj.link.push({
      rel: 'canonical',
      href: seoConfig.canonical_url,
    });
  }

  // Open Graph metas
  if (seoConfig.og_title) {
    obj.meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: seoConfig.og_title,
    });
  }
  if (seoConfig.og_type) {
    obj.meta.push({
      hid: 'og:type',
      property: 'og:type',
      content: seoConfig.og_type,
    });
  }
  if (seoConfig.og_image) {
    obj.meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: seoConfig.og_image,
    });
  }
  if (seoConfig.og_url) {
    obj.meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: seoConfig.og_url,
    });
  }
  if (seoConfig.og_description) {
    obj.meta.push({
      hid: 'og:description',
      property: 'og:description',
      content: seoConfig.og_description,
    });
  }
  if (seoConfig.og_site_name) {
    obj.meta.push({
      hid: 'og:site_name',
      property: 'og:site_name',
      content: seoConfig.og_site_name,
    });
  }

  // Twitter metas
  if (seoConfig.twitter_site) {
    obj.meta.push({
      hid: 'twitter:site',
      name: 'twitter:site',
      content: seoConfig.twitter_site,
    });
  }
  if (seoConfig.twitter_card) {
    obj.meta.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      content: seoConfig.twitter_card,
    });
  }
  if (seoConfig.twitter_image) {
    obj.meta.push({
      hid: 'twitter:image',
      name: 'twitter:image',
      content: seoConfig.twitter_image,
    });
  }
  if (seoConfig.twitter_title) {
    obj.meta.push({
      hid: 'twitter:title',
      name: 'twitter:title',
      content: seoConfig.twitter_title,
    });
  }
  if (seoConfig.twitter_description) {
    obj.meta.push({
      hid: 'twitter:description',
      name: 'twitter:description',
      content: seoConfig.twitter_description,
    });
  }

  return obj;
}

export default {
  getCommonMetas,
};
