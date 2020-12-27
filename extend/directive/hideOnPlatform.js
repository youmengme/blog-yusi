export default context => {
  return {
    inserted(el, binding, vnode) {
      const { value } = binding
      if (value !== context.store.state.platformInfo.platform) {
        if (vnode.elm.parentElement)
          vnode.elm.parentElement.removeChild(vnode.elm)
        el.innerHTML = ''
      }
      return el
    }
  }
}
