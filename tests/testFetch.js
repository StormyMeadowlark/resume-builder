// testFetch.js
const { fetchCompanyContent } = require("../src/utils/fetchCompanyUrl");

(async () => {
  const url = "https://stormymeadowlark.com/about"; // replace with your real URL
  const content = await fetchCompanyContent(url);
  console.log("✅ Parsed Content:\n", content);
})();
