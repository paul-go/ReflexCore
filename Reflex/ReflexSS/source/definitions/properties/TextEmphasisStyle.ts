
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
		 * 
		 * **Initial value**: `none`
		 * 
		 * | Chrome | Firefox | Safari  | Edge | IE  |
		 * | :----: | :-----: | :-----: | :--: | :-: |
		 * | **25** | **46**  | **6.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
		 */
		textEmphasisStyle(...values: CssValue[]): Command;
		/**
		 * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
		 * 
		 * **Initial value**: `none`
		 * 
		 * | Chrome | Firefox | Safari  | Edge | IE  |
		 * | :----: | :-----: | :-----: | :--: | :-: |
		 * | **25** | **46**  | **6.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
		 */
		textEmphasisStyle(...values: CssValue[][]): Command;
	}
}
