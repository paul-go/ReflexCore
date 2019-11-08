
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
		 * 
		 * **Initial value**: `add`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  | IE  |
		 * | :----: | :-----: | :----: | :----: | :-: |
		 * |   No   | **53**  |   No   | **18** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
		 */
		maskComposite(...values: CssValue[]): Command;
		/**
		 * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
		 * 
		 * **Initial value**: `add`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  | IE  |
		 * | :----: | :-----: | :----: | :----: | :-: |
		 * |   No   | **53**  |   No   | **18** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
		 */
		maskComposite(...values: CssValue[][]): Command;
	}
}
