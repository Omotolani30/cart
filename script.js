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

var allItems = []
function addItems() {
    // alert("I am working")
    // console.log(item.value);
    if (item.value == '') {
        alert("Input cannot be empty")
    } else {
        allItems.push(item.value)
        document.getElementById('item').value = ''
        // showItems.innerHTML = allItems

        document.getElementById('showItems').innerHTML = ''
        for(i=0; i<allItems.length; i++) {
            // console.log(allItems[i]);
            showItems.innerHTML += `<p class="my-2">${i+1}. ${allItems[i]}</p>`
        }
        console.log(allItems);
    }
   
}


function addStartItem() {
    item.value = prompt("What item do you wish to add");
    allItems.unshift(item.value)
    document.getElementById('item').value = ''

    document.getElementById('showItems').innerHTML = ''
    for(i=0; i<allItems.length; i++) {
        showItems.innerHTML += `<p class="my-2">${i+1}. ${allItems[i]}</p>`
    }
    console.log(allItems);
}



// delete
function removeItems() {
    if (allItems == '') {
        alert('cart is empty')
    } else {
        allItems.pop(item.value)

        document.getElementById('showItems').innerHTML = ''
        for(i=0; i<allItems.length; i++) {
            showItems.innerHTML += `<p class="my-2">${i+1}. ${allItems[i]}</p>`
        }
        console.log(allItems);
    }
}

// shift
function removeStartItem() {
    if (allItems == '') {
        alert('cart is empty')
    } else {
        allItems.shift(item.value)

        document.getElementById('showItems').innerHTML = ''
        for(i=0; i<allItems.length; i++) {
            showItems.innerHTML += `<p class="my-2">${i+1}. ${allItems[i]}</p>`
        }
        console.log(allItems);
    }
}

// Remove all items
function removeAllItems() {
    if (allItems == '') {
        alert('cart is empty')
    } else {
        allItems.splice(0, allItems.length)

        document.getElementById('showItems').innerHTML = ''
        // for(i=0; i<allItems.length; i++) {
        //     showItems.innerHTML += `<p class="my-2">${i+1}. ${allItems[i]}</p>`
        // }
        console.log(allItems);
    }
}



