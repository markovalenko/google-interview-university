const arr = [ 1, 3, 4, 6, 10, 123, 126, 128, 200, 245 ];

const binarySearch = (arr, key, low, high) => {
    if (low > high) return -1;
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === key) {
        return mid;
    }
    if (key < arr[mid]) {
        return binarySearch(arr, key, low, high - 1);
    }
    return binarySearch(arr, key, mid + 1, high);
}

console.log(binarySearch(arr,123, 0, arr.length));