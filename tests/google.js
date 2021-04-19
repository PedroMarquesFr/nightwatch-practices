module.exports = {
  "@tags": ["google"],
  "@disabled": true,
  "Google advenceds search: Elon Musk"(browser) {
    const mainQuery = "Elon Musk";

    const mainQueryInputSelector = 'input[name="as_q"]';
    const languageDropdownOpenerSelector = "#lr_button";
    const languageDropdownValueSelector = 'li[value="lang_pt"]';
    const lasUpadtedDropdownOpenerSelector = "#as_qdr_button";
    const lasUpadtedDropdownValueSelector = '.goog-menuitem[value="m"]';
    const submitButtonSelector = '.jfk-button[type="submit"]';

    const resultPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const topNav = '#top_nav';

    browser
      .url("https://www.google.com/advanced_search?hl=pt")
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValueSelector)
      .click(lasUpadtedDropdownOpenerSelector)
      .click(lasUpadtedDropdownValueSelector)
      .click(submitButtonSelector)
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
