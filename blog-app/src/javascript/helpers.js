function $ (selector) {
  return document.querySelector(selector)
}

function $$ (selector) {
  return [...document.querySelectorAll(selector)]
}

function resetForm (formElement) {
  formElement.reset()

  const inputHiddenElements = $$('[type="hidden"]')
  inputHiddenElements.forEach(inputElement => { inputElement.value = '' })
}

export { $, $$, resetForm }
