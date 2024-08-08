let tag = null

export const inject = (css: string): void => {
  if (!tag) {
    tag = window.document.createElement('style')
    window.document.head.appendChild(tag)
  }

  tag.textContent += css
}
