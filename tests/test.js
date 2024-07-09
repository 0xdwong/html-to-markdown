const { htmlToMarkdown } = require('../src/index');
const fs = require('fs');


async function main() {
    const url = 'https://medium.com/movementlabsxyz/the-movevm-a-new-era-of-blockchain-precision-and-safety-a1b5bd4a65ea';
    const mdContent = await htmlToMarkdown(url);

    fs.writeFileSync('target.md', mdContent);
}

main();