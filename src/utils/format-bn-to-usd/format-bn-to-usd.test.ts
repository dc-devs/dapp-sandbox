import formatBnToUsd from '../../utils/format-bn-to-usd';
import BigNumber from 'bignumber.js';

describe('formatBnToUsd', () => {
	describe('when passed a BN value of 0', () => {
		test('should convert it to USD format', () => {
			const bigNumber = new BigNumber(0);
			const usdFormat = formatBnToUsd(bigNumber);

			expect(usdFormat).toBe('$0.00');
		});
	});
	describe('when passed a small BN value', () => {
		test('should convert it to USD format', () => {
			const largeNumber = '112.668';
			const bigNumber = new BigNumber(largeNumber);
			const usdFormat = formatBnToUsd(bigNumber);

			expect(usdFormat).toBe('$112.67');
		});
	});
	describe('when passed a large BN value', () => {
		test('should convert it to USD format', () => {
			const largeNumber = '1124142647.66823844052307645854924222';
			const bigNumber = new BigNumber(largeNumber);
			const usdFormat = formatBnToUsd(bigNumber);

			expect(usdFormat).toBe('$1,124,142,647.67');
		});
	});
});
