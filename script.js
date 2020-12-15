(function() {

    var popup = document.getElementById('back-popup');
    var site = document.getElementById('vue');
    var popupButton = document.getElementById('btn');

    if(window.innerWidth < 1347){
        popup.style.display = 'flex';
        site.style.display = 'none';
        
        popupButton.addEventListener('click', () => {
            popup.style.display = 'none';
            site.style.display = 'block';
        });
    }else{
        popup.style.display = 'none';
        site.style.display = 'block';
    }
    
    
})();

