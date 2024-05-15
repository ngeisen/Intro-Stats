var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Types of Data",
  "body": " Types of Data  Text of section.  "
},
{
  "id": "sec-two",
  "level": "1",
  "url": "sec-two.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graphing Data",
  "body": " Graphing Data  "
},
{
  "id": "sec-three",
  "level": "1",
  "url": "sec-three.html",
  "type": "Section",
  "number": "1.3",
  "title": "Using StatKey",
  "body": " Using StatKey  "
},
{
  "id": "ChapterTwo",
  "level": "1",
  "url": "ChapterTwo.html",
  "type": "Chapter",
  "number": "2",
  "title": "Descriptive Statistiscs",
  "body": " Descriptive Statistiscs  "
},
{
  "id": "ChapterProb",
  "level": "1",
  "url": "ChapterProb.html",
  "type": "Chapter",
  "number": "3",
  "title": "Probability",
  "body": " Probability  "
},
{
  "id": "ChapterBootstrap",
  "level": "1",
  "url": "ChapterBootstrap.html",
  "type": "Chapter",
  "number": "4",
  "title": "Bootstrapping",
  "body": " Bootstrapping  "
},
{
  "id": "ChapterTesting",
  "level": "1",
  "url": "ChapterTesting.html",
  "type": "Chapter",
  "number": "5",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
