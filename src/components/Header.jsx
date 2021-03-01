import '@twind/macro'
import { Clipboard, ClipboardCheck } from 'heroicons-react'

import { useUpload, useTimedToggle } from '@/hooks'
import Button from '@/components/Button'

export default function Header({ onExport, onUpload, onReset, onCopy }) {
	const onImport = useUpload(onUpload)
	const [checked, triggerChecked] = useTimedToggle()
	const onClickCopy = () => {
		onCopy()
		triggerChecked(1500)
	}
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
					<Button onClick={onClickCopy}>
						<AnimatedClipboard checked={checked} />
						<span>Registrations</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

function AnimatedClipboard({ checked }) {
	const sharedStyles = 'absolute h-full w-full transform transition-transform'
	return (
		<span tw="relative inline-block h-5 w-5 mr-1">
			<Clipboard tw={[sharedStyles, checked ? 'scale-0' : 'scale-100']} />
			<ClipboardCheck tw={[sharedStyles, !checked ? 'scale-0' : 'scale-100']} />
		</span>
	)
}
