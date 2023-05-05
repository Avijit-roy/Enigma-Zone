let inputA = document.getElementById("du");
let inputB = document.getElementById("text");

function searCh() {
  if (inputB.value == "") {
    alert("invalid input!");
  } else {
    if (inputA.value == "vi") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (avi|mkv|mov|mp4|mpg|wmv|avchd|webm) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    } else if (inputA.value == "au") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (ac3|flac|m4a|mp3|ogg|wav|wma|webm) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    } else if (inputA.value == "eb") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (CBZ|CBR|CHM|DOC|DOCX|EPUB|MOBI|ODT|PDF|RTF|txt) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    } else if (inputA.value == "pi") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (bmp|gif|jpg|jpeg|png|psd|tif|tiff) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    } else if (inputA.value == "sg") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (apk|exe|iso|rar|tar|zip|swf) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    } else if (inputA.value == "co") {
      const url = `https://www.google.com/search?q=intext:"${inputB.value}" (7z|bz2|gz|iso|rar|zip) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis) intitle:"index.of./"`;
      window.open(url, "_blank");
    }
  }
}
