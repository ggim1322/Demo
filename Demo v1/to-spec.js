describe('To Test Gmail Login window', function() {
 
 it('should be able to login', function() {
    browser.driver  
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.css('#input')).sendKeys("Attila");
    var nxt = browser.driver.findElement(by.css("#sendTough"))
    nxt.click();
    
    //Printing Text
    var todoList = element(by.id('story'));
    expect(todoList.getAttribute('value')).toEqual('Hi Attila!');

    console.log(todoList.getAttribute('value'));
    console.log('Attila');

  });
});