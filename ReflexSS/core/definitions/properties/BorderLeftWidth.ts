
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`border-left-width`** CSS property sets the width of the left border of an element.
		 * 
		 * **Initial value**: `medium`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
		 */
		borderLeftWidth(...values: CssValue[]): Command;
		/**
		 * The **`border-left-width`** CSS property sets the width of the left border of an element.
		 * 
		 * **Initial value**: `medium`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
		 */
		borderLeftWidth(...values: CssValue[][]): Command;
	}
}
