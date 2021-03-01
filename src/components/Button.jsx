import { tw } from 'twind'

export default function Button({ primary = false, ...props }) {
	const styles = tw`
    text-white
    ${
			primary
				? 'bg-blue-500 hover:bg-blue-400'
				: 'bg-white bg-opacity-0 hover:bg-opacity-10'
		}
    focus:(outline-none ring ring-white)
    rounded-sm px-3 py-1
    flex flex-wrap items-center
    font-semibold 
  `
	return <button className={styles} {...props} />
}
