import { useEffect, useRef, useState } from 'react'

/**
 * Returns stateful boolean and a function to trigger it to toggle.
 * The value will automatilly flip back after a given duration.
 */
export function useTimedToggle(initialValue = false) {
	const [bool, set] = useState(initialValue)
	const timeout = useRef()
	const trigger = (ms = 1000) => {
		clearTimeout(timeout.current)
		set(true)
		timeout.current = setTimeout(() => set(false), ms)
	}
	useEffect(() => {
		return () => clearTimeout(timeout.current)
	}, [])
	return [bool, trigger]
}
