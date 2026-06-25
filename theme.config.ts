import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/images/site/dplogo.png'

export default defineThemeConfig({
  name: 'Dialectical Praxis',
  id: 'dialectical-praxis',
  seo: {
    title: 'Dialectical Praxis',
    description:
      'The academic work and writing of Derron Borders — adult learning, critical pedagogy, social epistemology, and liberatory praxis.',
    author: 'Derron Borders',
    image: logoImage,
  },
  logo: logoImage,
  colors: {
    // Minimal charcoal + cream palette with a single terracotta accent.
    // These four feed the scales/semantic colors in _root.scss. All WCAG AA+.
    primary: '#2d2c2c', // deep charcoal (dark-mode background)
    secondary: '#403e3e', // charcoal (body text)
    neutral: '#f6f5f3', // cream (light-mode background)
    outline: '#403e3e', // charcoal (no separate accent — charcoal & cream only)
  },
  navigation: {
    darkmode: true,
    items: [
      { type: 'link', label: 'Home', href: '/' },
      {
      type: 'dropdown',
      label: 'About',
      items: [
        { label: 'Education', href: '/#education' },
        { label: 'Scholarship', href: '/#scholarship' },
        { label: 'Organizing', href: '/#organizing' },
      ],
    },
      { type: 'link', label: 'Projects', href: '/projects' },
      { type: 'link', label: 'Writing', href: '/writing' },
      { type: 'link', label: 'CV', href: '/cv' },
      { type: 'link', label: 'Contact', href: '/contact' },
    ],
  },
  socials: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=K4fEPEIAAAAJ&hl=en',
      icon: 'lucide:graduation-cap',
      external: true,
    },
    {
      label: 'ORCiD',
      href: 'https://orcid.org/0009-0008-0286-4511',
      icon: 'lucide:badge',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/dialecticalpraxis',
      icon: 'lucide:github',
      external: true,
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/dialecticalpraxis.com',
      icon: 'lucide:cloud',
      external: true,
    },
  ],
})
