const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-field');
    const quantity = getInputValueById('quantity-field');
    console.log(product, quantity);

    // set to localStorage
    // simple way 

    localStorage.setItem('product', quantity);

}