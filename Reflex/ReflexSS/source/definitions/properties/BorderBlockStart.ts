
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
		 * 
		 * | Chrome | Firefox |  Safari  | Edge | IE  |
		 * | :----: | :-----: | :------: | :--: | :-: |
		 * | **69** | **41**  | **12.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
		 */
		borderBlockStart(...values: CssValue[]): Command;
		/**
		 * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
		 * 
		 * | Chrome | Firefox |  Safari  | Edge | IE  |
		 * | :----: | :-----: | :------: | :--: | :-: |
		 * | **69** | **41**  | **12.1** |  No  | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
		 */
		borderBlockStart(...values: CssValue[][]): Command;
	}
}
