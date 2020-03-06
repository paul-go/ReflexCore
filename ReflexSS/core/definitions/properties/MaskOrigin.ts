
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`mask-origin`** CSS property sets the origin of a mask.
		 * 
		 * **Initial value**: `border-box`
		 * 
		 * |   Chrome    | Firefox |   Safari    | Edge | IE  |
		 * | :---------: | :-----: | :---------: | :--: | :-: |
		 * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
		 */
		maskOrigin(...values: CssValue[]): Command;
		/**
		 * The **`mask-origin`** CSS property sets the origin of a mask.
		 * 
		 * **Initial value**: `border-box`
		 * 
		 * |   Chrome    | Firefox |   Safari    | Edge | IE  |
		 * | :---------: | :-----: | :---------: | :--: | :-: |
		 * | **1** _-x-_ | **53**  | **4** _-x-_ |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
		 */
		maskOrigin(...values: CssValue[][]): Command;
	}
}
