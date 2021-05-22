import { render, screen } from '../../../test-utils';
import Logo from './index';

test('renders learn react link', () => {
	render(<Logo />);
	const LogoSvg = screen.getByTestId('LogoSvg');
	const LogoLink = screen.getByTestId('LogoLink');
	const LogoText = screen.getByTestId('LogoText');

	expect(LogoSvg).toBeInTheDocument();
	expect(LogoLink).toBeInTheDocument();
	expect(LogoText).toBeInTheDocument();
});
