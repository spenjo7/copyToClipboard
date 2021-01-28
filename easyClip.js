const copyToClipboard = ( text ) => {
      let input = document.createElement('textarea')
      input.innerHTML = text
      document.body.appendChild(input)
      input.select()
      let result = document.execCommand('copy')
      document.body.removeChild(input)
      return result
}

const createCopyButton = ( btn_txt = 'Copy', copy_str = 'nothing to copy', target_element = document.body, prepend = false ) => {
  const btn = document.createElement('button')
  btn.textContent = btn_txt
  btn.addEventListener('click', (e) => { 
    e.preventDefault()
    copyToClipboard(copy_str) 
  })

  if(prepend){
    target_element.prepend(btn)
  } else{
    target_element.appendChild(btn)
  }
}