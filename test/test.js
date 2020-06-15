
import {assert} from 'chai';
const except = require('chai').expect;

describe('Test Complex Counter. General', () => {

    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });

    it(' Verify  that the header is present', ()=> {
        const header = $('[class="header"]').isDisplayed()
        expect(header).toEqual(true)

    })
    it('verify that the header says counters', ()=> {
        const headerText = $('.header').getText();
        assert.equal('Counters',headerText);
    });
    it('verify that total result is present', function () {
        const totalRes =  $('h3').isDisplayed();
        expect(totalRes).toEqual(true)
    });

    it('verify total result says Total: ', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );

    });

    it('verify that Enter Counter Title is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).toEqual(true)

    });

    it('verify that the Enter Counter Title text is Enter Counter Title:', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).toEqual('Enter Counter Title:')

    });

    it('verify that the Add Name Field button text is "Counter Name" ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')

    });

    it('verify that the New Counter Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).toEqual(true)

    });

    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).toEqual(true)

    });

    it('verify that Enter Initial Count text = 50 by default', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')

    });

    it('should display text Enter Initial Count', function () {

        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');

    });

    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).toEqual(true)

    });

    it('verify that Add Count Button Text ia "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).toEqual('ADD COUNTER')

    });

});

describe('default counter', () => {

    it('verify that Counter Name is present ', function () {
        const defaultCounter = $$('h3')[1].isDisplayed()
        expect(defaultCounter).toEqual(true)

    });

    it('verify that Counter Name is present ', function () {
        const defaultCounter = $$('h3')[1].getText()
        expect(defaultCounter).toEqual('1. Default Counter')
});
    it('verify that LF1 is present ', function () {
        const lF1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].isDisplayed()
        expect(lF1).toEqual(true)
    });

    it('verify that LF1 text = "Change Step Options?" ', function () {
        const lF1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].getText()
        expect(lF1).toEqual('CHANGE STEP OPTIONS?')
    });

    it('verify that LF1 text = "Change Step Options?" ', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const LF1 = $('[name="lower"]').getValue()
        expect(LF1).toEqual('1')
    });

    it('verify that red circle button \'x\' button shows by clicking ' +
         'on CHANGE STEP OPTIONS in lF1', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const redButton = $('[name="negative"]').isDisplayed()
        expect(redButton).toEqual(true)
    });

    it('verify that LF2 is present ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const lF2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].isDisplayed();
        expect(lF2).toEqual(true);
    });

    it('verify that LF2 text =  "CHANGE STEP OPTIONS? " ', function () {
        const lF2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].getText()
        expect(lF2).toEqual('CHANGE STEP OPTIONS?')

    });

    it('verify tat LF2 value = 3 by default by clicking', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click()
        const lF2 = $('[name="upper"]').getValue()
        expect(lF2).toEqual('3')
    });

    it('Verify that rounded red  \'X\' button shows up  by clicking on \'CHANGE STEP OPTIONS? \' in LF2', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click()
        const redButton = $('[name="positive"]').isDisplayed()
        expect(redButton).toEqual(true)

    });

    it('Verify that the Sub solid black square Buttons on are present (negative and positive increments) ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-black.btn.Ripple-parent')[0].isDisplayed();
        $$('.btn-black.btn.Ripple-parent')[1].isDisplayed();
        $$('.btn-black.btn.Ripple-parent')[2].isDisplayed();
        $$('.btn-black.btn.Ripple-parent')[3].isDisplayed();
        $$('.btn-black.btn.Ripple-parent')[4].isDisplayed();
        $$('.btn-black.btn.Ripple-parent')[5].isDisplayed();

    });

    it('Verify that the Count Value field is present ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('[class="badge primary badge-primary"]').isDisplayed()

    });

    it('Verify that the Count Value = \'0\'. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const value = $('[class="badge primary badge-primary"]').getText()
        expect(value).toEqual('0')

    });

    it('Verify that the  red "DELETE" Button under (LF1) is present. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-danger.btn.Ripple-parent.delete').isDisplayed()

    });

    it('Verify that the blue "RESET" Button under (LF2) is present. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-primary.btn.Ripple-parent.reset').isDisplayed()

    });

    it('Verify that the Edit Name Field is present.  ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('[class="form-control"]').isDisplayed()

    });

    it('Verify that the Edit Name Field  text on the left side button is - \'Edit Counter Title:\'. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const textButton = $$('label')[0].getText()
        expect(textButton).toEqual('Edit Counter Title:')

    });

    it('Verify that user can click on DELETE button and delete Default Counter. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-danger.btn.Ripple-parent.delete').isClickable()

    });

    it('Verify that if default counter is deleted, the user  will see  Total: 0, Header \'Counters\',' +
        ' \'\'ADD COUNTER button\'\' and two fields : \'\'Add Name Field\'\' and "Default Value Field" ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-danger.btn.Ripple-parent.delete').click()
        const total = $('[class="total-count"]').getText()
        const counters = $('[class="header"]').getText()
        expect($('[class="btn-success btn Ripple-parent add col-6"]').isDisplayed()).true
        expect($$('label')[0].isDisplayed()).true
        expect($$('label')[1].isDisplayed()).true
        expect(total).toEqual('Total: 0');
        expect(counters).toEqual('Counters')
        
    });

    it('verify quantity ob black buttons ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const blackButtons = $$('.btn-black.btn.Ripple-parent').length;
        assert.equal(blackButtons, 6)

    });

    it('Verify that user can delete text (counter name) "Default counter" from Edit counter title  ', function () {
        browser.refresh()
        const nameEdit = $('[name="edit"]')
        nameEdit.clearValue()
        nameEdit.setValue(' ')
        const defCounter = $$('h3')[1].getText()
        expect(defCounter).toEqual('1.')
        
    });

    it('Verify that user can ADD second counter by default.\\n\'\n'+
        'Preconditions:\n' +
        '1. 1. Default Counter -> Count Value 0 TOTAL: 0\n'+
        '2. Enter Counter Title ->  \'Counter Name\', Initial Count -> 50 (by default)\n' +
        '3. Click ADD COUNTER\n' +
        'Expected Result:  2 counters ot the page TOTAL: 50;\n' +
                           'New counter appears with name \'2. Counter Name\'\n' +
                           'Count Value 50\n' +
                           '  Other fields on the default state"\n', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-black.btn.Ripple-parent')[1].click();
        browser.pause(1000)
        $$('.btn-black.btn.Ripple-parent')[5].click();
        const countValue = $('[class="badge primary badge-primary"]').getText();
        const total = $('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(countValue).toEqual(total)

});

    it('should ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-success.btn.Ripple-parent.add.col-6').click()
        $$('.btn-black.btn.Ripple-parent')[2].click()
        const total1 = $$('[class="badge primary badge-primary"]')[0].getText();
        const total2 = $$('[class="badge primary badge-primary"]')[1].getText();
        const sumOfCounters = +total1 + +total2
        const total = $('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(+total).toEqual(sumOfCounters);

    });


});