document.getElementById("copyButton").addEventListener("click", () => {
    chrome.tabs.query({}, (tabs) => {
      const urls = tabs.map(tab => tab.url).join('\n');
      copyToClipboard(urls);
      alert("URLs copied to clipboard!");
    });
  });
  
  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  