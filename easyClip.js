const copyToClipboard = ( text ) => {
	if(!navigator.clipboard){
		const input=document.createElement('textarea')
		input.innerText=text
		document.body.appendChild(input)
		input.select()
		const result=document.execCommand('copy')
		document.body.removeChild(input)
		return result 
	} else {
		navigator.clipboard.writeText(text) 
	}
}


const createCopyButton = ( text='', buttonLabel='Copy', DOMtargetElement=document.body, opts = {} ) => {
	// Options: prepend <boolean>  id <string>  classes <string>

	const btn = document.createElement('button')
	btn.textContent = buttonLabel
	btn.addEventListener('click', (e) => { 
		e.preventDefault()
		copyToClipboard(text) 
	})

	const { classList, id, prepend } = opts
	if(id){ btn.id = id }
	if (classList){ btn.classList.add(classList) }

	if(prepend){
		DOMtargetElement.prepend(btn)
	} else{
		DOMtargetElement.appendChild(btn)
	}
}


class CopyButton{
	constructor( storedText, buttonLabel, DOMtargetElement, opts){

		this.btn=document.createElement('button')
		this.storedText=storedText?? ''
		this.buttonLabel=buttonLabel?? 'Copy'
		this.DOMtargetElement=DOMtargetElement?? document.body
		this.prepButton(opts?? {})
	}

	setSource(sourceDomElement){
		this.contentSource=sourceDomElement?? null // clears on empty
		console.log(sourceDomElement)
	}

	update(newText = null ){
		this.storedText=newText
	}

	verifyStoredText(){
		if(this.contentSource){
			const tag = this.contentSource.tagName
			const useValue = ["TEXTAREA"].find( el => el === tag )
			const currentText = useValue? this.contentSource.value 
				: this.contentSource.innerText
			this.update(currentText)
		}
	}

	copyToClipboard(){
		this.verifyStoredText()
		
		if(!navigator.clipboard){
			const input=document.createElement('textarea')
			input.innerText=this.storedText
			document.body.appendChild(input)
			input.select()
			const result=document.execCommand('copy')
			document.body.removeChild(input)
			return result 
		} else {
			navigator.clipboard.writeText(this.storedText) 
		}
	}

	prepButton(options){
		const { classList, id, prepend } = options
		
		if(id){ this.btn.id = id }
		if (classList){ this.btn.classList.add(classList) }

		this.btn.textContent=this.buttonLabel
		this.btn.addEventListener('click', (e) => { 
			e.preventDefault()
			this.copyToClipboard() 
		})

		if(prepend){
			this.DOMtargetElement.prepend(this.btn)
		} else{
			this.DOMtargetElement.appendChild(this.btn)
		}
	}
}