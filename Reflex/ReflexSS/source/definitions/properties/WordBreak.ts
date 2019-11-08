
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE    |
		 * | :----: | :-----: | :----: | :----: | :-----: |
		 * | **1**  | **15**  | **3**  | **12** | **5.5** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/word-break
		 */
		wordBreak(...values: CssValue[]): Command;
		/**
		 * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE    |
		 * | :----: | :-----: | :----: | :----: | :-----: |
		 * | **1**  | **15**  | **3**  | **12** | **5.5** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/word-break
		 */
		wordBreak(...values: CssValue[][]): Command;
	}
}
