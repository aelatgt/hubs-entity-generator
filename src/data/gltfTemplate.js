const gltfTemplate = {
	asset: {
		generator: 'Hubs Entity Generator',
		version: '2.0',
	},
	extensionsUsed: ['MOZ_hubs_components'],
	extensions: {
		MOZ_hubs_components: {
			version: 3,
		},
	},
	scene: 0,
	scenes: [
		{
			name: 'Scene',
			nodes: [0],
		},
	],
	nodes: [
		{
			extensions: {
				MOZ_hubs_components: null,
			},
			name: 'Entity',
		},
	],
}

export default gltfTemplate
