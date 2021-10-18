
function cancel() {
    windowShowModel.style.display="none";
}

function showModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'block';
    }
    console.error('Wrong modal ID: ' + modalId);
}
function closeModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'none';
    }
    console.error('Wrong modal ID: ' + modalId);
}

function showCode(id) {
    var identificador = document.getElementById("")
}