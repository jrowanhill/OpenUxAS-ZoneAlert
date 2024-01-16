# Argument Viewer Help: The Focus Menu #

The Focus menu on the Argument Viewer contains the following options:

* [On Whole Argument](#whole-argument)
* [On Children](#generation)
* [On Grandchildren](#generation)
* [On Great-grandchildren](#generation)
* [On 4th Generation](#generation)
* [On 5th Generation](#generation)
* [On 6th Generation](#generation)
* [On 7th Generation](#generation)
* [On 8th Generation](#generation)
* [On 9th Generation](#generation)
* [On Subtree](#subtree)

With the exception of “On Whole Argument”, the options on the Focus menu 
only become available when an [element is selected](help.html#selection). 

Focus is an extremely powerful tool for enabling presentation and 
understanding of your arguments. It is particularly useful when showing
arguments on a screen with limited resolution (such as a projector) as it
enables only a few elements to be shown at a time.

With the exception of “On Whole Argument”, focus is always applied relative
to the selected element. You can select elements while focused and 
“re-focus” based on the element selected — even if the children of the 
selected element are not visible in the current focus.

## Whole Argument [whole-argument] ##

The “On Whole Argument” option releases focus (if any), displaying the 
entire argument.

## On a Generation [generation] ##  

The “On Children”, “On Grandchildren”, “On Great-grandchildren”, and “On
*n*th Generation” options display the selected element and elements
from the subtree rooted at the element element up to the generation
specified. So “On Children” displays the selected element and its immediate
children. “On Grandchildren” displays the selected element, its immediate
children, and the immediate children of each of those.

Note that Contexts, Assumptions and Justifications are always displayed with
their “parents” during generational focus.

## On Subtree [subtree] ##  

The “On Subtree” option will display the complete subtree rooted at the
selected element. In essence, the selected element becomes the new top-level
element for the argument displayed.
