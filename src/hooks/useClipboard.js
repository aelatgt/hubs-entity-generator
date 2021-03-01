import { useState } from 'react'

/**
 * Returns a function for copying a string to the clipboard
 */
export function useClipboard() {
	const [el] = useState(() => document.createElement('textarea'))
	const copy = (str) => {
		el.value = str
		document.body.appendChild(el)
		el.select()
		document.execCommand('copy')
		document.body.removeChild(el)
	}
	return copy
}
