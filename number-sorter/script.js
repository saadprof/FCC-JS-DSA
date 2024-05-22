const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdown) => Number(dropdown.value));

    // sort() method convert array item into string and then sort then according to UTF-16 code.
    // Here the sort() method take 2 value as input, subtract a from b, then sort numbers in accending order.
    // const sortedValues = inputValues.sort((a, b) => {
    //     return a - b;
    // });

    // bubble sort is another way to sort.
    // const sortedValues = bubbleSort(inputValues);

    // selectionSort algorithm is efficient
    // const sortedValues = selectionSort(inputValues);
    
    // insertionSort is interesting an easy one.
    const sortedValues = insertionSort(inputValues);
    

    updateUI(sortedValues);
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

// bubbleSort is to to sort number in accending order.
// It starts sorting from left, campares with adjacent element, shift the highest value to the right. repeat until sorted.
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

// Selection sort is a efficient sorting method that sort the smalles/largest element
// from the unsorted portion of the list to the sorted portion.
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

// Insertion sort algorithm sorts right element
// from unsorted portion and place the items in the right place to sorted portion.
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    return array;
};

sortButton.addEventListener("click", sortInputArray);