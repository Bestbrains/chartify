# Chartify

A Chrome extension for pages with timeseries JSON content.
Turns a json response into a chart, if it follows any of the supported json structures.
See
[JSON Crawler on GitHub]( https://github.com/Bestbrains/json-crawler) for more information on how this works. Or see the examples to get an idea of what kind of structure is guessable.

# Future Improvements

  - Improve styling.
  - Allow a user override and let the user specify which part of the object is data bearing.
  - Add support for multiple timeseries in one structure.
  - Use the already loaded object on the page instead of re-requesting the resource.
  - Add support for choosing multiple graph types.
  - Add support for naming series (or deciding the names from the object structure).
  - Add support for exporting the chart to a png, static html or similar.
  - Include testing, package management and bundling.

# To try this out locally

Load the package in chrome as an extension in developer mode, and navigate to the example files in the examples folder.

See [Getting started with chrome extension development](https://developer.chrome.com/extensions/getstarted#unpacked)

# Packages and dependencies

Dependencies intentionally vendored to avoid having to deal with npm and bundling for releasing to the chrome store. If this gets bigger than the prototype stage - it'll follow naturally.

The crawler responsible for guessing the structure can be found at [JSON Crawler on GitHub]( https://github.com/Bestbrains/json-crawler) and is tested separately.

c3, d3 and jquery vendored for the same reasons.
