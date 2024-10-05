chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.startsWith("https://www.facebook.com/stories/")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://github.com/SatoX69/Facebook-Story" });
});