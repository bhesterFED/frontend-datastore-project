// HEADERS db.headings
// BOXED WARNING AND LEAD PARAGRAPHS db.boxwarnings
// SAFETY CONSIDERATION BULLETED LIST db.safetylists
// REFERENCES db.references

// (function(){
    var ui = {
        tileTitle           : document.title,
        // displayedContent : null,
        rightRailContainer  : document.querySelectorAll('.right-rail-content'),
        
        tileId              : null,
        tabPanelId          : null,
        tab1Data            : null,
        tab2Data            : null,
        tab3Data            : null,
        tab4Data            : null,
        bBug                : false,

        populateContent: function(tileId, panelId){
            // console.log(tileId, panelId);
            //DOM elements
            ui.tab1Data = ui.rightRailContainer[0].children;
            ui.tab2Data = ui.rightRailContainer[1].children;
            
            if(ui.rightRailContainer[2] === undefined) {
                return false;
            } else {
                ui.tab3Data = ui.rightRailContainer[2].children;
            }
        
            //Re-assigned Database addresses
            var heading    = db.headings,
            boxwarning     = db.boxwarnings,
            safetylist     = db.safetylists
            labels         = db.references.labels,
            footnote       = db.references.footnote,
            misc           = db.misc;
            
            switch(tileId) {
                case 'tile5':
                    if(panelId === 'tab1') {
                        ui.tab1Data[0].innerHTML = heading[0];
                        ui.tab1Data[1].innerHTML = boxwarning[0];
                        ui.tab1Data[2].innerHTML = boxwarning[2];
                        ui.tab1Data[3].innerHTML = misc[0];
                        ui.tab1Data[4].innerHTML = labels[0]+footnote[0];
                    }
                    if(panelId === 'tab2'){
                        ui.tab2Data[0].innerHTML = heading[1];
                        ui.tab2Data[1].innerHTML = safetylist[0];
                        ui.tab2Data[2].innerHTML = boxwarning[2];
                        ui.tab2Data[3].innerHTML = labels[0]+footnote[0];
                    }
                    if(panelId === 'tab3') {
                        ui.tab3Data[0].innerHTML = db.headings[1];
                        ui.tab3Data[1].innerHTML = safetylist[1]+safetylist[2];
                        ui.tab3Data[2].innerHTML = boxwarning[2];
                        ui.tab3Data[3].innerHTML = labels[0]+footnote[0]+labels[2]+footnote[2];
                    }
                break;

                case 'tile6':
                    ui.tab4Data = ui.rightRailContainer[3].children;
                    if(panelId === 'tab1-rTab1') {
                        ui.tab1Data[0].innerHTML = heading[0];
                        ui.tab1Data[1].innerHTML = boxwarning[0];
                        ui.tab1Data[2].innerHTML = boxwarning[2];
                        ui.tab1Data[3].innerHTML = labels[1]+footnote[0]+labels[2]+footnote[1];
                    }
                    if(panelId === 'tab1-rTab2') {
                        ui.tab2Data[0].innerHTML = heading[1];
                        ui.tab2Data[1].innerHTML = boxwarning[3];
                        ui.tab2Data[2].innerHTML = boxwarning[2];
                        ui.tab2Data[3].innerHTML = labels[1]+' '+footnote[3];
                    }
                    if(panelId==='tab1-rTab3') {
                        ui.tab3Data[0].innerHTML = heading[1];
                        ui.tab3Data[1].innerHTML = safetylist[3];
                        ui.tab3Data[2].innerHTML = boxwarning[2];
                        ui.tab3Data[3].innerHTML = labels[1]+footnote[0]+labels[2]+' '+footnote[2];
                    }
                    if(panelId === 'tab2-rTab1') {
                        ui.tab4Data[0].innerHTML = heading[1];
                        ui.tab4Data[1].innerHTML = safetylist[4];
                        ui.tab4Data[2].innerHTML = boxwarning[2];
                        ui.tab4Data[3].innerHTML = labels[1]+footnote[0]+labels[2]+footnote[2];
                    }
                break;

                case 'tile7':
                break;

                case 'tile8':
                break;

                case 'tile9':
                break;

                case 'tile10':
                break;

                case 'tile11':
                break;

                case 'tile12':
                break;

                case 'tile13':
                break;

                case 'tile0':
                console.log('I am here');
                    if(ui.tabPanelId === 'tab1') {
                        ui.tab1Data[0].innerHTML = heading[0];
                        ui.tab1Data[1].innerHTML = boxwarning[0];
                        ui.tab1Data[2].innerHTML = boxwarning[2];
                        ui.tab1Data[3].innerHTML = misc[0];
                        ui.tab1Data[4].innerHTML = labels[0]+footnote[0];
                    }
                    if(ui.tabPanelId === 'tab2'){
                        ui.tab2Data[0].innerHTML = heading[1];
                        ui.tab2Data[1].innerHTML = safetylist[0];
                        ui.tab2Data[2].innerHTML = boxwarning[2];
                        ui.tab2Data[3].innerHTML = labels[0]+footnote[0];
                    }
                    // if(panelId === 'tab3') {
                    //     ui.tab3Data[0].innerHTML = db.headings[1];
                    //     ui.tab3Data[1].innerHTML = safetylist[1]+safetylist[2];
                    //     ui.tab3Data[2].innerHTML = boxwarning[2];
                    //     ui.tab3Data[3].innerHTML = labels[0]+footnote[0]+labels[2]+footnote[2];
                    // }
                break;
            }
        },

        /*
            Identify the Tile name and then assign a Tile ID for
            to it. Identify the Tab that is being viewed and assign
            a Tab ID to it.  
        */
        init: function(){
            // console.log(ui.tileTitle);
            switch(ui.tileTitle) {
                case 'Dosing and Monitoring':
                    ui.tileId = 'tile5';
                    if(document.querySelector('#panel_1')) {
                        ui.tabPanelId = 'tab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId)
                    }

                    if(document.querySelector('#panel_2')) {
                        ui.tabPanelId = 'tab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }

                    if(document.querySelector('#panel_3')) {
                        ui.tabPanelId = 'tab3';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                break;

                case 'Script Protection (HOW)':
                    ui.tileId = 'tile6';
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[0]) {
                        ui.tabPanelId = 'tab1-rTab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[1]) {
                        ui.tabPanelId = 'tab1-rTab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[2]) {
                        ui.tabPanelId = 'tab1-rTab3';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[0]) {
                        ui.tabPanelId = 'tab2-rTab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[1]) {
                        ui.tabPanelId = 'tab2-rTab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[2]) {
                        ui.tabPanelId = 'tab2-rTab3';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                break;

                case 'Script Protection Pharmacy':
                    ui.tileId = 'tile7';
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[0]) {
                        ui.tabPanelId = 'tab1-rTab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[1]) {
                        ui.tabPanelId = 'tab1-rTab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_1') && document.querySelector('#rt1').children[2]) {
                        ui.tabPanelId = 'tab1-rTab3';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[0]) {
                        ui.tabPanelId = 'tab2-rTab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[1]) {
                        ui.tabPanelId = 'tab2-rTab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                    if(document.querySelector('#panel_2') && document.querySelector('#rt2').children[2]) {
                        ui.tabPanelId = 'tab2-rTab3';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                break;

                case 'Patient Counseling':
                    ui.tileId = 'tile8';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                break;

                case 'Patient Counseling Pharmacy':
                    ui.tileId = 'tile9';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                break;

                case 'Patient Support':
                    ui.tileId = 'tile10';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                break;

                case 'True Cost of Synthroid':
                    ui.tileId = 'tile11';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                break;

                case 'True Cost of Synthroid Pharmacy':
                    ui.tileId = 'tile12';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                break;

                case 'Synthroid Coverage':
                    ui.tileId = 'tile13';
                    if(document.querySelector('#panel_1')) {

                    }
                    if(document.querySelector('#panel_2')) {
                        
                    }
                    if(document.querySelector('#panel_3')) {
                        
                    }
                break;

                case 'Temp':
                   ui.tileId = 'tile0';
                    if(document.querySelector('#panel_1')) {
                        ui.tabPanelId = 'tab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }

                    if(document.querySelector('#panel_2')) {
                        ui.tabPanelId = 'tab2';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
                    }
                break;
            }
        },
        
    };

    //For DeBugging and Logging
    if(ui.bBug){
        try {
            console.log('Data Source:');
            console.dir(db);
            console.log('Right Rail:');
            console.dir(ui.rightRailContainer);
            // console.dir(document.querySelector('#rt2').children[2]);
            // console.log(document.querySelector('#rt2').children[2]);
            // console.log(ui.rightRailContainer[0]);
            // console.log(' ');
            // console.log('DOM items in the Right Rail:');
            // console.dir(ui.rightRailContainer[0].children);
            // if(ui.rightRailContainer[0].children) {
            //     console.log(ui.rightRailContainer[0].children[1].children[0]);
            // }
            // console.dir(ui.rightRailContainer[1].children);
            // console.dir(ui.rightRailContainer[2].children);
            // console.dir(ui.rightRailContainer[3].children);
            
        }
        catch(error) {
            console.log(error);
        }
    }
ui.init();
// })();