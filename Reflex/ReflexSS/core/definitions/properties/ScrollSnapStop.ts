
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **75** |   No    |   No   |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
		 */
		scrollSnapStop(...values: CssValue[]): Command;
		/**
		 * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **75** |   No    |   No   |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
		 */
		scrollSnapStop(...values: CssValue[][]): Command;
	}
}
