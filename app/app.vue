<script setup lang="ts">
useSchemaOrg([
  defineLocalBusiness({
    '@type': 'ProfessionalService',
    name: 'Kamino Media',
    description:
      'Videograaf en fotograaf in Limburg voor bruiloften, communies, lentefeesten, verjaardagen, babyborrels, feesten en aftermovies.',
    logo: '/img/logo.png',
    image: '/img/social-share.png',
    email: 'info.kaminomedia@gmail.com',
    telephone: '+32471072147',
    vatID: 'BE1014413132',
    priceRange: '€€',
    foundingDate: '2025',
    // Only the municipality on purpose: no street address for privacy reasons.
    address: {
      postalCode: '3590',
      addressLocality: 'Diepenbeek',
      addressRegion: 'Limburg',
      addressCountry: 'BE',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Limburg' },
    knowsAbout: [
      'Trouwvideografie',
      'Eventvideografie',
      'Aftermovies',
      'Dronebeelden',
      'Communies',
      'Lentefeesten',
      'Verjaardagen',
      'Babyborrels',
      'Familiefotografie',
    ],
    founder: { '@type': 'Person', name: 'Gianni Weyens' },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61567457746861',
      'https://www.instagram.com/kamino.media',
      'https://www.linkedin.com/company/kamino-media/',
      'https://www.youtube.com/@KaminoMedia',
    ],
  }),
  defineWebSite({ name: 'Kamino Media', inLanguage: 'nl-BE' }),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
