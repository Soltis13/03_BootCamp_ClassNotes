# Basic References for HTML 

## Resources 
  MDM (Mozilla Developer Resources) - https://developer.mozilla.org/en-US/docs/Web/HTML
  
  Bootstrap - http://getbootstrap.com/docs/4.0/getting-started/introduction/
  
  w3school - https://www.w3schools.com/

## Sections

### Structure

  < p attribute Name = "attribute value" > Text in Paragraph </ p >

### Text

  < h1 > through < h6 >  : heading sizes
  < p > : paragraphs
  < b > : bold
  < i > : italic
  < sup > : subscript such as putting a number in the raised to the power position E=MC<sub>2</sub>
  < sub > : subscript to lower a value. H<sub>2</sub>O
  < br / >: line break in browser
  < hr / >: creates a horizontal dividing line. PLaced between sections
  < strong > : adds text in bold
  < em > : emphisis, looks like italic
  < blockquote > : used for quotes, indents the text and allows link to cite.
  < q > : quotes, for smaller, puts text in quotes.
  < abbr > : 
  < cite > : renders as cite in italics
  < dfn > : 
  < address > : formates the text as a home address
  < ins > : underlines teh text to show it was inserted
  < del > : strikes through the text to show it was deleted.
  < s > : strike through 
  
### Lists

  ordered lists
    < ol > : ordered lists
    < li > : lists item

  unordered lists
    < ul > : unordered lists
    < li >  : lists item

  definition lists
    < dl > : Definition lists
    < dt > : term to be defined
    < dd > : definition

### Links

  < a href = " Page link showed go to http:// " > Link Text < / a >
  Link to other site < a href = "http:" >
  Link to same site other page < a href = "inbox.html" >
  Relative URLS
    same Folder : reviews.html
    Child Folder : music/listings.html
    GrandChild : movies/dvd/reviews.html
    parent Folder : ../index.html
    grandparent : ../../index.html

  Email links
    < a href = "mailto:jon@example.org">Email Jon< / a >
    < a href = " http:// www. imbd .com " target="_blank" >  : opens in new window

### Images

  Stock Photos
    www.istockphoto.com
    www.gettyimages.com
    www.veer.com
    www.sxc.hu
    www.fotolia.com

  < img > 
    src (where can the img be found)
    alt (alternate text if image can't be found)
    title (additional information)
    
  < figure > : used to add captions to an img
    < figure >
      < img >
      < br / >
      < figurecaption > < /figurecaption >
    < / figure >


### Tables

  < table > : element used to create a table
  < tr > : table row
  < td > : table data
  < th > : table heading
  colspan : spans columes : example < td colspan="x" >
  rowspan : spans rows : example < td rowspan="x" >
  for larger tabeles
    < thead >
    < tbody >
    < tfoot >

### Forms

  Form Controls
    Adding Text
    Making Choices
    Submitting Forms

  < form  action="" method="" > < p > < / p > < / form>
    action : this is the element which is the url where the information goes when the form is submitted
    method: get or post
  
  < input > : used to contorl the type of information that  can go thorugh the form.
    type : such as "text" or "password"
    name : 
    size
    maxlength

  < textarea > : defines a multi line text box
  type="radio"
  type="checkbox

  < select > : creates a drop down box option
  < option > : the options in the drop down box
  multiple = "multiple" : adds multiple choise option to drop down.

  Type="file" : creates a box to allow a file upload
  type="submit" : adds the submit button 
  type="image" : changes the input box to an image

  < button > ; elememnt to allow text and image to show up inside the button
  < label > : places a label with the input method
    for : links to the input ID

  < fieldset > : groups the form contorls together
  < legend > : label text for fieldset

### Extra Markup

### Flash, Video, Audio





#Old

## HTML Page Components
  DocType - Declares the version of the HTMl document.  
  Elements & Tags - contains text, image, video <! <tagname>Content</tagname>>  
  Attributes - sets either style or layout for elements  
  Comments - excludes a part of hte code <! This is a comment>  
  Frame - contains other HTML pages, this displayes multiple pages on one. iframes  
  meta - metadata for use by browsers  
  script - javascript added to html  
  
  < ! - -   Write comments - - >  
  
## Page Elements  https://www.w3schools.com/tags/default.asp  
  HTML - defines the whole document  
  Title - Sets the page title in the browser.  
  Header - defines header of document  
  Body - defines the document body  
  Footer - botom section of a page  
  Section - defines sections in a document, such as chapters, headers, Footers - or any other sections of the document.  
  Aside -   
  Span - tag is used to group inline-elements in a document.  
  Div - element is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.  
  p - paragraph  
  ol - order list  
  ul - unorder list  
  li - list  
  form  
  table  
    tr - table row  
    th - table header  
    td - data cell in table.  
  
## Attributes  
additional information added to a specific element. Added to the start of a tag.  
a - attribute  
img - attribute for images  
  src - image source tag    
  alt - alternate to use when img is unavailable.  
Style - add to element such as color, font, size  
  Inline - <a style  
  Internal - <style> </style> (in head)  
  CSS - link rel='stylesheet' href =   
href - a href='url'>text<a  
  
  
br - line break  
pre - preformatted text.   
b - bold  
strong - bold important text  
i - italic text  
em - emphasized text  
mark - marked text - highlighted  
small - small text  
del - deleted text  
ins - inserted text  
sub - subscript text  
sup - superscript text  
q - quotation  
blockquote - defines section quoted from other source  
abbr - abbreviation  
cite  

## colors  
RGB (red, gree, blue) 0- 255 (grey is when all three are equal)  
HEX (#rr gg bb ) - hexadecimal 00 through ff  
HSL (hue, saturation, lightness) (0-360, 0-100%, 0-100%)  
RGBA (red, gree, blue, alpha) 0.0-1.0 transparent  
HSLA (hue, saturation, lighness, alpha) 0-1.0 transparent  

