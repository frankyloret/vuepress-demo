import { defaultTheme } from 'vuepress'

export default  {
  title: "VIVES course",
  theme: defaultTheme({
    // default theme config
    sidebar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Chapter 01 Intro',
        link: '/chapter1/README.md',
      },
    ],
    sidebarDepth: 2
  }),
}