import ghpages from "gh-pages";

ghpages.publish(
  "public", // path to public directory
  {
    branch: "master",
    repo: "https://github.com/TK3096/rating-app.git", // Update to point to your repository
    user: {
      name: "Tong Thanaphon", // update to use your name
      email: "tongthanaphon.tk@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
