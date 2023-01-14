let year = new Date()  // Get the year from system
year = year.getFullYear()
resyear = document.getElementById("year")
resyear.innerHTML = '&copy; ' + year // Display the year

function clickMenu(){  // Change the menu display in mobile
    if (itens.style.display == 'flex') {
        itens.style.display = 'none' 
    } else {
        itens.style.display = 'flex'
    }
} 

function Test() {
    alert("This form is not working for now!")
    return false
}

function learned() {
    alert("This is all tech that I've learned and implemented on this website! Hope you enjoy!")
}

function tolearn() {
    alert("This is the tech that I'll learn to implement on this website.")
}