#include <iostream>

int binary_search(int array[], int key, int high) {
  int low = 0;

  while (low <= high) {
    int mid = low + ((high - low) / 2);
    if(array[mid] == key) {
      return mid;
    }
    if (key < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

  return -1;
}

int main() {
  int n;
  int k;
  int* a = NULL;
  std::cout << "Hello my dear friend, choose the size of the array \n";
  std::cin >> n;
  std::cout << "Good.\n Enter the key you want to search within that array \n";
  std::cin >> k;
  a = new int[n];
  for (int i = 0; i < n; i++) {
    a[i] = i;
  }
  std::cout << "Result is: " << binary_search(a, k, n)  << std::endl;
  delete [] a;
  a = NULL;
  return 0;
}