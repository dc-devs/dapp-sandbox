import ColorsPieChart from '../../../../../../../../interfaces/colors-pie-chart-interface';
import {
	themeColors,
	defaultColors,
} from '../../../../../../../../theme/colors';

const { primaryMain } = defaultColors;

const {
	darkPurple,
	lightPurple,
	lightBlue,
	lighterBlue,
	darkAqua,
	lightAqua,
	green,
	lightGreen,
	darkOrange,
	lightOrange,
	red,
} = themeColors;

const colors = {
	0: primaryMain,
	1: darkPurple,
	2: lightPurple,
	4: lightBlue,
	5: lighterBlue,
	6: darkAqua,
	7: lightAqua,
	8: green,
	9: lightGreen,
	10: darkOrange,
	11: lightOrange,
	12: red,
} as ColorsPieChart;

export default colors;
