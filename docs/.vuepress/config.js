import { defaultTheme } from 'vuepress'

export default  {
  title: "VIVES course",
  theme: defaultTheme({
    // default theme config
    sidebar: [
      '/README.md',
      '/chapter1/README.md',
      // {
      //   text: 'Chapter 01 Intro',
      //   link: '/chapter1/README.md',
      // },
    ],
    sidebarDepth: 2
  }),
}