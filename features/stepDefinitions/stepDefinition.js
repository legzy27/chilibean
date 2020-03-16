let {Given,When,Then,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);
var expect = require('expect');


  
Given('I navigate chillibean login page {string}', async function (string) {
  browser.manage().timeouts().implicitlyWait(50 * 8000);
  browser.ignoreSynchronization=true;
  browser.get('https://chillipharm.com/sign_in');
  await browser.sleep(5000);
  return console.log("@When -- I navigate to the tv landing page");
});
//Scenario 1 // click on login button
When('I click on the sign in button error message appear', async function () {
  await browser.sleep(5000);
  element(by.name('commit')).click();
  await browser.sleep(5000);
  return console.log("@When -- I click on the sign in button  message appear");
  });


  // Scenario 2 enter incorrect email and password
  Then('I enter incorrect {string}and {string} error message appears', async function (email, password) {
    await browser.refresh();
    await browser.sleep(5000);
    element(by.id('user_email')).sendKeys('cloudportal33@yahoo.com');
    await browser.sleep(2000);
    element(by.id('user_password')).sendKeys('cloudportal33@');
    await browser.sleep(2000);
    element(by.name('commit')).click();
    await browser.sleep(5000);
    return console.log("@When -- I enter incorrect "+email+" and "+password+" error message appear");
  });

 

  //scenario 3


       Given('I enter incorrect {string} and {string}', async function (email, password) {
        await browser.sleep(5000);
        element(by.id('user_email')).clear().sendKeys('cloudp@yahoo.com');
        await browser.sleep(5000);
        element(by.id('user_password')).clear().sendKeys(' paswordsx ');
        await browser.sleep(5000);
        return console.log("@Then -- I enter incorrect  "+email+" and "+password+"")
       });

       When('I click sign in button error message warning appears', async function () {
        await browser.sleep(5000);
        element(by.name('commit')).click();
        await browser.sleep(5000);
        return console.log("@Then -- I click sign in button error message warning appears")
      });


      Given('I enter incorrect {string} and {string} again', async function (email, password) {
         browser.refresh();
         element(by.id('user_email')).clear().sendKeys('cloudpp@yahoo.com ');
         await browser.sleep(5000);
         element(by.id('user_password')).clear().sendKeys('paswordsxx ');
         await browser.sleep(5000);
         browser.refresh();
         return console.log("@Then -- I enter incorrect  "+email+" and "+password+"")
      });

