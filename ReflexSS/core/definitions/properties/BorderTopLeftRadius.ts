
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
		 * 
		 * **Initial value**: `0`
		 * 
		 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
		 * | :-----: | :-----: | :-----: | :----: | :---: |
		 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
		 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
		 */
		borderTopLeftRadius(...values: CssValue[]): Command;
		/**
		 * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
		 * 
		 * **Initial value**: `0`
		 * 
		 * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
		 * | :-----: | :-----: | :-----: | :----: | :---: |
		 * |  **4**  |  **4**  |  **5**  | **12** | **9** |
		 * | 1 _-x-_ |         | 3 _-x-_ |        |       |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
		 */
		borderTopLeftRadius(...values: CssValue[][]): Command;
	}
}
