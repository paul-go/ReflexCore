
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
		 * 
		 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
		 * | :----: | :-----: | :------: | :----: | :-: |
		 * | **57** | **52**  | **10.1** | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
		 */
		gridTemplate(value: CssValue, ...values: CssValue[]): Call;
		/**
		 * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
		 * 
		 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
		 * | :----: | :-----: | :------: | :----: | :-: |
		 * | **57** | **52**  | **10.1** | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
		 */
		gridTemplate(values: CssValue[][]): Call;
		/**
		 * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
		 * 
		 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
		 * | :----: | :-----: | :------: | :----: | :-: |
		 * | **57** | **52**  | **10.1** | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
		 */
		"grid-template"(value: CssValue, ...values: CssValue[]): Call;
		/**
		 * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
		 * 
		 * | Chrome | Firefox |  Safari  |  Edge  | IE  |
		 * | :----: | :-----: | :------: | :----: | :-: |
		 * | **57** | **52**  | **10.1** | **16** | No  |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
		 */
		"grid-template"(values: CssValue[][]): Call;
	}
}
