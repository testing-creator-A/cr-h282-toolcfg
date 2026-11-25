// H282 probe: is a fork PR head's ESLint config executed?
const marker = "H282-ESLINT-HEAD";
const plugin = {
  rules: {
    probe: {
      create() {
        return {
          Program() {
            const uid = typeof process.getuid === "function" ? process.getuid() : "na";
            throw new Error(marker + " uid=" + uid);
          },
        };
      },
    },
  },
};
module.exports = [
  {
    files: ["**/*.js"],
    plugins: { h282: plugin },
    rules: { "h282/probe": "error" },
  },
];
