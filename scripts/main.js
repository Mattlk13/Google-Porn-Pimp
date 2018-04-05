let monbouton = document.getElementById('button');
let block = document.getElementById('corps_page');


monbouton.onclick = function () {
    

    if (block.style.display = "none") 
    {
        monbouton.style.display = "none";
        block.style.display = "block";

    } else {

        block.style.display = "none";
    }
}

let maPageWeb = document.querySelector('html')

maPageWeb.onclick = function () {
   setTimeout(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
}
