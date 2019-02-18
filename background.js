
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});

chrome.pageAction.onClicked.addListener((tab) => {
    console.log("Clicked");
});

chrome.runtime.onSuspend.addListener(() => {
    alert("Unloading.");
});