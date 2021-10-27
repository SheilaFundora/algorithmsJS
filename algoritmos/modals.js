
function showModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'block';
    }else{
        console.error('Wrong modal ID: ' + modalId);

    }
}
function closeModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'none';
    }else{
        console.error('Wrong modal ID: ' + modalId);
    }
}

