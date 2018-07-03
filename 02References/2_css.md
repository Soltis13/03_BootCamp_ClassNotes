# CSS Reference Sheet  
CSS describes how HTML elements should be displayed.  

### Basics  

box model - margin border padding text

selector { dec: declaration;}

    Use calmas to select multiple selectors at the same time.

    Use a space to select down to a spedcific selector with parent child divs

### Color  
    http://colorschemedesigner.com/csd-3.5/  
    https://www.w3schools.com/colors/colors_picker.asp  
    RGB Values  ( rgb(100.100.90))   
    HEX Codes ( #ee3e80)  
    Color Names (light Green)  
    hsla (hsla(100%,100%,100%,0.5))  

    COmputer colors are a mix of red, green, and blue.  

    Contrast  

    Opacity fourth term on the rgb scale (rgb(0,0,0,0.5))  

    https://www.websitebuilderexpert.com/how-to-choose-color-for-your-website/
    There are 3 main colors you need to consider when you are designing your   website:  

        Choosing a dominant color as your brand color  
            What is the colors personality?
        Choosing 1 to 2 accent colors to create a color scheme for your website
            https://color.adobe.com/create/color-wheel/  
        Choosing a background color to complete your design  

### Text  
    Weight
    Style
    Stretch
    Height

    Font Techniques
        Font-Family - 
        Font_face
        Service-Based Font-Face
    
    Type Scale   - Generaly set the body text size to 16 px and then base the rest on proportial to the body.
        pixels 24 px
        percent - 200%
        ems - 1.5 ems
        html - h1
    
    font-weight : used to create bold text
    font Style: italic text
    Text-transformation: change case to upper, lower, capitalize
    text-decoration: none / underline / overline / line-through / blink
    line-hieght: 
    letter-spacing:
    word-spacing:
    text-align : left / right/ justify
    vertical-align: 
    :link
    :visited
    :active
    :hover
    :focus

    Attribute Selectors
        Existence p[class]
        equality p[class="dog"]
        Space p[class~="dog"]





### Boxes  

    Height / min-height / max-height  
    Width / min-width / max-width  
    Background Color  
    overflow : hidden / scroll  

    border / margin / padding  
    display: inline/block/inline-block/none  
        display : none - prevents the element from being shown on the page.  
    visibility: hidden / visable  
    box-shadow: horiontal   
    border radius  
    elliptical shapes  



### Lists, Table & Forms  
    list-style-image: url
    list-style-position: inside / outside
    
    table Properties
        width
        padding
        text-transform
        letter-spacing
        border-top / border-bottom
        text-align
        background-color
        :hover
    


### Layout  

### Images  

###HTML5 Layout Changes  




# Old

## Properties
Align-content   	Specifies the alignment between the lines inside a flexible container when the items do not use all available space  
background-color	Specifies the background color of an element  
background-image	Specifies one or more background images for an element  
border          	A shorthand property for border-width, border-style and border-color  
color	            Sets the color of text  
font	            Sets all the font properties in one declaration  
font-family	      Specifies the font family for text  
margin	          Sets all the margin properties in one declaration  
padding         	Sets all the padding properties in one declaration  

## Selectors  
.class  
#id  
element	p	  Selects all <p> elements  
element,element	div, p	Selects all <div> elements and all <p> elements  
element element	div p	Selects all <p> elements inside <div> elements  
element>element	div > p	Selects all <p> elements where the parent is a <div> element  
element+element	div + p	Selects all <p> elements that are placed immediately after <div> elements  
element1~element2	p ~ ul	Selects every <ul> element that are preceded by a <p> element  

## Functions  

## Animatable  
Some CSS properties are animatable, meaning that they can be used in animations and transitions.  
Animatable properties can change gradually from one value to another, like size, numbers, percentage and color.  

## Units
Absolute Lengths - The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.  
px *	pixels (1px = 1/96th of 1in)  
in	inches (1in = 96px = 2.54cm)  

Relative Lengths - Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.  
%	Relative to the parent element  
em	Relative to the font-size of the element (2em means 2 times the size of the current font)  
  
## Color  All modern browsers support the following 140 color names  
With CSS, colors can be specified in different ways  
By color names  
As RGB values  
As hexadecimal values  
As HSL values (CSS3)  
As HWB values (CSS4)  
