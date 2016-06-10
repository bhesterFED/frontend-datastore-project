//Check to see if tile object exist and if 
//not create an empty object
var tile = tile || {};

// Populate empty tile object with 
// Properties and Methods for Mosaic Tiles
tile = {
  // Mosaic Tile Properties
  pageTitle      : document.title,
  isBranded      : document.body.classList.contains('isBranded'),
  hasTabs        : document.body.classList.contains('hasTabs'),
  hasRollingTabs : document.body.classList.contains('hasRollingTabs'),
  hasIndications : document.body.classList.contains('hasIndications'),
  hasSafety      : document.body.classList.contains('hasSafety'),

  clickedTab     : null,
  tabPanel       : null,
  tabContentArea : null,
  tabs           : null,
  navitem        : null,
  
  pages          : null,
  tabID          : null,
  rollTabBtn1    : null,
  rollTabBtn2    : null,
  btn : null,


  setTabs : function () {
    'use strict';
        var current;
        
        try {
            current = this.parentNode.getAttribute("data-current");

            //remove class of activetabheader and hide old contents
            document.querySelector("#tabBtn_" + current).removeAttribute("class");
            document.querySelector("#panel_" + current).style.display="none";
            tile.tabID = this.id.split("_")[1];

            //add class of ACTIVE to new SELECTED tab and show contents
            this.setAttribute("class","active");
            document.querySelector("#panel_" + tile.tabID).style.display="block";
            this.parentNode.setAttribute("data-current",tile.tabID);
        }
        catch (error) {
            // console.log(error);
            return false;
        }
  },
  rollingTabs : function(e) {
    var clickedTab = e.target,
        tabsGroup = clickedTab.parentNode,
        tabButtons = tabsGroup.children,
        that = this;
          
    tile.forEachItemInGroup(tabButtons, function(index, value) {
      var topPx = value.offsetTop + 'px';
      value.style.top = topPx;
      value.classList.remove('active');
    });

    // tile.forEachItemInGroup(tabButtons, function(index, value){
    //   value.style.position = 'absolute';
    // });

    tile.forEachItemInGroup(tabButtons, function(index, listItem) {
       tile.btn = listItem;
       
    });

    var childs = Array.prototype.slice.call(tabButtons);
    childs.push(childs.shift());
    childs.splice(0, 0, childs.splice(tile.forEachItemInGroup(clickedTab, function(index, value){index = 'indx'; })-1, 1)[0]);
   

    var offset = 0;
    var activeTab;

    tile.forEachItemInGroup(childs, function(index, listItem) {
      if(index === 0) {
        offset = 0;
        that.classList.add('active');
        activeTab = that;
      } else {
        offset = (index - 1) *  tile.btn.offsetHeight + activeTab.offsetHeight;
      }

      clickedTab.parentNode.appendChild(that);
      console.dir(clickedTab.parentNode);
      // clickedTab.parentNode.children.reverse();
      // this.animate({'top': offset});
      // TweenMax.to(this, 2, {'top': offset});
      // tile.moveToTop(tile.btn, offset, activeTab.offsetHeight);

      for (var i = 0; i < tabButtons.length; i++) {
        // console.log(tabButtons[i].style.top = offset + 'px');
      }

    });

  },

  simpleAccordion : function() {
    function makeAccordion(accordion) {
      var targets, currentTarget, i;

      targets = accordion.querySelectorAll('.accordion > * > h2');
      for(i = 0; i < targets.length; i++) {
        targets[i].addEventListener('click', function () {
          if (currentTarget)
            currentTarget.classList.remove('expanded');
          
          currentTarget = this.parentNode;
          currentTarget.classList.add('expanded');
        }, false);
      }

      accordion.classList.add('current');
    }

    // Find all the accordions to enable
    accordions = document.querySelectorAll('.accordion');
    
    // Array functions don't apply well to NodeLists
    for(i = 0; i < accordions.length; i++) {
      makeAccordion(accordions[i]);
    }
  },

  //Utility Functions
  forEachItemInGroup : function (array, callback, scope) {
    for (var e = 0; e < array.length; e++) {
      callback.call(scope, e, array[e]);
    }
  },

  init : function() {
    if(tile.hasTabs) {
        tile.tabContentArea = document.querySelector('.tabContent').querySelector('.content-area');
        tile.btns           = document.querySelector('#tab-btns').querySelectorAll('li');
        tile.tabBtn1        = document.querySelector("#tabBtn_1");
        tile.pages          = document.querySelector("#tabscontent").querySelectorAll(".tabContent");

        //store which tab we are on
        tile.tabID = tile.tabBtn1.id.split("_")[1];
        tile.tabBtn1.parentNode.setAttribute("data-current", tile.tabID);

        //set current tab with class of ACTIVE
        tile.tabBtn1.setAttribute("class","active");

        //Set the stage by hiding tab content we don't need
        for ( i = 1; i < tile.pages.length; i++) {
          tile.pages[i].style.display="none";
        }

        //this adds click event to tab buttons
        for (var i = 0; i < tile.btns.length; i++) {
          tile.btns[i].onclick = tile.setTabs;
        }

        for (var t = 0; t < tile.btns.length; t++) {
            tile.btns[t].addEventListener('click', tile.targetTabPanel, false);
        }
    }


    if(tile.hasRollingTabs) {
      tile.rollTabBtn1 = document.querySelector('#rt1').querySelectorAll('li');
      tile.rollTabBtn2 = document.querySelector('#rt2').querySelectorAll('li');



      for (var r = 0; r < tile.rollTabBtn1.length; r++) {
        tile.rollTabBtn1[r].addEventListener('touchend', tile.rollingTabs, true);
        var thingy = tile.rollTabBtn1[r].offsetTop;
        
      }

      for ( r = 0; r < tile.rollTabBtn2.length; r++) {
        tile.rollTabBtn2[r].addEventListener('touchend', tile.rollingTabs, false);
      }

    }
  }
};

tile.init();



