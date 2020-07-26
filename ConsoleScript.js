// Adapted from codingcat's work for my specific use case/with small upgrades.
// Set whatever download name your heart desires here.
let downloadName = "pdfDownload";

// We'll be utilizing jsPDF for PDF file generation
let jsPDF = document.createElement("script");
jsPDF.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js";

jsPDF.onload = function () {

    let pdf = new jsPDF();
    let pages = document.getElementsByTagName("img");

    pages.forEach(val => {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.width = val.width;
        canvas.height = val.height;
        context.drawImage(val, 0, 0, val.width, val.height);

        pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0);
        pdf.addPage();
    });

    pdf.save(downloadName + ".pdf")
}
document.body.appendChild(jsPDF);
