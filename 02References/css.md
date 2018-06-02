# CSS Reference Sheet  
CSS describes how HTML elements should be displayed.  

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
