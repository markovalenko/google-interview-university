const arr = [ 1, 3, 4, 6, 10, 123, 126, 128, 200, 245 ];

const binarySearch = (arr, key) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = low + Math.floor(((high - low ) / 2));
        if (key === arr[mid]) {
            return mid;
        }
        if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 4));