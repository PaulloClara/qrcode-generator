const qrcodeEl = document.querySelector("#qrcode");
const urlInputEl = document.querySelector("#urlForm input");
const downloadButtonEl = document.querySelector("#qrcodeDownload");

const qrcodeOpts = {
  text: "https://google.com",
  width: 128,
  height: 128
};
const qrcode = new QRCode(qrcodeEl, qrcodeOpts);

function getQrcodeImage() {
  return document.querySelector("#qrcode img").src;
}

function setQrcodeDownloadLink(link) {
  downloadButtonEl.href = link;
}

function configQrcodeDownloadLink() {
  setQrcodeDownloadLink(getQrcodeImage());
}

function handleUrlSubmit(evt) {
  evt.preventDefault();
  qrcode.makeCode(urlInputEl.value || qrcodeOpts.text);
  configQrcodeDownloadLink();
}

setTimeout(() => {
  configQrcodeDownloadLink();
}, 500);
