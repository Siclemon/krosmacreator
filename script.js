const nameInput = document.getElementById('nom');
const namePreview = document.getElementById('name');
const descInput = document.getElementById('effet');
const descPreview = document.getElementById('desc');
const canvas = document.getElementById('canvas');

nameInput.addEventListener("change", () => {
    namePreview.textContent = nameInput.value;
});

descInput.addEventListener("change", () => {
    descPreview.textContent = descInput.value;
});

const truc = canvas.getContext('2d');

truc.font = '30px sans-serif'
truc.fillText('Text caca',20,100);
document.getElementById('canvas').toDataURL('efdchu/jpeg')

// Source - https://stackoverflow.com/a/50300880
// Posted by Ulf Aslak, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-22, License - CC BY-SA 4.0

var download = function(){
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}

download();