let searchForm = document.getElementById('search-form');
let searchResultList = document.querySelectorAll('.result-items');
let result = document.getElementById('search-results');
let searchValue = result.getElementsByTagName("p");

searchForm.addEventListener("keyup", function(){
    console.log("Keyup done");

    for(var i=0; i<searchValue.length; i++){
        console.log(searchForm.value);

        let value = searchResultList[i].getElementsByTagName('p')[0];

        let filterValue = value.textContent || value.innerHTML;

        if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase())>-1){
            searchResultList[i].style.display="";
        }
        else{
            searchResultList[i].style.display="none";
        }
    }
})