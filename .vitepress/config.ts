import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IFS Flows",
  description: "A collection of IFS session flows.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Part', link: '/_ifs-part-flow' },
      { text: 'Situation', link: '/_ifs-situation-flow' },
      { text: 'Depolarization', link: '/_ifs-depolarization-flow' },
      { text: 'Self', link: '/_ifs-self-flow' },
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'API Examples', link: '/api-examples' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
