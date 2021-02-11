import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const { primaryLight, primary, background, secondary, error } = colors;

const theme = createMuiTheme({
	typography: {
		fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		body1: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
		body2: {
			fontFamily: `Montserrat, Helvetica, Arial, sans-serif;`,
		},
	},
	palette: {
		primary: {
			light: primaryLight,
			main: primary,
		},
		secondary: {
			main: secondary,
		},
		error: {
			main: error,
		},
		background: {
			default: background,
		},
	},
});

export default theme;
