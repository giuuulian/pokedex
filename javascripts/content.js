function hide(target,source,id){
    document.getElementById(target).style.display = "none";
    document.getElementById(source).style.display ="block";
    document.body.style.overflow="hidden"
}

function retour(target,source){
    document.getElementById(target).style.display = "none";
    document.getElementById(source).style.display ="block";
    document.body.style.backgroundImage="none"
    document.body.style.overflow="scroll"
}

function search_pokemon() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('nom');
    
    for (i = 0; i <= x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                
        }
    }
}

