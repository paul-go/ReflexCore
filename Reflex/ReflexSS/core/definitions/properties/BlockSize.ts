
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
		 * 
		 * **Initial value**: `auto`
		 * 
		 * | Chrome | Firefox |  Safari  | Edge | IE  |
		 * | :----: | :-----: | :------: | :--: | :-: |
		 * | **57** | **41**  | **12.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/block-size
		 */
		blockSize(...values: CssValue[]): Command;
		/**
		 * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
		 * 
		 * **Initial value**: `auto`
		 * 
		 * | Chrome | Firefox |  Safari  | Edge | IE  |
		 * | :----: | :-----: | :------: | :--: | :-: |
		 * | **57** | **41**  | **12.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/block-size
		 */
		blockSize(...values: CssValue[][]): Command;
	}
}
