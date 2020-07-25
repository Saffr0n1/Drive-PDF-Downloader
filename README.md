# Drive-PDF-Downloader
For when you want to access a Google Drive view-only protected PDF file to read through another (more functional) PDF reader. 

Google Drive saves PDF files in read-only mode as individual page images. The way to download this is thus to search through 
a given document, convert each page to an image, and write this to a PDF file. 

To use, first open the Drive PDF file, open the Console tab for the webpage, paste the contents of **ConsoleScript.js** and run. 
Afterwards, download the generated file and run the **CompilePDF.cmd** file. This specific one is written for windows but writing
one for Linux is a one-liner. 
