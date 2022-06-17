const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver.exe');


(async function openChromeTest() {
  try {
    let driver = await new Builder()
      .setChromeOptions(service)
      .forBrowser('chrome')
      .setChromeOptions()
      .build();

    const actions = driver.actions({async: true});

    await driver.get('http://127.0.0.1:5500/freebie.html');

    //Colocar a página em tela cheia
    await driver.manage().window().maximize()

    await driver.sleep(500);

    //Clicar na dropdown
    await driver.findElement(By.css('[class="dropdown"]')).click()

    await driver.sleep(1000);

    //Passar o rato por cima de Facebook
    let facebook = driver.findElement(By.css('[class="dropdown-item1"]'))
    //Não precisamos definir "await", porque const actions = driver.actions({async: true});
    actions.move({origin: facebook}).perform();

    await driver.sleep(1000);

    //Fechar a dropdown
    await driver.findElement(By.css('[class="dropdown"]')).click()

    await driver.sleep(1000);

    // scroll para baixo
    let cardMember = driver.findElement(By.css('[class="card card-member"]'))
    await driver.executeScript("arguments[0].scrollIntoView(true);", cardMember);

    await driver.sleep(1000);
    
    //Passar o rato por cima da card da Tina
    await cardMember.click()

    await driver.sleep(1000);
    
    // scroll para cima
    await driver.findElement(By.css('[class="title-area"]')).click()

    await driver.sleep(1000);

    // clicar no botão de free download
    await driver.findElement(By.css('[class="btn btn-danger btn-fill"]')).click()

    await driver.sleep(1000);

    // abrir a modal de login
    await driver.findElement(By.css('[class="login"]')).click();

    await driver.sleep(1000);

    // inserir o email
    await driver.findElement(By.css('[name="email"]')).sendKeys("Projeto-TPW@email.com")

    await driver.sleep(1000);

    //inserir a password
    await driver.findElement(By.css('[name="password"]')).sendKeys("password")

    await driver.sleep(1000);

    //fazer login
    await driver.findElement(By.css('[name="commit"]')).click()

    await driver.sleep(1000);

    //fechar modal
    await driver.findElement(By.css('[name="password"]')).sendKeys(Key.ESCAPE)

  } catch (error) {
    console.log(error)
  }
})();