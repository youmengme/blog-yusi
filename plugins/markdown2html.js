import hljs from 'highlight.js'
import marked from 'marked'
// hljs.initHighlightingOnLoad();

const renderer = new marked.Renderer()
renderer.heading = function(text, level, raw) {
  const anchor = tocObj.add(text, level)
  return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
}

const tocObj = {
  add(text, level) {
    const anchor = `#toc${level}${++this.index}`
    this.toc.push({
      anchor,
      level,
      text
    })
    return anchor
  },
  toHTML() {
    const levelStack = []
    let result = ''
    const addStartUL = () => {
      result += '<ul>'
    }
    const addEndUL = () => {
      result += '</ul>\n'
    }
    const addLI = (anchor, text) => {
      result += '<li><a href="#' + anchor + '">' + text + '<a></li>\n'
    }

    this.toc.forEach(function(item) {
      let levelIndex = levelStack.indexOf(item.level)
      // 没有找到相应level的ul标签，则将li放入新增的ul中
      if (levelIndex === -1) {
        levelStack.unshift(item.level)
        addStartUL()
        addLI(item.anchor, item.text)
      } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
      else if (levelIndex === 0) {
        addLI(item.anchor, item.text)
      } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
      else {
        while (levelIndex--) {
          levelStack.shift()
          addEndUL()
        }
        addLI(item.anchor, item.text)
      }
    })
    // 如果栈中还有level，全部出栈打上闭合标签
    while (levelStack.length) {
      levelStack.shift()
      addEndUL()
    }
    // 清理先前数据供下次使用
    this.toc = []
    this.index = 0
    return result
  },
  toc: [],
  index: 0
}

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})

export const markdown2html = function(markdown) {
  return {
    content: marked(markdown),
    toc: tocObj.toHTML()
  }
}
