import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo(path:string) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.className('navbar-brand')).getText();
  }

  getSearchkeyword1(){
  return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("dil");
  
  }

    clearSearchkeyword1()
  {
  		return element(by.xpath('//*[@id="mat-input-0"]')).clear();
  }

  getSearchKeyword2(){
  return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("pay");

  }
  getSearchkeyword3()
  {
  	return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("ab");
  }


  getMovieinfo_enterKeyword()
  {
  		return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("dil cha");
  }

  selectMoviefromList()
  {
  	return element(by.xpath('//div[@id="mat-autocomplete-0"]')).click();
  }

  clickonMovieviewDetails(): promise.Promise<void> 
  {
  	return element(by.xpath('//div[@class="caption"]//following::a//following::a')).click();

  }
  getMovie1Title()
  {
  		return element(by.xpath('//p[contains(@class,"title")]')).getText();
  }

  getMovie1Releasedat()
  {
  		return element(by.xpath('//p[@class="prop"]')).getText();
  }
  
  clickOnclose()
  {
    return element(by.xpath('//span[@class="mat-button-wrapper"]')).click();
  }

  getMatElement(){
    return element(by.xpath('//div[@id="mat-autocomplete-0"]'));
  }
//-------------------------------------

getMovieinfo2_enterKeyword()
  {
  		return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("pay");
  }

  getMovieinfo3_enterKeyword()
  {
  		return element(by.xpath('//input[contains(@class,"mat-input-element")]')).sendKeys("ab");
  }

  //testcase1
  click_ViewDetails(){
      return element(by.xpath("/html/body/app-root/div/div/div[2]/app-upcoming/div[2]/div/div[1]/movie-card/div/div/p[2]/a")).click();
  }
  click_upcoming(){
      return element(by.xpath('//*[@id="navbar"]/ul/li[1]/a')).click();
  }
  get_popupElement(){
      return element(by.xpath('//*[@id="mat-dialog-0"]'));
  }
}
 
