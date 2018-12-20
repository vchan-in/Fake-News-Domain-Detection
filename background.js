chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen)
  { 
      console.log('FND: Turning fake links red!');
      chrome.tabs.executeScript(
          {
            code: 'var config = 1;'
          },
          function() {
            chrome.tabs.executeScript({file: 'domainlist.js'});
          }
      );
}
});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('FND: Turning ' + tab.url + ' fake links red!');
  chrome.tabs.executeScript(
          {
            code: 'var config = 1;'
          },
          function() {
            chrome.tabs.executeScript({file: 'domainlist.js'});
          }
      );
});
chrome.tabs.onUpdated.addListener(function (tabID, info, tab) {
    console.log("FND: Status: " + info.status);
    if (info.status == "complete") {
        chrome.tabs.executeScript(
          {
            code: 'var config = 1;'
          },
          function() {
            chrome.tabs.executeScript({file: 'domainlist.js'});
          }
      );
    }});

chrome.tabs.onActivated.addListener(function (activeInfo){
    console.log("FND: onActivated:" );
    chrome.tabs.executeScript(
          {
            code: 'var config = 1;'
          },
          function() {
            chrome.tabs.executeScript({file: 'domainlist.js'});
          }
      );
});