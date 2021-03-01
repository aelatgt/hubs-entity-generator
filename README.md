# Hubs Entity Generator

## What does it do?

The generator lets you write an A-Frame entity such as this:

```html
<a-entity geometry="primitive: box" material="color: red"></a-entity>
```

in JSON like this:

```json
{
	"geometry": {
		"primitive": "box"
	},
	"material": {
		"color": "red"
	}
}
```

and encode it into a file that Hubs can parse through the `MOZ_hubs_components` glTF extension.

## Instructions

Write your entities in JSON format as shown above and **export** the `.glb` file\*.
Ensure that the components you're referencing have been registered with `AFRAME.GLTFModelPlus`. You can accomplish this by clicking the **copy registrations** button and pasting the snippet into your custom room script.

You may then add the `.glb` file to your Hubs room or Spoke scene and position it like a regular 3D model.

Be aware that if your entity contains custom networking components, these may interfere with the default `networked` component of models added directly to a Hubs room. Models added through Spoke are not networked by default, so they don't face this issue.

_\*Note: the file is not actually binary encoded, but Spoke doesn't accept `.gltf` files so we rename the extension._

## How does it work?

When Hubs receives a glTF model, the `gltf-model-plus` component looks for usage of the `MOZ_hubs_components` extension and attaches any components that have been registered with it. This is intended to be used by the [Hubs Exporter for Blender](https://github.com/MozillaReality/hubs-blender-exporter) so that content creators can include elements from Spoke (such as waypoints and lights) in their Blender scene. However, there are no limits on which components the extension supports.

The Entity Generator exports a glTF file much like Blender, but it contains only an empty node. Since glTF files are a JSON format already, it's straightforward to add arbitrary component entries and export from the web.
