var rtHdr = document.querySelectorAll('.revolving-tab h2.rtab'),
            revolvingTab1 = document.querySelectorAll('#panel_1 .revolving-tab');
            revolvingTab2 = document.querySelectorAll('#panel_2 .revolving-tab');
            
for (var i = 0; i < rtHdr.length; i++) {
    var i;

    rtHdr[i].addEventListener('touchend', function(event){
        var clickedHeader = event.target,
        activeTab = event.target.parentNode

        // console.dir(clickedHeader);
        // console.log(clickedHeader.offsetTop);

        if(clickedHeader.classList.contains('isCurrent')) {
            for (i = 0; i < revolvingTab1.length; i++) {
                revolvingTab1[i].classList.remove('active');
            }
            for (i = 0; i < rtHdr.length; i++) {
                rtHdr[i].classList.add('notCurrent');
                rtHdr[i].classList.remove('isCurrent');
            }
            clickedHeader.classList.remove('notCurrent');
            activeTab.classList.add('active');
            // console.log(clickedHeader);
        } else if(clickedHeader.classList.contains('notCurrent')) {
            for (i = 0; i < rtHdr.length; i++) {
                rtHdr[i].classList.add('notCurrent');
                rtHdr[i].classList.remove('isCurrent');
            }
            for (i = 0; i < revolvingTab1.length; i++) {
                revolvingTab1[i].classList.remove('active');
            }
            
            activeTab.classList.add('active');
            clickedHeader.classList.add('isCurrent');
            clickedHeader.classList.remove('notCurrent');
        }
        
    }, false);
}
