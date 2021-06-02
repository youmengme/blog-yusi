// import hljs from 'highlight.js'
// import marked from '@/libs/marked'
//
// if (process.client) hljs.initHighlightingOnLoad()
// const renderer = new marked.Renderer()
// renderer.code = (code, language, escaped) => {
//   return `
//     <pre><div class="actions">
//     <div class="left"></div>
//     <div class="center">${language}</div>
//     <div class="right">复制</div>
// </div><code
//     data-lang="${language}"
//     class="language-${language}"
//     >${hljs.highlightAuto(code).value}</code></pre>
//   `
// }
// marked.use({ renderer })
// marked.setOptions({
//   renderer,
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   smartLists: true
// })
//
// export const markdown2html = markdown => {
//   return {
//     content: marked(markdown),
//     toc: ''
//   }
// }
