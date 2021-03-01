import '@twind/macro'
import { useRef } from 'react'

import Editor from '@monaco-editor/react'
import stripJsonComments from 'strip-json-comments'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { useClipboard, useDownload, useHubsComponents } from '@/hooks'
import Header from '@/components/Header'
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
			toast.info('Snippet copied to clipboard!')
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
			<div tw="flex flex-col h-full max-w-2xl mx-auto overflow-hidden">
				<Header {...headerProps} />
				<Editor
					defaultLanguage="json"
					theme="vs-dark"
					defaultValue={placeholder}
					onMount={onMountEditor}
					options={{
						minimap: { enabled: false },
					}}
				/>
				<ToastContainer
					position="top-right"
					pauseOnHover={false}
					pauseOnFocusLoss={false}
				/>
			</div>
		</div>
	)
}
