chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	details.requestHeaders.push({name: "prefer", value: "safe"});
	return {requestHeaders: details.requestHeaders};
}, {urls: ["<all_urls>"]}, ["requestHeaders", "blocking"]);