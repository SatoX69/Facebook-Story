# Facebook-Story
A really simple extension for extracting Facebook Story CDN links

## How It Works
1. **Check for Element:** The script checks for a specific `<div>` element on a the `facebook.com/stories` url for extracting the CDN.
2. **Find Video URL:** It scans the entire HTML content of the page to find all `data-video-url` values and get the last one (Which seems to be in higher quality (to me))
3. **Retry:** If the element is not found, it waits for 2 seconds and checks again.

## Usage
1. Add this script to your browser's console or include it in a web page.
2. Open the console to see the logs.
3. Watch for messages about the element and the last video URL.

## Note/Concerns
The script doesn't always seem to be actively running whenever the story is opened. It only seems to run whenever the story page (`facebook.com/stories`) is directly opened or refreshed.