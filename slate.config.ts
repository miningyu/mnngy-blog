/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: '민인규의 Blog',
  description: '관심있는 것을 기록합니다.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/miningyu'
    },
]
});