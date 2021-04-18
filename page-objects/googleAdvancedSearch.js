//3 things in this an string, object end array of objects
module.exports = {
  url: "https://www.google.com/advanced_search",
  elements: {
    mainQueryInput: 'input[name="as_q"]',
    languageDropdownOpener: "#lr_button",
    languageDropdownValue: 'li[value="lang_pt"]',
    lasUpadtedDropdownOpener: "#as_qdr_button",
    lasUpadtedDropdownValue: '.goog-menuitem[value="m"]',
    submitButton: '.jfk-button[type="submit"]',
  },
  commands: [
    {
      setQuery(value) {
        return this.setValue("@mainQueryInput", value);
      },
      selectFilter(selector, value) {
        return this.click(selector).click(value);
      },
      submit() {
        return this.click("@submitButton");
      },
    },
  ],
};
