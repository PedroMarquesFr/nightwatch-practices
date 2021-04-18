module.exports = {
  "@tags": ["google"],
  "Google advenceds search: Elon Musk"(browser) {
    const mainQuery = "Elon Musk";

    const page = browser.page.googleAdvancedSearch();

    const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const topNav = "#top_nav";

    page
      .navigate()
      .setQuery(mainQuery)
      .selectFilter("@languageDropdownOpener", "@languageDropdownValue")
      .selectFilter("@lasUpadtedDropdownOpener", "@lasUpadtedDropdownValue")
      .submit();

    browser
      .assert.urlContains("as_q=Elon+Musk", "Params: Query is Elon Musk")
      .assert.urlContains("lr=lang_pt", "Params: Language is Portuguese")
      .assert.urlContains("as_qdr=m", "Params: Time period is last month");

    browser.assert.visible(
      resultPageQuerySelector,
      `UI: ${mainQuery} is set in the query`
    );

    browser.assert.containsText(
      topNav,
      "Pesquisar páginas em Português",
      "UI: Language set to portuguese"
    );

    browser.assert.containsText(
      topNav,
      "No último mês",
      "UI: Last update set o past month"
    );
    browser.saveScreenshot("tests_output/google.png");
  },
};
