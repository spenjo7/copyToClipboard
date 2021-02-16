# copyToClipboard
A simple Code Snippet to Copy from JavaScript to the Clipboard ( I use this all the time! )
- Also includes a function to generate Buttons which use the script 
- Now includes a class to creates a button copies the trackd innertext/value of a source DOM Element
	-- Or the text to copy can be externally updated 

## Useage:
copyToClipboard( textString ) // Use as a function in an event listener
createCopyButton( textString, buttonLabel, DOMtargetElement, { prepend, id, classList })
new CopyButton( storedText, buttonLabel, DOMtargetElement, { prepend, id, classList })
	.update(text) // externally updates the text to copy
	.setSource(sourceDomElement) // designates a DOM Element to be the source of the copyable text;
		-- *Experimental* Either the element's innerText or value will be copied 

## Updated on 2021-02-15 
-- copyToClipboard Now includes include navigator.clipboard API's .writeText() method
-- Added the CopyButton class, which is similar to createCopyButton but it also has a .setSource()