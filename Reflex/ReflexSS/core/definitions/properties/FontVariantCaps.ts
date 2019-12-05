
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **52** | **34**  |   No   |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
		 */
		fontVariantCaps(...values: CssValue[]): Command;
		/**
		 * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **52** | **34**  |   No   |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
		 */
		fontVariantCaps(...values: CssValue[][]): Command;
	}
}
