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
                        target.classList.add("active");
                        tabsModule.addToClassList("tab_content" + j, "active");
                        tabsModule.addToClassList("toggle" + j, "toggle_active");
                        tabsModule.addToClassList("content" + j, "content_active");
                    }
                    else {
                        tabsModule.removeFromClassList("tab" + j, "active");
                        tabsModule.removeFromClassList("tab_content" + j, "active");
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
                        target.classList.contains("toggle_active") ? target.classList.remove("toggle_active") : target.classList.add("toggle_active");
                        document.getElementById("content" + j).classList.contains("content_active") ? tabsModule.removeFromClassList("content" + j, "content_active") : tabsModule.addToClassList("content" + j, "content_active");
                    }
                    else {
                        tabsModule.removeFromClassList("toggle" + j, "toggle_active");
                        tabsModule.removeFromClassList("content" + j, "content_active");
                    }
                }
            })
        }
    }
};
tabsModule.tabs();
tabsModule.show();





