
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **41** | **32**  | **8**  |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
		 */
		mixBlendMode(...values: CssValue[]): Command;
		/**
		 * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
		 * 
		 * **Initial value**: `normal`
		 * 
		 * | Chrome | Firefox | Safari | Edge | IE  |
		 * | :----: | :-----: | :----: | :--: | :-: |
		 * | **41** | **32**  | **8**  |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
		 */
		mixBlendMode(...values: CssValue[][]): Command;
	}
}
