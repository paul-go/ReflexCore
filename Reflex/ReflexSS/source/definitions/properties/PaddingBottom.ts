
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
		 * 
		 * **Initial value**: `0`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
		 */
		paddingBottom(...values: CssValue[]): Command;
		/**
		 * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
		 * 
		 * **Initial value**: `0`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
		 */
		paddingBottom(...values: CssValue[][]): Command;
	}
}
