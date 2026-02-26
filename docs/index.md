---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-home-layout'

hero:
  name: "彬语"
  text: "欢迎来到我的博客"
  tagline: bin的成长记录
  image:
    src: ./logo.png
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:  
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🤹
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🎨
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🚙

---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
