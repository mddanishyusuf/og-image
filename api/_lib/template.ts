import { ParsedRequest } from './types';

export function getHtml(parsedReq: ParsedRequest) {
	const { text, imageType } = parsedReq;

	let bgImgUrl, imgWidth, imgHeight;
	console.log(imageType);

	if (imageType === 'ig_post') {
		bgImgUrl = 'https://i.imgur.com/7ayqb7r.png';
		imgWidth = 1080;
		imgHeight = 1080;
	} else if (imageType === 'ig_story') {
		bgImgUrl = 'https://i.imgur.com/PQnOG6o.png';
		imgWidth = 1080;
		imgHeight = 1920;
	} else {
		bgImgUrl = 'https://i.imgur.com/7ayqb7r.png';
		imgWidth = 1080;
		imgHeight = 1080;
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
                margin-top: 300px;
                width: 60%;
                padding: 40px;
                list-style: none;
                font-size: 2.5rem;
                border: 2px solid #acb8fa;
                border-radius: 20%;
            }
            .list ul li {
                padding: 20px 0px;
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
