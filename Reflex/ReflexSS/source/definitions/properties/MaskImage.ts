
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
		 * 
		 * **Initial value**: `none`
		 * 
		 * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
		 * | :---------: | :-----: | :---------: | :----: | :-: |
		 * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
		 */
		maskImage(...values: CssValue[]): Command;
		/**
		 * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
		 * 
		 * **Initial value**: `none`
		 * 
		 * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
		 * | :---------: | :-----: | :---------: | :----: | :-: |
		 * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
		 */
		maskImage(...values: CssValue[][]): Command;
	}
}
