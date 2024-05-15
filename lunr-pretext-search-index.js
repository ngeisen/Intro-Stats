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
  "body": " Types of Data    At the end of this section you will able to     Understand and apply the vocabulary associated with statistics.    Distinguish between quantitative data and categorical data.      Statistsics is the science of collecting, describing, and analyzing data.  The subjects\/objects that we obtain information about are called the cases or units in a dataset. These are represented as the rows  A variable is any characteristic that is recorded for each case. The variables generally correspond to the columns in a data table.  A categorical variable divides the cases into groups, placing each case into exactly one of two or more categories.  A quantitative variable measures or records a numerical quantity for each case.  Discuss structure of data, how collected.  discuss types of studies, create naming   Directions: Put the letters in order.    A    B    C    "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-section-name.html#objectives-1",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  At the end of this section you will able to     Understand and apply the vocabulary associated with statistics.    Distinguish between quantitative data and categorical data.    "
},
{
  "id": "p-5",
  "level": "2",
  "url": "sec-section-name.html#p-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Statistsics "
},
{
  "id": "p-6",
  "level": "2",
  "url": "sec-section-name.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cases "
},
{
  "id": "p-7",
  "level": "2",
  "url": "sec-section-name.html#p-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "p-8",
  "level": "2",
  "url": "sec-section-name.html#p-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "categorical variable "
},
{
  "id": "p-9",
  "level": "2",
  "url": "sec-section-name.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantitative variable "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-section-name.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": " Directions: Put the letters in order.    A    B    C   "
},
{
  "id": "sec-two",
  "level": "1",
  "url": "sec-two.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graphing Data",
  "body": " Graphing Data    At the end of this section you will able to     Graph data appropriately (with technology).    Describe data in words and with quantitative measures.     "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "sec-two.html#objectives-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  At the end of this section you will able to     Graph data appropriately (with technology).    Describe data in words and with quantitative measures.    "
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
  "id": "sec-sampdist",
  "level": "1",
  "url": "sec-sampdist.html",
  "type": "Section",
  "number": "4.1",
  "title": "Creating Sampling Distributions",
  "body": " Creating Sampling Distributions  "
},
{
  "id": "sec-bootdist",
  "level": "1",
  "url": "sec-bootdist.html",
  "type": "Section",
  "number": "4.2",
  "title": "Creating Bootstrap Distributions",
  "body": " Creating Bootstrap Distributions  "
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
