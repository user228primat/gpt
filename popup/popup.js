document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({action: "getLastPostResponse"}, function(response) {
    document.getElementById('response').textContent = response.response;
  });
});
