function versionCompare(a,c,b){function d(a){return(e?/^\d+[A-Za-z]*$/:/^\d+$/).test(a)}var e=b&&b.lexicographical;b=b&&b.zeroExtend;a=a.split(".");c=c.split(".");if(!a.every(d)||!c.every(d))return NaN;if(b){for(;a.length<c.length;)a.push("0");for(;c.length<a.length;)c.push("0")}e||(a=a.map(Number),c=c.map(Number));for(b=0;b<a.length;++b){if(c.length==b)return 1;if(a[b]!=c[b])return a[b]>c[b]?1:-1}return a.length!=c.length?-1:0}
window.onload=function(){localStorage["store.settings.themeSelection"]||(localStorage["store.settings.themeSelection"]='"default"')};chrome.runtime.setUninstallURL("https://melanto.com/calculator/removed-app.html");var currVersion=getVersion(),prevVersion=localStorage.version;function getVersion(){return chrome.app.getDetails().version}function onInstall(){navigator.onLine&&chrome.tabs.create({url:"https://melanto.com/calculator/readme-app.html"})}
function onUpdate(){navigator.onLine&&0>versionCompare(prevVersion,"4.0")&&chrome.tabs.create({url:"https://melanto.com/calculator/whatsnew-4-0-app.html"})}chrome.runtime.onInstalled.addListener(function(a){currVersion!=prevVersion&&(localStorage.version=currVersion);"install"==a.reason?"undefined"==typeof prevVersion&&onInstall():"update"==a.reason&&prevVersion!=currVersion&&onUpdate()});