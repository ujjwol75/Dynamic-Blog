export function BlobToImage(dataURI) {
  const splitDataURI = dataURI?.split(',');
  const byteString =
    splitDataURI[0]?.indexOf('base64') >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
}
export function dataURItoBlob(dataURI) {
  var byteString = dataURI?.split(',')[0]?.indexOf('base64') >= 0 ? atob(dataURI?.split(',')[1])  : decodeURI(dataURI?.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  var bb = new Blob([ab]);
  return bb;
}