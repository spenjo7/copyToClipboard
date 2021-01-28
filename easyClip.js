const copyToClipboard = ( text ) => {
      let input = document.createElement('textarea')
      input.innerHTML = text
      document.body.appendChild(input)
      input.select()
      let result = document.execCommand('copy')
      document.body.removeChild(input)
      return result
}

const createCopyButton = ( btn_txt = 'Copy', copy_str = 'nothing to copy', target_element = document.body, opts = {} ) => {
  // Options: prepend <boolean>  id <string>  classes <string>

  const btn = document.createElement('button')
  btn.textContent = btn_txt
  btn.addEventListener('click', (e) => { 
    e.preventDefault()
    copyToClipboard(copy_str) 
  })

  const { prepend, id, classes } = opts
  if(id){ btn.id = id }
  if (classes){ btn.classList = classes }

  if(prepend){
    target_element.prepend(btn)
  } else{
    target_element.appendChild(btn)
  }
}