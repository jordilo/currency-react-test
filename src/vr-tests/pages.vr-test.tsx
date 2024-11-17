import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {

    await page.route('*/**/v1/bpi/currentprice.json', async route => {
        const json = {
            "bpi": {
                "USD": {
                    "rate": "97,454",
                },
                "EUR": {
                    "rate": "45,785",
                }
            }
        };
        await route.fulfill({json});
    });

})
test('should render properly home page', async ({page}) => {
    await page.goto('/');
    await page.waitForResponse('*/**/v1/bpi/currentprice.json');
    expect(await page.screenshot()).toMatchSnapshot();
});

test('should render properly currency card', async ({page}) => {
    await page.goto('/');
    await page.waitForResponse('*/**/v1/bpi/currentprice.json');

    const currencyCardSelector = '*[data-testid=currency-card]';
    await page.waitForSelector(currencyCardSelector, {timeout: 3000})

    expect(await page.locator(currencyCardSelector).screenshot()).toMatchSnapshot();
});

test('should show loading when user is not still fetched', async ({page}) => {
    await page.goto('/profile');
    expect(await page.screenshot()).toMatchSnapshot();
});
test('should show user profile when is fetched', async ({page}) => {
    await page.goto('/profile');

    const cardSelector = '*[data-testid=card]';
    await page.waitForSelector(cardSelector, {timeout: 4000});

    expect(await page.locator(cardSelector).screenshot()).toMatchSnapshot();
});