# How to contribute
Head over to the list of [issues](https://github.com/socialappslab/appcivist-pb-client/issues) and check which ones you can contribute to. 
You can find us in Slack to discuss details and ideas ([#AppCivist](https://join.slack.com/t/appcivist/shared_invite/enQtMzU1MzM5NzkxOTkxLWRhOTU2MjRiM2Q0MDk3YTZmMzM2Yzc5YzBkMjIzNTZhYjJmNTEwMDhiODhkNTE3ZjQ2NDJiM2Q5YTcyYzYyMTc)). 


## Submitting changes

Please send a [GitHub Pull Request to appcivist-pb-client](https://github.com/socialappslab/appcivist-pb-client/) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include RSpec examples. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

## Coding conventions

Read our code to get an idea of it.
  * We indent using four spaces 
  * We use HTML for all views
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * So that we can consistently serve images from the CDN,   always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
  * Also for the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

This contributing guidelines text is based upon the Contributing Guidelines of the [Opengovernment Organization](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).
