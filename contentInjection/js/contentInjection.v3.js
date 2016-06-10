// HEADERS db.tables.headings
// BOXED WARNING AND LEAD PARAGRAPHS db.tables.boxwarnings
// SAFETY CONSIDERATION BULLETED LIST db.tables.safetylists
// REFERENCES db.tables.references

(function(){
    var ui = {
        tileTitle          : document.title,
        // displayedContent   : null,
        rightRailContainer : document.querySelectorAll('.right-rail-content'),
        tileId             : null,
        tabPanelId         : null,
        bBug               : false,

        populateContent: function(tileId, panelId){
            // for (var i = 0; i < ui.rightRailContainer.length; i++) {
            //     console.log('data'+[i]+'Entry');
            //     console.log(ui.rightRailContainer[i].children);
            // }

            //DOM elements
            var tab1Data = ui.rightRailContainer[0].children,
            tab2Data     = ui.rightRailContainer[1].children,
            tab3Data     = ui.rightRailContainer[2].children;
            // if(ui.rightRailContainer[3].children){
            //     console.log("yep there is a 4th tab on this page");
            //     var tab4Data     = ui.rightRailContainer[3].children;
            // } else {
            //     console.log("Nope, no a 4th tab on this page");
            // }
            // tab4Data     = ui.rightRailContainer[3].children;

            //Re-assigned Database addresses
            var heading    = db.tables.headings,
            boxwarning     = db.tables.boxwarnings,
            safetylist     = db.tables.safetylists,
            labels         = db.tables.references.labels,
            footnote       = db.tables.references.footnote,
            misc           = db.tables.misc;
            
            switch(tileId) {
                case 'tile5':
                    if(panelId === 'tab1') {
                        tab1Data[0].innerHTML = heading[0];
                        tab1Data[1].innerHTML = boxwarning[0];
                        tab1Data[2].innerHTML = boxwarning[2];
                        tab1Data[3].innerHTML = misc[0];
                        tab1Data[4].innerHTML = labels[0]+footnote[0];
                    }
                    if(panelId === 'tab2'){
                        tab2Data[0].innerHTML = heading[1];
                        tab2Data[1].innerHTML = safetylist[0];
                        tab2Data[2].innerHTML = boxwarning[2];
                        tab2Data[3].innerHTML = labels[0]+footnote[0];
                    }
                    if(panelId === 'tab3') {
                        tab3Data[0].innerHTML = db.tables.headings[1];
                        tab3Data[1].innerHTML = db.tables.safetylists[1]+db.tables.safetylists[2];
                        tab3Data[2].innerHTML = db.tables.boxwarnings[2];
                        tab3Data[3].innerHTML = db.tables.references.labels[0]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[2];
                    }
                break;

                case 'tile60':
                    var tab4Data = ui.rightRailContainer[3].children;
                    if(panelId === 'tab1-rTab1') {
                        tab1Data[0].innerHTML = db.tables.headings[0];
                        tab1Data[1].innerHTML = db.tables.boxwarnings[0];
                        tab1Data[2].innerHTML = db.tables.boxwarnings[2];
                        tab1Data[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[1];
                    }
                    if(panelId === 'tab1-rTab2') {
                        tab2Data[0].innerHTML = db.tables.headings[1];
                        tab2Data[1].innerHTML = db.tables.boxwarnings[3];
                        tab2Data[2].innerHTML = db.tables.boxwarnings[2];
                        tab2Data[3].innerHTML = db.tables.references.labels[1]+' '+db.tables.references.footnote[3];
                    }
                    if(panelId==='tab1-rTab3') {
                        tab3Data[0].innerHTML = db.tables.headings[1];
                        tab3Data[1].innerHTML = db.tables.safetylists[3];
                        tab3Data[2].innerHTML = db.tables.boxwarnings[2];
                        tab3Data[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+' '+db.tables.references.footnote[2];
                    }
                    if(panelId === 'tab2-rTab1') {
                        tab4Data[0].innerHTML = db.tables.headings[1];
                        tab4Data[1].innerHTML = db.tables.safetylists[4];
                        tab4Data[2].innerHTML = db.tables.boxwarnings[2];
                        tab4Data[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[2];
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
            }
        },

        /*
            Identify the Tile name and then assign a Tile ID for
            to it. Identify the Tab that is being viewed and assign
            a Tab ID to it.  

        */
        init: function(){
            switch(ui.tileTitle) {
                case 'Dosing and Monitoring':
                    ui.tileId = 'tile5';
                    if(document.querySelector('#panel_1')) {
                        ui.tabPanelId = 'tab1';
                        ui.populateContent(ui.tileId, ui.tabPanelId);
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
            }
        }
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
            console.log('DOM items in the Right Rail:');
            console.dir(ui.rightRailContainer[0].children);
            // if(ui.rightRailContainer[0].children) {
            //     console.log(ui.rightRailContainer[0].children[1].children[0]);
            // }
            console.dir(ui.rightRailContainer[1].children);
            console.dir(ui.rightRailContainer[2].children);
            console.dir(ui.rightRailContainer[4].children);
            
        }
        catch(error) {
            console.log(error);
        }
    }
ui.init();
})();