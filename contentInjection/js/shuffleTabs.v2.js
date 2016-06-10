/*
    1.0 - grab a list of "revolving tabs" 
    2.0 - convert list of "revolving tabs" to actual array
    3.0 - on touchend assign style position = absolute to each item in the new Array
        3.1 - assign style top = item's offsetTop to each item in the new Array
        3.2 - remove .active class from the first item in the array
        3.4 - 

*/

var rt = {
    revolvingTabBtns : document.querySelectorAll('#panel_1 .revolving-tab h2.rtab'),
    revolvingTab1    : document.querySelectorAll('#panel_1 .revolving-tab'),
    revolvingTab2    : document.querySelectorAll('#panel_2 .revolving-tab'),

    rollTabSet1      : document.querySelectorAll('#rt1 .revolving-tab'),
    btnGroup           : null,
    reOrdererBtns  : null,
    clicked : null,
    parentOfClicked: null,
    buttons: null,
    offset: null,
    shuffledArray: null,
    activeChild: null,

    shuffle: function(e) {
        var clickedTab = e.target;
        var tabCollection = e.target.parentNode.parentNode;
        var allTabs = tabCollection.children;

        var pos1 = 0,
        pos2 = 445,
        pos3 = 531;

        console.dir(clickedTab);
        // console.log(this.parentNode);
        console.dir(clickedTab.parentNode);
        console.log(tabCollection.children[1].classList.contains('notCurrent'));
        // console.dir(allTabs);
        // console.log(this.parentNode.parentNode.appendChild(this.parentNode));

        for (var i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.remove('active');
            console.log(allTabs[i].offsetTop);
            // allTabs[i].style.top = allTabs[i].offsetTop + 'px';
        }


        if(clickedTab.parentNode.contains('unit2')) {
            allTabs[1].style.top = pos1 + 'px';
            allTabs[2].style.top = pos2 + 'px';
            allTabs[0].style.top = pos3 + 'px';
            document.querySelector('.revolving-tab.unit2').classList.add('active');
            document.querySelector('.rtab').classList.remove('notCurrent');
            document.querySelector('.rtab').classList.add('isCurrent');
        }
        

        setTimeout(function(){
            for ( i = 0; i < allTabs.length; i++) {
                allTabs[i].style.position = 'absolute';
            }
        }, 500);

        setTimeout(function(){
            for ( i = 0; i < allTabs.length; i++) {
                
                // allTabs[i].style.top = allTabs[i].offsetTop + 'px';
            }
        }, 250);

        var binOfRows = [].slice.call(allTabs);


        // rt.buttons = [].slice.call(rt.buttons);

        // rt.buttons.forEach(function(item,index,arr){
        //     arr[index].style.top = arr[index].offsetTop + 'px';
 
        // });


        // for (var i = 0; i < rt.buttons.length; i++) {
        //     rt.buttons[i].style.position = 'absolute';
        //     rt.buttons[i].classList.remove('active');
        // }

        

        binOfRows.forEach(function(item, index, arr){
            if(index === 0 ) {
                
            }
        });


        // var clickedIndx = rt.buttons.indexOf(rt.clicked.parentNode);
        // rt.buttons.push(rt.buttons.shift());
        // rt.buttons.splice(0, 0, rt.buttons.splice(clickedIndx - 1, 1)[0]);
        // ui.offset = 0;

        // rt.buttons.forEach(function(item, index) {
      
        //     if(index === 0) {
        //         ui.offset = 0;

        //         rt.clicked.parentNode.classList.add('active');
        //         rt.activeChild = rt.clicked;
        //     } else {
        //         console.log(rt.clicked.offsetHeight);
        //         console.log(rt.activeChild.offsetHeight);
        //         ui.offset = (index-1) * rt.clicked.offsetHeight + rt.activeChild.offsetHeight;
        //     }

        //     console.log(rt.parentOfClicked.appendChild(rt.clicked.parentNode));
            

        //     rt.clicked.parentNode.style.top = ui.offset + 'px';


        // });
    }

};

for (var i = 0; i < rt.revolvingTabBtns.length; i++) {
    rt.revolvingTabBtns[i].addEventListener('touchend', rt.shuffle, false);
}


