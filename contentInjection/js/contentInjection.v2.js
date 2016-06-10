// HEADERS db.tables.headings
// BOXED WARNING AND LEAD PARAGRAPHS db.tables.boxwarnings
// SAFETY CONSIDERATION BULLETED LIST db.tables.safetylists
// REFERENCES db.tables.references

(function(){
var ui = {
    tileTitle       : document.title,
    displayedContent : null,
    rightRailContainer : document.querySelectorAll('.right-rail-content'),
    tileId : null,
    tabPanelId : null,
    bBug : true,

    populateContent: function(tileId, panelId){
        switch(tileId) {
            case 'tile5':
                if(panelId === 'tab1') {
                    ui.rightRailContainer[0].children[0].innerHTML = db.tables.headings[0];
                    ui.rightRailContainer[0].children[1].innerHTML = db.tables.boxwarnings[0];
                    ui.rightRailContainer[0].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[0].children[3].innerHTML = db.tables.misc[0];
                    ui.rightRailContainer[0].children[4].innerHTML = db.tables.references.labels[0]+db.tables.references.footnote[0];
                }
                if(panelId === 'tab2'){
                    ui.rightRailContainer[1].children[0].innerHTML = db.tables.headings[1];
                    ui.rightRailContainer[1].children[1].innerHTML = db.tables.safetylists[0];
                    ui.rightRailContainer[1].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[1].children[3].innerHTML = db.tables.references.labels[0]+db.tables.references.footnote[0];
                }
                if(panelId === 'tab3') {
                    ui.rightRailContainer[2].children[0].innerHTML = db.tables.headings[1];
                    ui.rightRailContainer[2].children[1].innerHTML = db.tables.safetylists[1]+db.tables.safetylists[2];
                    ui.rightRailContainer[2].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[2].children[3].innerHTML = db.tables.references.labels[0]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[2];
                }
            break;

            case 'tile6':
                if(panelId === 'tab1-rTab1') {
                    ui.rightRailContainer[0].children[0].innerHTML = db.tables.headings[0];
                    ui.rightRailContainer[0].children[1].innerHTML = db.tables.boxwarnings[0];
                    ui.rightRailContainer[0].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[0].children[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[1];
                }
                if(panelId === 'tab1-rTab2') {
                    ui.rightRailContainer[1].children[0].innerHTML = db.tables.headings[1];
                    ui.rightRailContainer[1].children[1].innerHTML = db.tables.boxwarnings[3];
                    ui.rightRailContainer[1].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[1].children[3].innerHTML = db.tables.references.labels[1]+' '+db.tables.references.footnote[3];
                }
                if(panelId==='tab1-rTab3') {
                    ui.rightRailContainer[2].children[0].innerHTML = db.tables.headings[1];
                    ui.rightRailContainer[2].children[1].innerHTML = db.tables.safetylists[3];
                    ui.rightRailContainer[2].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[2].children[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+' '+db.tables.references.footnote[2];
                }
                if(panelId === 'tab2-rTab1') {
                    ui.rightRailContainer[3].children[0].innerHTML = db.tables.headings[1];
                    ui.rightRailContainer[3].children[1].innerHTML = db.tables.safetylists[4];
                    ui.rightRailContainer[3].children[2].innerHTML = db.tables.boxwarnings[2];
                    ui.rightRailContainer[3].children[3].innerHTML = db.tables.references.labels[1]+db.tables.references.footnote[0]+db.tables.references.labels[2]+db.tables.references.footnote[2];
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

    init  : function(){
        // Which Tile am I on
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
        console.log('Right Rail:');
        console.dir(ui.rightRailContainer);
        // console.dir(document.querySelector('#rt2').children[2]);
        // console.log(document.querySelector('#rt2').children[2]);
        // console.log(ui.rightRailContainer[0]);
        // console.log(' ');
        console.log('DOM items in the Right Rail:');
        console.dir(ui.rightRailContainer[0].children);
        console.log('Data Source:');
        console.dir(db);
    }
    catch(error) {
        console.log(error);
    }
}

ui.init();
})();