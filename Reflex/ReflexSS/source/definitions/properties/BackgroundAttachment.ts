
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
		 * 
		 * **Initial value**: `scroll`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
		 */
		backgroundAttachment(...values: CssValue[]): Command;
		/**
		 * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
		 * 
		 * **Initial value**: `scroll`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |  IE   |
		 * | :----: | :-----: | :----: | :----: | :---: |
		 * | **1**  |  **1**  | **1**  | **12** | **4** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
		 */
		backgroundAttachment(...values: CssValue[][]): Command;
	}
}
