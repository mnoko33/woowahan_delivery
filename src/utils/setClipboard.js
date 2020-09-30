export const setClipboard = text => {
  const textArea = document.createElement('textArea');
  textArea.value = text;
  document.body.appendChild(textArea)
  textArea.select();
  document.execCommand('copy')
  document.body.removeChild(textArea);
}