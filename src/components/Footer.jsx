import '@twind/macro'
import { Code } from 'heroicons-react'
import meta from 'package.json'

export default function Footer() {
	return (
		<footer tw="flex justify-center">
			<a href={meta.repository.url} tw="flex justify-center space-x-2 my-4">
				<Code />
				<span tw="font-semibold">Source</span>
			</a>
		</footer>
	)
}
