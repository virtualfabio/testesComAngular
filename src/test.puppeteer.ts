const puppeteer = require('puppeteer');

(async function main(){
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        //await page.goto('http://localhost:8080/');
        await page.goto('http://localhost:4200/');
        
        await new Promise(resolve => setTimeout(resolve, 5000));

        it('should display "google" text on page', async () => {
            await expect(page).toMatch('google')
          })
        console.log('done');
        await browser.close();
    } catch (e) {
        console.log('Err', e);
    }
})();