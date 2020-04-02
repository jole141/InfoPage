
Webflow.push(function () {
    var fulls = $('.full-page');
    var win = $(window);
    Webflow.resize.on(function () {
      fulls.height(win.height());
    });
  });