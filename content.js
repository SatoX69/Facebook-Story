function CDN_Elem() {
  const element = document.querySelector('div[data-force-autoplay="false"][data-use-device-sound-state="true"]');

  if (element) {
    var htmlContent = document.documentElement.innerHTML;
    var regex = /data-video-url="(.*?)"/g;
    var lastVideoUrl;
    var match;

    while ((match = regex.exec(htmlContent)) !== null) {
      lastVideoUrl = match[1];
    }

    if (lastVideoUrl) {
      lastVideoUrl = CDN_link(lastVideoUrl);
      if (confirm(`Open Story`)) {
        window.open(lastVideoUrl, '_blank');
      }
    } else {
      console.log("No CDN Found");
    }
  } else {
    console.log("CDN not found, retrying...");
    setTimeout(CDN_Elem, 2000);
  }
}

CDN_Elem();

function CDN_link(str) {
  return str.replace(/&amp;/g, "&");
}