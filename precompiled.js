/*
This is a template to standardize the information
we give to our fellow developers in our PRs. Feel
free to edit as you see fit!
 // CREATE:
1. Make your edits to the precompiled code below
2. Drop the code in a URL encoder (like https://mrcoles.com/bookmarklet/ for example)
NOTE: If you make a change to the content of the bookmarklet, please replace the compiled version below with your new version.
3. Create a new empty bookmark in your favorite browser
4. Edit the bookmark and drop the compiled code below into the body
 // USE:
1. Open a new PR
2. Once you get to the details step, place your cursor in the comment box and click the bookmarklet link
3. Description will be filled in with the template info from below
*/
   // PRE-COMPILED
javascript:(function() {
    var template = [
      '## Purpose', '...',
      '## User Story / Defect Link',
      '[](url)',
      `## Dev Checklist 
      - [ ] Tested against both renter and owner (if applicable)
      - [ ] Analytics added
      - [ ] All strings extrapolated into localized strings file
      - [ ] Comments removed
      - [ ] Test data prepped for reviewers (if applicable)
      - [ ] Code has been cleaned up
      - [ ] Backmerged the \`develop\` branch into this one`,
      '## Testing',
      '#### Screenshots',
      '...'
   ];
    var descField = document.getElementById('pull_request_body');
    var text = descField.value + template.join('\r\n\r\n');
    descField.value = text;
    descField.nextSibling.childNodes[0].innerText = text
})()
