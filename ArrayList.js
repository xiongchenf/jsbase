let ArrayList = (function() {
	return function ArrayList() {
		let arr = [];
		this.insert = item => {
			arr.push(item)
		}
		this.toString = () => {
			return arr.join();
		}
		// 冒泡排序
		this.bubbleSort = () => {
			let len = arr.length;
			for(let i = 0; i < len; i++) {
				for(let j = 0; j < len - i - 1; j++) {
					if(arr[j] > arr[j+1]) {
						swip(j, j+1);
					}
				}
			}
		}
		// 选择排序
		this.selectionSort = () => {
			let len = arr.length, iMin = 0;
			for(let i = 0; i < len - 1; i++) {
				iMin = i;
				for(let j = 0; j < len; j++) {
					if(arr[iMin] > arr[j]) {
						iMin = j;
					}
				}
				// 比当前值小的最小数值
				if(i !== iMin) {
					swip(i, iMin);
				}
			}
		}
		// 插入排序
		this.insertionSort = () => {
			let len = arr.length, tmp = null , j = 0;
			for(let i = 0; i < len; i++) {
				tmp = arr[i];
				j = i;
				while(j > 0 && arr[j-1] > tmp) {
					arr[j] = arr[j-1];
					j--;
				}
				arr[j] = tmp;
			}
		}
		// 归并排序。。。有问题
		this.mergeSort = () => {
			return mergeSortRec(arr);
		}

		let swip = (a, b) => {
			let tmp = arr[a];
			arr[a] = arr[b];
			arr[b] = tmp;
		}

		let mergeSortRec = list => {
			let len = list.length;
			if(len === 1) {
				return list
			}

			let mid = Math.floor(len/2),
				left = list.slice(0, mid),
				right = list.slice(mid, len);
			return merge(mergeSortRec(left), mergeSortRec(right));
		}

		let merge = (left, right) => {
			let res = [], 
				il = 0, 
				ir = 0;
			while(il < left.length && ir < right.length) {
				if(left[il] < right[ir]) {
					res.push(left[il++]);
				} else {
					res.push(right[ir++]);
				}
			}

			while(il < left.length) {
				res.push(left[il++]);
			}

			while(ir < right.length) {
				res.push(right[ir++]);
			}

			return res;
		}
		// 快速排序
		this.quickSort = () => {
			quick(arr， 0， arr.length - 1);
		}

		let quick = (list, left, right) => {
			let index = 0;
			if(list.length > 1) {
				
			}

		}
	}
})();