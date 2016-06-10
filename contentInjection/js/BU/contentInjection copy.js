// HEADERS db[0]
// BOXED WARNING AND LEAD PARAGRAPHS db[1]
// SAFETY CONSIDERATION BULLETED LIST db[2]
// REFERENCES db[3]
var ui = {
        tileTitle       : document.title,
        tabs            : null,
        elmCount        : null,
        safetyHdr       : null,
        safetyHdr1      : null, safetyHdr2      : null, safetyHdr3      : null,
        boxedWarning1   : null, boxedWarning2   : null, boxedWarning3   : null,
        instructionTxt1 : null, instructionTxt2 : null, instructionTxt3 : null,
        safetyListTxt1  : null, safetyListTxt2  : null, safetyListTxt3  : null,
        referenceTxt1   : null, referenceTxt2   : null, referenceTxt3   : null,
        calloutTxt      : null,
        rightRailContainer : document.querySelectorAll('.right-rail-content'),

        init : function() {
            ui.tabs = document.querySelectorAll('.tabContent');

            for (ui.elmCount = 0; ui.elmCount < ui.tabs.length; ui.elmCount++) {

                // ui.safetyHdr + ui.elmCount;
                // ui.boxedWarning + ui.elmCount 
                // ui.safetyHdr  = document.querySelector('#panel_'+ui.elmCount+' .box-warning-hdr');
                  // = document.querySelector('#panel_'+ui.elmCount+' .boxed-warning span.boxed-warning-text');
                // ui.instructionTxt + ui.elmCount = document.querySelector('#panel_'+ui.elmCount+' .boxed-warning-instructions');
                // ui.safetyListTxt + ui.elmCount  = document.querySelector('#panel_'+ui.elmCount+' .safety-considerations-list');
                // ui.referenceTxt + ui.elmCount   = document.querySelector('#panel_'+ui.elmCount+' .boxed-warning-references');
                // console.log(ui.safetyHdr);
                console.log(ui.elmCount+1);
                // console.log(ui.tabs[ui.elmCount]);
            }

            // if(document.querySelector('#panel_1')) {
            //     ui.safetyHdr1      = document.querySelector('#panel_1 .box-warning-hdr');
            //     ui.boxedWarning1   = document.querySelector('#panel_1 .boxed-warning span.boxed-warning-text');
            //     ui.instructionTxt1 = document.querySelector('#panel_1 .boxed-warning-instructions');
            //     ui.safetyListTxt1  = document.querySelector('#panel_1 .safety-considerations-list');
            //     ui.referenceTxt1   = document.querySelector('#panel_1 .boxed-warning-references');
            //     console.log(ui.safetyHdr1);
            //     ui.injector();
            // }

            // if(document.querySelector('#panel_2')) {
            //         ui.safetyHdr2      = document.querySelector('#panel_1 .box-warning-hdr');
            //         ui.boxedWarning2   = document.querySelector('#panel_1 .boxed-warning span.boxed-warning-text');
            //         ui.instructionTxt2 = document.querySelector('#panel_1 .boxed-warning-instructions');
            //         ui.safetyListTxt2  = document.querySelector('#panel_1 .safety-considerations-list');
            //         ui.referenceTxt2   = document.querySelector('#panel_1 .boxed-warning-references');
            // }

            // if(document.querySelector('#panel_3')) {
            //         ui.safetyHdr2      = document.querySelector('#panel_1 .box-warning-hdr');
            //         ui.boxedWarning2   = document.querySelector('#panel_1 .boxed-warning span.boxed-warning-text');
            //         ui.instructionTxt2 = document.querySelector('#panel_1 .boxed-warning-instructions');
            //         ui.safetyListTxt2  = document.querySelector('#panel_1 .safety-considerations-list');
            //         ui.referenceTxt2   = document.querySelector('#panel_1 .boxed-warning-references');
            // }
        },

        injector  : function(){
            var rightRailContainer = document.querySelectorAll('.right-rail-content');
            console.dir(rightRailContainer);
            console.dir(rightRailContainer[0].children);
            switch(ui.tileTitle) {
                case 'Dosing and Monitoring':
                    if(document.querySelector('#panel_1')) {
                        ui.rightRailContainer[0].children[0].innerHTML = db[0][0];
                        ui.rightRailContainer[0].children[1].innerHTML = db[1][0];
                        ui.rightRailContainer[0].children[2].innerHTML = db[1][2];
                        ui.rightRailContainer[0].children[4].innerHTML = db[3][0][1] + db[3][1][0];
                    }

                    if(document.querySelector('#panel_2')) {
                            ui.safetyHdr2      = document.querySelector('#panel_2 .box-warning-hdr');
                            ui.boxedWarning2   = document.querySelector('#panel_2 .boxed-warning span.boxed-warning-text');
                            ui.instructionTxt2 = document.querySelector('#panel_2 .boxed-warning-instructions');
                            ui.safetyListTxt2  = document.querySelector('#panel_2 .safety-considerations-list');
                            ui.referenceTxt2   = document.querySelector('#panel_2 .boxed-warning-references');

                            ui.safetyHdr2.innerHTML      = db[0][1];
                            ui.safetyListTxt2.innerHTML  = db[2][0];
                            ui.instructionTxt2.innerHTML = db[1][2];
                            ui.referenceTxt2.innerHTML   = db[3][0][1] + db[3][1][0];

                        ui.rightRailContainer[0].children[0].innerHTML = db[0][0];
                        ui.rightRailContainer[0].children[1].innerHTML = db[1][0];
                        ui.rightRailContainer[0].children[2].innerHTML = db[1][2];
                        ui.rightRailContainer[0].children[4].innerHTML = db[3][0][1] + db[3][1][0];
                    }

                    if(document.querySelector('#panel_3')) {
                            ui.safetyHdr3      = document.querySelector('#panel_3 .box-warning-hdr');
                            ui.boxedWarning3   = document.querySelector('#panel_3 .boxed-warning span.boxed-warning-text');
                            ui.instructionTxt3 = document.querySelector('#panel_3 .boxed-warning-instructions');
                            ui.safetyListTxt3  = document.querySelector('#panel_3 .safety-considerations-list');
                            ui.referenceTxt3   = document.querySelector('#panel_3 .boxed-warning-references');

                            ui.safetyHdr3.innerHTML      = db[0][1];
                            ui.safetyListTxt3.innerHTML  = db[2][1] + db[2][2];
                            ui.instructionTxt3.innerHTML = db[1][2];
                            ui.referenceTxt3.innerHTML   = db[3][0][1] + db[3][1][0];
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

    ui.injector();

// (function(){
    
    
// })();