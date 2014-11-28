var tabsModule = {

    removeFromClassList: function (id, value) {
        document.getElementById(id).classList.remove(value);
    },

    addToClassList: function (id, value) {
        document.getElementById(id).classList.add(value);
    },

    tabs: function () {
        var tabItems = document.getElementsByClassName('tab');
        for (var i = 0; i < tabItems.length; i++) {
            document.getElementById("tab" + i).addEventListener('click', function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                for (var j = 0; j < tabItems.length; j++) {
                    if (document.getElementById("tab" + j) == target) {
                        target.classList.add("visible");
                        tabsModule.addToClassList("tab_content" + j, "visible");
                        tabsModule.addToClassList("toggle" + j, "toggleActive");
                        tabsModule.addToClassList("content" + j, "visible");
                    }
                    else {
                        tabsModule.removeFromClassList("tab" + j, "visible");
                        tabsModule.removeFromClassList("tab_content" + j, "visible");
                        tabsModule.removeFromClassList("toggle" + j, "toggleActive");
                        tabsModule.removeFromClassList("content" + j, "visible");
                    }
                }
            });
        }
    },

    show: function () {
        var toggleItems = document.getElementsByClassName('toggle');
        for (var i = 0; i < toggleItems.length; i++) {
            document.getElementById("toggle" + i).addEventListener('click', function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                for (var j = 0; j < toggleItems.length; j++) {
                    if (document.getElementById("toggle" + j) == target) {
                        target.classList.contains("toggleActive") ? target.classList.remove("toggleActive") : target.classList.add("toggleActive");
                        !document.getElementById("content" + j).classList.contains("hidden") ? tabsModule.addToClassList("content" + j, "hidden") : tabsModule.removeFromClassList("content" + j, "hidden");
                    }
                    else {
                        tabsModule.removeFromClassList("toggle" + j, "toggleActive");
                        tabsModule.addToClassList("content" + j, "hidden");
                    }
                }
            })
        }
    }
};
tabsModule.tabs();
tabsModule.show();





