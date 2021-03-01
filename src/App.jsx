import '@twind/macro'
import { useRef } from 'react'

import Editor from '@monaco-editor/react'
import stripJsonComments from 'strip-json-comments'

import { useClipboard, useDownload, useHubsComponents } from '@/hooks'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import placeholder from '@/data/placeholder'

export default function App() {
	const editorRef = useRef(null)
	const copy = useClipboard()
	const download = useDownload()
	const { createGltf, createRegistrations } = useHubsComponents()

	const onMountEditor = (editor) => {
		editorRef.current = editor
	}
	const getComponents = () => {
		const text = editorRef.current.getValue()
		const cleaned = stripJsonComments(text)
		return JSON.parse(cleaned)
	}
	const headerProps = {
		onExport: () => {
			const gltf = createGltf(getComponents())
			download(gltf, 'entity.glb')
		},
		onReset: () => {
			editorRef.current.setValue(placeholder)
		},
		onCopy: () => {
			const snippet = createRegistrations(getComponents())
			copy(snippet)
		},
		onUpload: async (file) => {
			try {
				const text = await file.text()
				const json = JSON.parse(text)
				const components = json.nodes[0].extensions.MOZ_hubs_components
				editorRef.current.setValue(JSON.stringify(components, 0, 2))
			} catch (err) {
				alert(err)
			}
		},
	}
	return (
		<div tw="h-screen bg-dark text-white">
			<div tw="flex flex-col h-full max-w-2xl mx-auto">
				<Header {...headerProps} />
				<div tw="flex-grow overflow-hidden">
					<Editor
						defaultLanguage="json"
						theme="vs-dark"
						defaultValue={placeholder}
						onMount={onMountEditor}
						options={{
							minimap: { enabled: false },
						}}
					/>
				</div>
				<Footer />
			</div>
		</div>
	)
}
