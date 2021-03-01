import '@twind/macro'
import { Clipboard } from 'heroicons-react'

import { useUpload } from '@/hooks'
import Button from '@/components/Button'

export default function Header({ onExport, onUpload, onReset, onCopy }) {
	const onImport = useUpload(onUpload)
	return (
		<div tw="p-6 flex flex-col space-y-2">
			<h1 tw="font-black text-4xl mb-4 mt-10">Hubs Entity Generator</h1>
			<div tw="flex flex-wrap space-x-2">
				<Button primary onClick={onExport}>
					Export
				</Button>
				<Button onClick={onImport}>Import</Button>
				<Button onClick={onReset}>Reset</Button>
				<div tw="flex-grow flex justify-end">
					<Button onClick={onCopy}>
						<Clipboard tw="h-4" />
						<span>Registrations</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
