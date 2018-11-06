const puppeteer = require('puppeteer');
// const path = require('path');

// it('paceholder', () => { });

const testURL = `${process.env.TRAVIS_BUILD_DIR}/puppeteer/index.html`;

// const testURL = path.join(__dirname, '/..');
let browser;
let page;

// // Pupeteer/Chromium tests required to test computed styles &
// // those relying on clientHeight etc. This is beyond Enyzme/JSDOM.

// // Allowing enough time for puppeteer to run
jest.setTimeout(30000);

beforeEach(async () => {
  // both options below not needed, switching off speeds things up
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  page = await browser.newPage();
  await page.goto(testURL);
});

afterEach(async () => {
  await browser.close();
});

it('renders correct textbox positions for arrow positions', async () => {
  const styleTop = await page
    .$eval('.test-arrow-top .rct-textbox-container', el => el.style.top);
  const styleCenter = await page
    .$eval('.test-arrow-center .rct-textbox-container', el => el.style.top);
  const styleBottom = await page
    .$eval('.test-arrow-bottom .rct-textbox-container', el => el.style.top);

  expect(styleTop).toEqual('calc(((50% - 0px) - 24px) + 0px)');
  expect(styleCenter).toEqual('calc(50% - 72px)');
  expect(styleBottom).toEqual('calc(((50% - 144px) - -24px) + 0px)');
});
