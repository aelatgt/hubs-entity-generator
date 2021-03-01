import { useState } from 'react'

/**
 * Returns a function for downloading an object as JSON
 */
export function useDownload() {
	const [a] = useState(() => document.createElement('a'))
	const download = (object, filename) => {
		const data =
			'text/json;charset=utf-8,' +
			encodeURIComponent(JSON.stringify(object, 0, 4))
		a.href = 'data:' + data
		a.download = filename
		a.click()
	}
	return download
}
