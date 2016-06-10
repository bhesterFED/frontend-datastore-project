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

    init: function(e) {
        rt.clicked = e.target;
        rt.parentOfClicked = rt.clicked.parentNode.parentNode;
        rt.buttons = rt.parentOfClicked.children;

        rt.buttons = [].slice.call(rt.buttons);

        rt.buttons.forEach(function(item,index,arr){
            arr[index].style.top = arr[index].offsetTop + 'px';
            // arr[index].classList.remove('active');
        });

        for (var i = 0; i < rt.buttons.length; i++) {
            rt.buttons[i].style.position = 'absolute';
            rt.buttons[i].classList.remove('active');
        }

        // rt.buttons = rt.buttons;
        var clickedIndx = rt.buttons.indexOf(rt.clicked.parentNode);
        // console.log(clickedIndx);
        rt.buttons.push(rt.buttons.shift());
        rt.buttons.splice(0, 0, rt.buttons.splice(clickedIndx - 1, 1)[0]);

        ui.offset = 0;

        rt.buttons.forEach(function(item, index) {
      
            if(index === 0) {
                ui.offset = 0;

                rt.clicked.parentNode.classList.add('active');
                rt.activeChild = rt.clicked;
            } else {
                console.log(rt.clicked.offsetHeight);
                console.log(rt.activeChild.offsetHeight);
                ui.offset = (index-1) * rt.clicked.offsetHeight + rt.activeChild.offsetHeight;
            }

            console.log(rt.parentOfClicked.appendChild(rt.clicked.parentNode));
            

            rt.clicked.parentNode.style.top = ui.offset + 'px';


        });
    },

    // reOrder: function() {
    //     rt.buttons = rt.buttons;
    //     var clickedIndx = rt.reOrdererBtns.indexOf(rt.clicked.parentNode);

    //     rt.reOrdererBtns.push(rt.reOrdererBtns.shift());
    //     console.log(clickedIndx);
    //     rt.reOrdererBtns.splice(0, 0, rt.reOrdererBtns.splice(clickedIndx - 1, 1)[0]);

    //     ui.offset = 0;
    //     rt.reOrdererBtns.forEach(function(item, index) {
    //         console.log(item, index);
    //         if(index === 0) {
    //             ui.offset = 0;
    //             rt.clicked.parentNode.classList.add('active');
    //             rt.activeChild = rt.clicked;
    //         } else {
    //             ui.offset = (index-1) * rt.clicked.offsetHeight + rt.activeChild.offsetHeight;
    //         }

    //     });

    // },

    // setPosition: function(item,index,arr) {
    //     arr[index].style.top = arr[index].offsetTop + 'px';
    //     arr[index].classList.remove('active');
    // },

    // reassignPosition: function(item,index,arr) {
    //     console.log(item, index, arr);
    //     if(index === 0) {
    //         ui.offset = 0;
    //         rt.clicked.parentNode.classList.add('active');
    //         rt.activeChild = rt.clicked;
           
    //     } else {
    //         ui.offset = (index-1) * rt.clicked.offsetHeight + rt.activeChild.offsetHeight;
    //     }
    //     console.log(rt.clicked.parentNode.parentNode.appendChild(rt.clicked));
    // }

};

for (var i = 0; i < rt.revolvingTabBtns.length; i++) {
    rt.revolvingTabBtns[i].addEventListener('touchend', rt.init, false);
}


