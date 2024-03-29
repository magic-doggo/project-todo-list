export let removeClass = function(){
    let selectedClass = document.getElementsByClassName('selected')
    while(selectedClass[0]){
        selectedClass[0].classList.remove('selected')
    }
}