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
      { type: 'link', label: 'About', href: '/#about' },
      { type: 'link', label: 'Scholarship', href: '/#scholarship' },
      { type: 'link', label: 'Education', href: '/#education' },
      { type: 'link', label: 'Organizing', href: '/#organizing' },
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
