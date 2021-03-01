import gltfTemplate from '@/data/gltfTemplate'

/**
 * Helpers for interfacing w/ MOZ_hubs_components glTF extension
 */
export function useHubsComponents() {
	const createGltf = (components) => {
		const gltf = { ...gltfTemplate }
		gltf.nodes[0].extensions.MOZ_hubs_components = components
		return gltf
	}
	const createRegistrations = (components) => {
		const componentNames = Object.keys(components)
		const lines = componentNames.map(
			(name) => `AFRAME.GLTFModelPlus.registerComponent('${name}', '${name}')`
		)

		return lines.join('\n')
	}
	return { createGltf, createRegistrations }
}
