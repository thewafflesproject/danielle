// crosssiteXXXverysafe
(function (){
  var link = document.createElement("a");
      var img = document.createElement("img");
      var int = Math.floor(Math.random() * (5)) ;
      var links = [
        '//thedanielleproject.com/',
        '//thesahilproject.com/',
        '//thejimproject.com/',
        '//thegabeproject.com/',
        '//themattproject.com/'
      ];
      img.src = "//thedanielleproject.com/images/webrngs1.gif"
      link.target = "_blank"
      link.href = links[int]
      link.appendChild(img);
      document.getElementById('webrng').appendChild(link);
})();