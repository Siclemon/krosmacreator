

const nameInput = document.getElementById('nom');
const namePreview = document.getElementById('nameText');
const descInput = document.getElementById('effet');
const descPreview = document.getElementById('desc');
const canvas = document.getElementById('canvas');

nameInput.addEventListener("input", () => {
    namePreview.textContent = nameInput.value;
});

descInput.addEventListener("input", () => {
    descPreview.textContent = descInput.value;
});

// Source - https://stackoverflow.com/a/50300880
// Posted by Ulf Aslak, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-22, License - CC BY-SA 4.0

// var download = function () {
//     var link = document.createElement('a');
//     link.download = 'filename.png';
//     link.href = document.getElementById('canvas').toDataURL()
//     link.click();
// }



// html2canvas(document.body).then(function (canvass) {
//     document.body.appendChild(canvass);
//     canvass.toDataURL('fhel.png')
// });

function downloadTicket() {
    const ticketElement = document.getElementById("card");

    html2canvas(ticketElement).then((canvass) => {
        const link = document.createElement("a");
        link.download = "conference-ticket.png";
        link.href = canvass.toDataURL("image/png");
        link.click();
    });
};

downloadTicket();