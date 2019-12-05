
namespace Reflex.ML
{
	/** */
	const isNode = (maybeNode: any): maybeNode is HTMLElement | Text =>
	{
		return maybeNode instanceof HTMLElement || maybeNode instanceof Text;
	};
	
	/**
	 * A class that mimics a JavaScript array interface over the
	 * HTMLElement and Text children of a specific HTML element.
	 */
	export class NodeArray
	{
		/** */
		constructor(private readonly element: HTMLElement) { }
		
		/** */
		*[Symbol.iterator]()
		{
			const cn = this.element.childNodes;
			const len = cn.length;
			
			for (let i = -1; ++i < len;)
			{
				const node = cn[i];
				if (isNode(node))
					yield node;
			}
		}
		
		/**
		 * Moves a section of this array identified by start and end to
		 * to another location within this array, starting at the specified
		 * target position.
		 * 
		 * @param target If target is negative, it is treated as length+target where length is the
		 * length of the array.
		 * @param start If start is negative, it is treated as length+start. If end is negative, it
		 * is treated as length+end.
		 * @param end If not specified, length of the this object is used as its default value.
		 */
		moveWithin(target: number, start: number, end = 0)
		{
			const slice = this.slice(start, end); 
			this.splice(start, slice.length);
			this.splice(target, 0, ...slice);
			return this;
		}
		
		/**
		 * Gets or sets the length of the array. This is a number one higher 
		 * than the highest element defined in an array.
		 */
		get length()
		{
			let len = 0;
			
			for (let i = this.element.childNodes.length; i-- > 0;)
				if (isNode(this.element.childNodes[i]))
					len++;
			
			return len;
		}
		set length(value: number)
		{
			for (let i = this.element.childNodes.length; --i > value;)
				this.element.childNodes[i]!.remove();
		}
		
		/**
		 * Appends new elements to an array, and returns the new length of the array.
	       * @param children New elements of the Array.
		 */
		push(...children: (Branch | Leaf)[])
		{
			this.element.append(...children);
			return this.length;
		}
		
		/**
		 * Removes the last element from an array and returns it.
		 */
		pop(): (Branch | Leaf) | undefined
		{
			for (let i = this.length; i-- > 0;)
			{
				const item = this.element.childNodes[i];
				if (item instanceof HTMLElement || item instanceof Text)
				{
					item.remove();
					return item;
				}
			}
		}
		
		/**
		 * Removes the first element from an array and returns it.
		 */
		shift(): (Branch | Leaf) | undefined
		{
			const len = this.length;
			for (let i = -1; ++i < len;)
			{
				const item = this.element.childNodes[i];
				if (item instanceof HTMLElement || item instanceof Text)
					return item.remove(), item;
			}
		}
		
		/**
		 * Inserts new elements at the start of an array.
		 * @param children  Elements to insert at the start of the array.
		 */
		unshift(...children: (Branch | Leaf)[])
		{
			this.element.prepend(...children);
			return this.length;
		}
		
		/**
		 * Reverses the elements in the array.
		 */
		reverse()
		{
			const e = this.element;
			const len = this.length;
			
			if (len < 2)
				return this;
			
			let nodeIdx = 0;
			
			for (let i = 0; ++i < len;)
			{
				const node = this.element.childNodes[nodeIdx];
				if (isNode(node))
					e.insertBefore(node, this.element.childNodes[len - i]);
				else
					nodeIdx++;
			}
			
			return this;
		}
		
		/**
		 * Returns a section of an array.
		 * @param start The beginning of the specified portion of the array.
		 * @param end The end of the specified portion of the array.
		 */
		slice(start?: number, end?: number)
		{
			const len = this.length;
			const startVal = this.normalizeIndex(start);
			const endVal = this.normalizeIndex(end === undefined ? len - 1 : end);
			
			if (endVal <= startVal)
				return [];
			
			const nodes: (Branch | Leaf)[] = [];
			for (let i = startVal; i < endVal; i++)
			{
				const e = this.element.childNodes[i];
				if (isNode(e))
					nodes.push(e);
			}
			
			return nodes;
		}
		
