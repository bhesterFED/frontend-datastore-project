var rtHdr = document.querySelectorAll('.revolving-tab h2.rtab'),
            revolvingTab1 = document.querySelectorAll('#panel_1 .revolving-tab');
            revolvingTab2 = document.querySelectorAll('#panel_2 .revolving-tab');

            var clickedH2 = [].slice.call(rtHdr);
            var rvTabList = [].slice.call(revolvingTab1);

            // rvTabList.forEach(function (item) {
            //     item.style.top = (item.offsetTop) + 'px';
            // });

            function moveTabs(event){
                var targetSyn = event.target,
                clickedParent = targetSyn.parentNode,
                parentSyn = targetSyn.parentNode.parentNode,
                childrenSyn = parentSyn.children;
                // Code goes here
                // console.log(clickedParent);

                var childrenSyn = [].slice.call(childrenSyn);

                childrenSyn.forEach(function (item) {
                    item.style.top = (item.offsetTop) + 'px';
                });

                for (var i = 0; i < childrenSyn.length; i++) {
                    childrenSyn[i].style.position = 'absolute';
                    childrenSyn[i].classList.remove('active');
                };

                var childs = childrenSyn;
                childs.push(childs.shift());
                childs.splice(0, 0, childs.splice(forEachItemInGroup(targetSyn, function(index, value){index = 'indx'; })-2, 1)[0]);

                console.dir(childs);

                var offset = 0;
                var activeChild;
                console.log(this.parentNode);

                forEachItemInGroup(childs, function(index, childrenSyn) {
                    // console.log(index);
                    if(index == 0) {
                        offset == 0;
                        this.parentNode.classList.add('active');
                        activeChild = clickedParent;
                    } else {

                        offset = (index-1) * 24 + 444;
                        console.log(offset);
                    }
                })

                /*
                childs.forEach(function(index) {
                    if(index == 0) {
                        offset == 0;
                        targetSyn.classList.add('active');
                        activeChild = targetSyn;
                    } else {
                        // offset = (index-1) * this.
                    }
                })
                */
                // clickedParent.classList.add('active');
                // childrenSyn

                function forEachItemInGroup (array, callback, scope) {
                    // console.log(callback);
                    for (var e = 0; e < array.length; e++) {
                      callback.call(scope, e, array[e]);
                    }
                }
                
            }

            for (var i = 0; i < clickedH2.length; i++) {
                clickedH2[i].addEventListener('touchend', moveTabs, false);
            }