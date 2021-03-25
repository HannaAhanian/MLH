import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-001 Page Title is MLH trial', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function () {
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-006 Gender radio button label is present', function () {
            let gender = $(sel.radioButtons).isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-007.a Gender radio button label is present', function () {
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-007.b Gender radio button label is present', function () {
           let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-007.c Gender radio button label is present', function () {
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-008 Age field label is present', function () {
            let ageLabel = $(sel.age).isDisplayed();
            expect(ageLabel).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let ageField = $(sel.age).isDisplayed();
            expect(ageField).toEqual(true);
        });

        it('TC-010 Story Type label  is present', function () {
            let label = $(sel.storyType).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present', function () {
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let image = $$(sel.imageLabel)[4].isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let imageField = $(sel.image).isDisplayed();
            expect(imageField).toEqual(true);
        });
        it('TC-014 Submit  button is present', function () {
            let imageField = $(sel.submit).isDisplayed();
            expect(imageField).toEqual(true);
        });

    });

});