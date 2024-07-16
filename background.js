let lastPostResponse = '';

chrome.webRequest.onCompleted.addListener(
  async function(details) {
    if (details.method === "POST" && details.url.includes("GetGame")) {
      const response = await fetch(details.url, {
        method: 'POST',
        headers: details.requestHeaders,
        body: details.requestBody
      });
      lastPostResponse = await response.text();
    }
  },
  { urls: ["<all_urls>"] }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "getLastPostResponse") {
      sendResponse({response: lastPostResponse});
    }
  }
);
