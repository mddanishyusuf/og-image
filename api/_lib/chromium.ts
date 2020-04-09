import { launch, Page } from 'puppeteer-core';
import { getOptions } from './options';
import { FileType } from './types';
let _page: Page | null;

async function getPage(isDev: boolean) {
	if (_page) {
		return _page;
	}
	const options = await getOptions(isDev);
	const browser = await launch(options);
	_page = await browser.newPage();
	return _page;
}

export async function getScreenshot(html: string, type: FileType, isDev: boolean, imageType: string) {
	let imgWidth, imgHeight;

	if (imageType === 'igPost') {
		imgWidth = 1080;
		imgHeight = 1080;
	} else if (imageType === 'igStory') {
		imgWidth = 1080;
		imgHeight = 1920;
	} else if (imageType === 'twitter') {
		imgWidth = 1012;
		imgHeight = 506;
	} else if (imageType === 'facebook') {
		imgWidth = 1200;
		imgHeight = 630;
	} else if (imageType === 'linkedin') {
		imgWidth = 1584;
		imgHeight = 768;
	} else {
		imgWidth = 1080;
		imgHeight = 1080;
	}

	const page = await getPage(isDev);
	await page.setViewport({ width: imgWidth, height: imgHeight });
	await page.setContent(html);
	const file = await page.screenshot({ type });
	return file;
}
