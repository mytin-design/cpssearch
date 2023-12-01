function showResults() {
    ul.classList.remove("hidden");
}

let ul = document.getElementById('myUl');


function myFunction() {
    //Declare variables
    var input, filter, li, a, i, txtValue;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    li = ul.getElementsByTagName('li');

 //cHECK IF THE INPUT IS EMPTY
 if(filter.trim() === "") {
    ul.style.display = "none";
    return;
}else {
    ul.style.display = ""
}
   
    //loop through all list items, and hide those who don't match the search query

    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }
    }
}