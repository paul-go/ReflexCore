
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
		 * 
		 * **Initial value**: `none`
		 * 
		 * |       Chrome       | Firefox | Safari | Edge | IE  |
		 * | :----------------: | :-----: | :----: | :--: | :-: |
		 * |       **55**       |   n/a   |   No   |  No  | No  |
		 * | 46 _(motion-path)_ |         |        |      |     |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
		 */
		offsetPath(...values: CssValue[]): Command;
		/**
		 * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
		 * 
		 * **Initial value**: `none`
		 * 
		 * |       Chrome       | Firefox | Safari | Edge | IE  |
		 * | :----------------: | :-----: | :----: | :--: | :-: |
		 * |       **55**       |   n/a   |   No   |  No  | No  |
		 * | 46 _(motion-path)_ |         |        |      |     |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
		 */
		offsetPath(...values: CssValue[][]): Command;
	}
}
