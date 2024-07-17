document.getElementById('alertButton').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.TAB_ID_NONE },
    function: showAlert
  });
});

function showAlert() {
  alert("Hello from the popup script!");
}