		/**
		 * Removes elements from an array and, if necessary, inserts new elements in their
		 * place, returning the deleted elements.
		 * @param start The zero-based location in the array from which to start removing elements.
		 * @param deleteCount The number of elements to remove.
		 */
		splice(start: number, deleteCount?: number): (Branch | Leaf)[];
		/**
		 * Removes elements from an array and, if necessary, inserts new elements in their place,
		 * returning the deleted elements.
		 * @param start The zero-based location in the array from which to start removing elements.
		 * @param deleteCount The number of elements to remove.
		 * @param items Elements to insert into the array in place of the deleted elements.
		 */
		splice(start: number, deleteCount?: number, ...items: (Branch | Leaf)[]): (Branch | Leaf)[];
		splice(start: number, deleteCount?: number, ...items: (Branch | Leaf)[])
		{
			const len = this.length;
			const startIdx = this.normalizeIndex(start < 0 ? len - start : start);
			
			if (startIdx >= len)
			{
				this.element.append(...items);
				return [];
			}
			
			const deleted: (Branch | Leaf)[] = [];
			if (deleteCount && deleteCount > 0)
			{
				for (let i = -1; ++i < deleteCount;)
				{
					const child = this.element.childNodes[startIdx];
					if (!isNode(child))
						continue;
					
					child.remove();
					deleted.push(child);
				}
			}
			
			if (startIdx >= this.element.childNodes.length)
			{
				this.element.append(...items);
			}
			else if (startIdx === 0)
			{
				this.element.prepend(...items);
			}
			else
			{
				const ref = this.element.childNodes[startIdx + 1];
				if (ref)
					for (const item of items)
						this.element.insertBefore(item, ref);
			}
			
			return deleted;
		}
		
		
		/**
		 * Sorts an array.
		 * @param compareFn The name of the function used to determine the
		 * order of the elements. If omitted, the elements are sorted in ascending, 
		 * ASCII character order.
		 */
		sort<T>(reference: T[], compareFn: (a: T, b: T) => number): this;
		sort<T>(reference: T[]): this;
		sort<T>(compareFn: (a: HTMLElement, b: HTMLElement) => number): this;
		sort(a: unknown, b?: unknown)
		{
			type CompareFn = (a: any, b: any) => number;
			const reference = Array.isArray(a) ? a : null;
			const compareFn = 
				typeof a === "function" ? <CompareFn>a : 
				typeof b === "function" ? <CompareFn>b :
				null;
			
			const e = this.element;
			const len = this.length;
			
			if (reference === null)
			{
				const elementsSorted = this.slice().sort(compareFn!);
				
				for (let i = -1; ++i < len;)
				{
					const sortedChild = elementsSorted[i];
					const unsortedChild = e.children[i]!;
					e.insertBefore(unsortedChild, sortedChild);
				}
			}
			else
			{
				const unsortedDatas = reference.slice();
				const unsortedElements = Array.from(e.children);
				
				reference.sort(compareFn || undefined);
				
				const len = reference.length - 1;
				
				for (let idx = -1; ++idx < len;)
				{
					const currentData = reference[idx];
					const unsortedDataIdx = unsortedDatas.indexOf(currentData);
					const currentDataElement = unsortedElements[unsortedDataIdx];
					const currentElement = e.children[idx]!;
					
					if (currentDataElement === currentElement)
						continue;
					
					if (idx === 0)
						e.prepend(currentDataElement);
					
					else if (idx === reference.length - 1)
						e.append(currentDataElement);
					
					else
						e.insertBefore(currentDataElement, currentElement);
					
					unsortedDatas[unsortedDataIdx] = null;
				}
			}
			
			return this;
		}
		
		/**
	       * Returns the index of the first occurrence of a value in an array.
	       * @param searchNode The value to locate in the array.
	       * @param fromIndex The array index at which to begin the search. 
		 * If fromIndex is omitted, the search starts at index 0.
	       */
		indexOf(searchNode: (Branch | Leaf), fromIndex?: number)
		{
			const len = this.length;
			let count = 0;
			
			for (let i = this.normalizeIndex(fromIndex); i < len; i++)
			{
				const node = this.element.childNodes[i];
				
				if (isNode(node))
				{
					count++;
					
					if (node === searchNode)
						return count;
				}
			}
			
			return -1;
		}
		
		/**
	       * Returns the index of the last occurrence of a specified value in an array.
	       * @param searchNode The value to locate in the array.
	       * @param fromIndex The array index at which to begin the search. 
		 * If fromIndex is omitted, the search starts at the last index in the array.
	       */
		lastIndexOf(searchNode: (Branch | Leaf), fromIndex?: number)
		{
			// This algorithm is a bit weird because we need to continue
			// counting backward even after we've found the element to
			// determine the node's position in the childNodes list, because
			// this list could include things like comments that aren't counted.
			
			let index = -1;
			
			for (let pos = this.normalizeIndex(fromIndex) + 1; --pos >= 0;)
			{
				const node = this.element.childNodes[pos];
				
				if (isNode(node))
				{
					if (index < 0)
					{
						if (node === searchNode)
							index = 1;
					}
					else index++;
				}
			}
			
			return index;
		}
		
		/** */
		private normalizeIndex(index: number | undefined)
		{
			return Math.max(0, Math.min(this.length, index || 0));
		}
	}
}
