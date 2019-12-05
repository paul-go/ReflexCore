
declare namespace Reflex.SS
{
	export interface Namespace
	{
		/**
		 * The **`border-image-width`** CSS property sets the width of an element's border image.
		 * 
		 * **Initial value**: `1`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE   |
		 * | :----: | :-----: | :----: | :----: | :----: |
		 * | **15** | **13**  | **6**  | **12** | **11** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
		 */
		borderImageWidth(...values: CssValue[]): Command;
		/**
		 * The **`border-image-width`** CSS property sets the width of an element's border image.
		 * 
		 * **Initial value**: `1`
		 * 
		 * | Chrome | Firefox | Safari |  Edge  |   IE   |
		 * | :----: | :-----: | :----: | :----: | :----: |
		 * | **15** | **13**  | **6**  | **12** | **11** |
		 * 
		 * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
		 */
		borderImageWidth(...values: CssValue[][]): Command;
	}
}
