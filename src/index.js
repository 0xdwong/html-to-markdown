const TurndownService = require('turndown');
const { Readability } = require('@mozilla/readability');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


async function htmlToMarkdown(url) {
    return fetchAndHandle(url);
}

async function fetchAndHandle(url) {
    // fetch html using JSDOM
    const dom = await JSDOM.fromURL(url);

    // using reading mode to extract the text of the web page and filter out other non-essential elements
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    title = article.title;
    const contentHtml = article.content;

    // html -> markdown
    const turndownService = new TurndownService({
        headingStyle: 'atx', // title in the form of #
    });
    const mdContent = turndownService.turndown(contentHtml);

    return mdContent;
}


module.exports = {
    htmlToMarkdown,
}