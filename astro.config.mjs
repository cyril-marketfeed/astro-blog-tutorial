import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    prefetch({
          // Allow up to three links to be prefetched concurrently
      throttle: 3
    }),
  ]
});