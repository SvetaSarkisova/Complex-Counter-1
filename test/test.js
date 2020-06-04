
import {assert} from 'chai';

describe('Test Complex Counter', () => {

    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });

    it('should the header is present', ()=> {
        $('[class="header"]').isDisplayed()

    })
    it('should the header says counters', ()=> {
    const headerText = $('.header').getText();
    assert.equal('Counters',headerText);
});
    it('should should total result present', function () {
        $('h3').isDisplayed();
    });

    it('should total result says Total: ', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );

    });

    it('should Enter Counter Title is present', function () {
        $('[name="name"]').isDisplayed()

    });

    it('should display add counter title text Enter Counter Title', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).toEqual('Enter Counter Title:')
        
    });

    it('should display text Counter Name in Add Name Field ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')
        
    });

    it('should display and click Enter Initial Count', function () {
        $('[data-testid="counter-value-input"]').isDisplayed();
        $('[data-testid="counter-value-input"]').isClickable();
        $('[name="value"]').isDisplayed()
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
        
    });

    it('should display text Enter Initial Count', function () {

        const labelArr = $$('label');

        const labelArr2 = labelArr[2].getText();

        assert.equal(labelArr2 , 'Enter Initial Count:')
        
    });


});



