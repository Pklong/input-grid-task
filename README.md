## [Live](https://summing-grid.netlify.com/)

### With React

1. Fork or download a local copy of this repo.
2. Run `yarn` in the repo root.
3. `cd` into `summing-grid` and run `yarn` to install dependencies.
4. Run scripts from `summing-grid/package.json` to test or run the application.

## Submission

### For github forks

Commit and push your code to your forked repo. Open a pull request against this repo and let us know.

----

## Your task

Your task will be to create a 1x4 flexible grid. The first 3 spaces in the grid should contain input fields that accept numbers. The 4th space in the grid will display the sum of the numbers in the first 3 spaces.

### The grid

The grid should have 1 row and 4 columns. By default, the width of each column should be 25% of the window width. The border of the grid must be 1px black.

Perform the following operations based on the value of window size:

If the window size is less than 720px, then the 1x4 flexible grid becomes a 2x2 grid, that is, the 3rd and 4th columns slide down onto the 2nd row.
If the window size is less than 360px, then the 1x4 flexible grid becomes 4x1 grid, that is, each column slides under the one before it. The 2nd column slides under the 1st, the 3rd slides under the 2nd, and the 4th slides under the 3rd.

### The input fields

The first 3 input fields should each accept a number. Then write code which sums the 3 numbers together and displays the sum in the 4th field. Then write code which formats the sum to the nearest 3 digit number (e.g. 1234567 as 1.23M or 123456 as 123K).

### Extra Credit

Add validation to the input fields to ensure that the entered values are numbers. Also ensure that entering non-number values does not break the other functionality or cause any errors.
Add some unit tests (you may want to install additional node modules).

**As you build this app, consider...**
- How data should flow between components
- Which components could be built to be reusable
- How to style the grid so that it's easy to add or remove input cells
- How number formatting should handle edge cases
