import { useEffect, useState } from 'react'

/**
 * Returns a function for triggering a user file upload
 * The callback receives a File object
 */
export function useUpload(callback) {
	const [input] = useState(() => document.createElement('input'))
	useEffect(() => {
		input.type = 'file'
		const onChange = (event) => {
			callback(event.target.files[0])
		}
		input.addEventListener('change', onChange)
		return () => {
			input.removeEventListener('change', onChange)
		}
	}, [input, callback])
	const trigger = () => input.click()
	return trigger
}
