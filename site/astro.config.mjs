// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your custom domain. Because you use an apex domain (samirbhowmik.cc)
  // with a CNAME file, the base stays "/". If you ever host at
  // username.github.io/repo instead, set `base: '/repo'`.
  site: 'https://samirbhowmik.cc',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
