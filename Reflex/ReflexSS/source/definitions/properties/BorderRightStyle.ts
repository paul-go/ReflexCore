
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
		 * 
		 * **Initial value**: `none`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE    |
		 * | :----: | :-----: | :----: | :----: | :-----: |
		 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
		 */
		borderRightStyle(...values: CssValue[]): Command;
		/**
		 * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
		 * 
		 * **Initial value**: `none`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE    |
		 * | :----: | :-----: | :----: | :----: | :-----: |
		 * | **1**  |  **1**  | **1**  | **12** | **5.5** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
		 */
		borderRightStyle(...values: CssValue[][]): Command;
	}
}
