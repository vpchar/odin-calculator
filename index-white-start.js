window.onload=function(){localStorage["store.settings.themeSelection"]||(localStorage["store.settings.themeSelection"]='"default"');setTheme()};function setTheme(){'"default"'==localStorage["store.settings.themeSelection"]?window.location="index-new.html":'"old"'==localStorage["store.settings.themeSelection"]&&(window.location="index-old.html")};
