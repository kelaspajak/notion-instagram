const fetch = require("node-fetch");

module.exports = (pageId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await (
        await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
          method: "PATCH",
          body: JSON.stringify({
            properties: {
              Published: { checkbox: true },
            },
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NT_SECRET}`,
          },
        })
      ).json();
      resolve("Post Updated");
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
