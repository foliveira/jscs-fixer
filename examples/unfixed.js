function bubbleSort(array, ascending) {
ascending = (typeof ascending === 'undefined') || ascending;
for (var i = 0; i < array.length; i++) {
for (var j = array.length - 1; j > i; j--) {
if (ascending ? array[j] < array[j - 1] : array[j - 1] < array[j]) {
var temp = array[j];
array[j] = array[j - 1];
array[j - 1] = temp;
}
}
}

return array;
}
