var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/TK3096/rating-app.git", // Update to point to your repository
    user: {
      name: "name", // update to use your name
      email: "email", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
