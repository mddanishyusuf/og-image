import { ParsedRequest } from './types';

export function getHtml(parsedReq: ParsedRequest) {
	const { text, imageType } = parsedReq;

	let bgImgUrl, imgWidth, imgHeight, fontSize, marginTop, paddingUl, paddingli;
	console.log(imageType);

	if (imageType === 'igPost') {
		bgImgUrl = 'https://i.imgur.com/7ayqb7r.png';
		imgWidth = 1080;
		imgHeight = 1080;
		fontSize = 2.5;
		marginTop = 300;
		paddingUl = 40;
		paddingli = 20;
	} else if (imageType === 'igStory') {
		bgImgUrl = 'https://i.imgur.com/PQnOG6o.png';
		imgWidth = 1080;
		imgHeight = 1920;
		fontSize = 2.5;
		marginTop = 300;
		paddingUl = 40;
		paddingli = 20;
	} else if (imageType === 'twitter') {
		bgImgUrl = 'https://i.imgur.com/rKNJzur.png';
		imgWidth = 1012;
		imgHeight = 506;
		fontSize = 1.5;
		marginTop = 150;
		paddingUl = 20;
		paddingli = 10;
	} else if (imageType === 'facebook') {
		bgImgUrl = 'https://i.imgur.com/PB2sraW.png';
		imgWidth = 1200;
		imgHeight = 630;
		fontSize = 2;
		marginTop = 200;
		paddingUl = 10;
		paddingli = 5;
	} else if (imageType === 'linkedin') {
		bgImgUrl = 'https://i.imgur.com/9hLDbYw.png';
		imgWidth = 1584;
		imgHeight = 768;
		fontSize = 2;
		marginTop = 150;
		paddingUl = 20;
		paddingli = 20;
	} else {
		bgImgUrl = 'https://i.imgur.com/7ayqb7r.png';
		imgWidth = 1080;
		imgHeight = 1080;
		fontSize = 2.5;
		marginTop = 300;
		paddingUl = 40;
		paddingli = 20;
	}

	const listArray = JSON.parse(String(text));
	console.log(imgWidth, imgHeight);
	return `<!DOCTYPE html>
    <html>
        <meta charset="utf-8" />
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Comic+Neue&display=swap" rel="stylesheet" />
    
        <style>
            body {
                background-image: url(${bgImgUrl});
                background-repeat: no-repeat;
                background-size: contain;
                width: ${imgWidth}px;
                height: ${imgHeight}px;
                font-family: 'Comic Neue', cursive;
                padding:0;
                margin: 0;
            }
            .list {
                display: flex;
                align-items: center;
                width: ${imgWidth}px;
                height: ${imgHeight}px;
                text-align: center;
            }
            .list ul {
                margin: 0px auto;
                margin-top: ${marginTop}px;
                width: 60%;
                padding: ${paddingUl}px;
                list-style: none;
                font-size: ${fontSize}rem;
                border: 2px solid #acb8fa;
                border-radius: 20%;
            }
            .list ul li {
                padding: ${paddingli}px 0px;
            }
        </style>
        <body>
            <div class="list">
                <br />
                <ul>
                ${listArray.map((item: any) => getItem(item)).join('')}
                </ul>
            </div>
        </body>
    </html>
    `;
}

function getItem(item: string) {
	return `<li>- ${item}</li>`;
}
