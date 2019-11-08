
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
		 * 
		 * **Initial value**: `0% 0%`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/background-position
		 */
		backgroundPosition(...values: CssValue[]): Command;
		/**
		 * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
		 * 
		 * **Initial value**: `0% 0%`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/background-position
		 */
		backgroundPosition(...values: CssValue[][]): Command;
	}
}
