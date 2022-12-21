window.onload = function() {
    //if first start, set default theme in storage:
    if(!localStorage['store.settings.themeSelection'])localStorage['store.settings.themeSelection'] = '"default"';
    //
    setTheme();
}
function setTheme(){
    //set new theme
    var theme = '"default"';
         if (localStorage['store.settings.themeSelection'] == '"white"') theme = 'index-white.html'
    else if (localStorage['store.settings.themeSelection'] == '"old"') theme = 'index-old.html'
    else theme = 'index-new.html';
    //update theme
   window.location = theme;

}