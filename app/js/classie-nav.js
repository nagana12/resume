(function() {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function(ev) {
                ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'active')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.active'), 'active');
                // set current
                classie.add(item, 'active');
            };

        [].slice.call(menuItems).forEach(function(el) {
            el.addEventListener('click', setCurrent);
        });
    });

    [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function() {
            classie.add(link, 'link-copy--animate');
            setTimeout(function() {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);
