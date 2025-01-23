// console.log('check if I am working')
// var countries = ['Nigeria', 'Uganda', 'Brazil', 'Canada', ' China'] //Arrays of strings
// console.log(countries[3]);

// var evenNumbers = [2, 4, 6, 8, 10, 12] //Arrays of numbers
// console.log(evenNumbers[5]);

// var info = ['Segun', true, [], 90] //Mixed Array
// console.log(info);

// var allStudents = ['Omotolani', 'Precious', 'Queen Deronke', 'Rafiu',' Boluwatife', 'Chidinma']
// console.log(allStudents.length)

// var allStudents = []
// allStudents.push('Boluwatife') //Adds elements to the end of an array
// allStudents.push('Omotolani')
// allStudents.unshift('Lydia') //Inserts element to the start of an array
// allStudents.pop() //Removes elements at the end of the array
// allStudents.shift() //Removes the first element


// console.log(allStudents);
// console.log(allStudents.length);

var allItems = [];

// Function to display items
function displayItems() {
    item.value = ''
    const showItems = document.getElementById('showItems');
    showItems.innerHTML = '';
    for(i=0; i<allItems.length; i++) {
        showItems.innerHTML += `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${allItems[i]}</td>
        </tr>`;
    }
}

// add items
function addItems() {
    if (item.value == '') {
        alert("Input cannot be empty")
    } else {
        allItems.push(item.value)
        // showItems.innerHTML = allItems
        displayItems();
        // console.log(allItems);
    }
}

// unshift items
function addStartItem() {
    item.value = prompt("What item do you wish to add");
    allItems.unshift(item.value)
    displayItems()
}

// delete items
function removeItems() {
    if (allItems.length === 0) {
        alert('cart is empty')
    } else {
        allItems.pop(item.value)
        displayItems()
    }
}

// shift items
function removeStartItem() {
    if (allItems.length === 0) {
        alert('cart is empty')
    } else {
        allItems.shift(item.value)
        displayItems()
    }
}

// Remove all items
function removeAllItems() {
    if (allItems.length === 0) {
        alert('cart is empty')
    } else {
        allItems.splice(0, allItems.length)
        displayItems()
    }
}