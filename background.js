let current = "";
let urArray = [];


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    while(changeInfo.status !== 'complete'){
        current = tab.url;
        console.log(current);
        urArray.push(current);
        console.log(urArray);
    }
});


 chrome.tabs.onCreated.addListener(function(tab){
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
      console.log(tabs[0].url);
    }
   );
 })
 

