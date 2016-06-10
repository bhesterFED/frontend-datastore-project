// HEADERS db[0]
// BOXED WARNING AND LEAD PARAGRAPHS db[1]
// SAFETY CONSIDERATION BULLETED LIST db[2]
// REFERENCES db[3]

(function(){
var ui = {
    tileTitle       : document.title,
    rightRailContainer : document.querySelectorAll('.right-rail-content'),
    bBug : true,

    init  : function(){
        switch(ui.tileTitle) {
            case 'Dosing and Monitoring':
                if(document.querySelector('#panel_1')) {
                    ui.rightRailContainer[0].children[0].innerHTML = db[0][0];
                    ui.rightRailContainer[0].children[1].innerHTML = db[1][0];
                    ui.rightRailContainer[0].children[2].innerHTML = db[1][2];
                    ui.rightRailContainer[0].children[4].innerHTML = db[3][0][1] + db[3][1][0]
                }

                if(document.querySelector('#panel_2')) {
                    ui.rightRailContainer[1].children[0].innerHTML = db[0][1];
                    ui.rightRailContainer[1].children[1].innerHTML = db[2][0];
                    ui.rightRailContainer[1].children[2].innerHTML = db[1][2];
                    ui.rightRailContainer[1].children[3].innerHTML = db[3][0][1] + db[3][1][0];
                }

                if(document.querySelector('#panel_3')) {
                    ui.rightRailContainer[2].children[0].innerHTML = db[0][1];
                    ui.rightRailContainer[2].children[1].innerHTML = db[2][1] + db[2][2];
                    ui.rightRailContainer[2].children[2].innerHTML = db[1][2];
                    ui.rightRailContainer[2].children[3].innerHTML = db[3][0][1] + db[3][1][0];
                }
            break;

            case 'Script Protection (HOW)':
                ui.rightRailContainer[0].children[0].innerHTML = db[0][0];
                ui.rightRailContainer[0].children[1].innerHTML = db[1][0];
                ui.rightRailContainer[0].children[2].innerHTML = db[1][2];
                ui.rightRailContainer[0].children[3].innerHTML = db[4][0][0];
                ui.rightRailContainer[0].children[4].innerHTML = db[3][0][1] + db[3][1][0]+' '+db[3][1][2];
            break;

            case 'Script Protection Pharmacy':

            break;

            case 'Patient Counseling':

            break;

            case 'Patient Counseling Pharmacy':

            break;

            case 'Patient Support':

            break;

            case 'True Cost of Synthroid':

            break;

            case 'True Cost of Synthroid Pharmacy':

            break;

            case 'Synthroid Coverage':

            break;
        }
    }
};

//For DeBugging and Logging
if(ui.bBug){
    try {
        console.dir(ui.rightRailContainer);
        console.dir(ui.rightRailContainer[1]);
        console.dir(ui.rightRailContainer[0].children);
    }
    catch(error) {
        console.log(error);
    }

    for (var i = 0; i < ui.rightRailContainer.length; i++) {
        console.log(ui.rightRailContainer[i]);
    }

    var kids = ui.rightRailContainer[0].children;
    for ( i = 0; i < kids.length; i++) {
        console.log(kids[i]);
    }
}

ui.init();
})();