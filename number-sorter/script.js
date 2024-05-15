const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdown) => Number(dropdown.value));

    // sort() method convert array item into string and then sort then according to UTF-16 code.
    // Here the sort() method take 2 value as input, subtract a from b, then sort numbers in accending order.
    const sortedValues = inputValues.sort((a, b) => {
        return a - b;
    });
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};