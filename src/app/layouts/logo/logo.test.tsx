import { render, screen } from '../../../test-utils';
import Logo from './index';

test('renders learn react link', () => {
	render(<Logo />);
	const LogoText = screen.getByTestId('LogoText');
	expect(LogoText).toBeInTheDocument();
});
