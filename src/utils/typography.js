import Typography from "typography"

const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.722222,
	headerFontFamily: ['Gotham Narrow SSm A', 'Gotham Narrow SSm B'],
	bodyFontFamily: ['Sentinel SSm A', 'Sentinel SSm B'],
	scaleRatio: 1.2,
	overrideStyles: () => ({
		'a, a:visited, a:link': {
			color: 'inherit',
			textDecoration: 'none',
			borderBottom: '1px solid rgba(0,0,0,0.4)',
		},
		'pre[class*=language-], code[class*=language-]': {
			tabSize: 2,
			fontSize: '14px',
		}
	})
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
