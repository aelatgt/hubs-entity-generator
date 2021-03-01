import ReactDOM from 'react-dom'
import { setup } from 'twind'
import App from './App'

setup({
	theme: {
		extend: {
			colors: {
				dark: '#1e1e1e',
			},
		},
	},
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
