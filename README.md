# ItemFilterJS

JSItemFilter is a JavaScript-based web application that provides dynamic filtering and management functionality for item lists. It allows users to add items to a list, search for specific items, and delete items.

## Disclaimer

The HTML structure, CSS styling (including Bootstrap), and basic item list template were adapted from a video tutorial by [Traversy Media](https://www.youtube.com/c/TraversyMedia). The tutorial video, [Building a Filterable List with Vanilla JavaScript](https://www.youtube.com/watch?v=i37KVt_IcXw), demonstrates the creation of a similar project from scratch, based on previous lessons covering DOM manipulation and event handling.

## Features

- Add new items to the list dynamically
- Search and filter items based on user input
- Case-insensitive search to match items regardless of letter case
- Highlights matching text in search results for easy identification
- Delete items from the list

## Usage

1. Open the web application in a browser.
2. Enter a new item in the input field and click "Submit" to add it to the list.
3. Use the search input to filter and search for specific items within the list.
4. Click the "X" button next to an item to delete it from the list.

## Technologies

- JavaScript
- HTML
- CSS (adapted from the video tutorial)
- Bootstrap 4

## Tutorial References

The JavaScript implementation in this project was inspired by the following sections of the [Traversy Media](https://www.youtube.com/c/TraversyMedia) tutorial series:

- [DOM Introduction](https://youtu.be/0ik6X4DJKCc) (specifically: HTML Structure, Examine the Document Object, Selectors)
- [Traversing the DOM Introduction](https://youtu.be/mPd2aJXCZ2g) (specifically: Parents, Children, Siblings, Create Elements, Insert Created Elements Into the DOM)
- [Event Listener Introduction](https://youtu.be/wK2cBMcDTss) (specifically: Event Listener Basics, Mouse Events, Keyboard & Input Events)

## Note

The JavaScript code provided in this repository was written prior to watching the tutorial video. It is important to note that the code may not be optimized or follow best practices. In particular, the `selectText` function has a vulnerability when using `innerHTML`, as it allows potential injection of malicious HTML code by the user.
