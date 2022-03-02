let books = [
    {
        name: 'Adventures in Dinglewood',
        id: 'adventures-in-dinglewood',
        image: 'dinglewood.jpg',
        description: "If you are in a hurry, you might pass by Dinglewood without paying much attention. But if you listen carefully, you just might hear the pitter-patter of small feet and the chattering of tiny voices. Turn the page—There's a world of adventure here in Dinglewood for you to discover!",
        paperback: true,
        paperback_price: 17.95,
        hardcover: true,
        hardcover_price: 26.95,
        pages: 80,
        width: 8.5,
        height: 8.5,
        published: 2018,
        publisher: 'Belle Isle Books',
        isbn: {
            10: 9781947860216,
            13: '978-1947860216',
        },
        urls: {
            'belle-isle': 'http://www.belleislebooks.com/store/p121/adventuresindinglewood.html',
            bookshop: 'https://bookshop.org/books/adventures-in-dinglewood/9781947860131',
            'barnes-and-noble': 'https://www.barnesandnoble.com/w/adventures-in-dinglewood-helen-l-williamson/1129189888',
            amazon: 'https://www.amazon.com/dp/1947860216',
        },
    },
    {
        name: 'I Just Met a Dinosaur!',
        id: 'i-just-met-a-dinosaur',
        image: 'dinosaur.png',
        description: "If you met a dinosaur, what would you do? Play hide-and-seek or go to the zoo? Who knows if their skin was pink, purple, or blue? Or if they squawked, roared, or mooed? Did they polish their nails and feathers and scales, and sharpen their teeth with the ends of their tails? When you open this book of dinosaur rhymes, you'll meet some of those creatures from long-ago times!",
        paperback: false,
        hardcover: true,
        hardcover_price: 18.95,
        pages: 32,
        width: 11.25,
        height: 8.75,
        published: 2016,
        publisher: 'Belle Isle Books',
        isbn: {
            10: 1939930677,
            13: '978-1939930675',
        },
        urls: {
            'belle-isle': 'http://www.belleislebooks.com/store/p93/I_Just_Met_a_Dinosaur!.html',
            bookshop: '',
            'barnes-and-noble': 'https://www.barnesandnoble.com/w/i-just-met-a-dinosaur-helen-l-williamson/1124812119',
            amazon: 'https://www.amazon.com/dp/1939930677',
        },
    },
    {
        name: 'Higgledy-Piggledy Thoughts',
        id: 'higgledy-piggledy-thoughts',
        image: 'thoughts.jpeg',
        description: 'Have you thought of a goat . . .<br />. . . in a fancy coat?<br />Or a hen that could only <em>SNORE</em>?<br /><br />Children will enjoy and be inspired by many short poems and beautiful illustrations.',
        paperback: true,
        paperback_price: 12.95,
        hardcover: false,
        pages: 48,
        width: 8.5,
        height: 11,
        published: 2013,
        publisher: 'Donnan LLC',
        isbn: {
            10: 0981925235,
            13: '978-0981925233',
        },
        urls: {
            'belle-isle': '',
            bookshop: '',
            'barnes-and-noble': '',
            amazon: 'https://www.amazon.com/dp/0981925235',
        },
    },
    {
        name: 'A Pineapple Dream and Other Nonsense',
        id: 'a-pineapple-dream-and-other-nonsense',
        image: 'pineapple.jpeg',
        description: "A Pineapple Dream and Other Nonsense is a beautifully illustrated full-color book of poems. They will delight your child and encourage their imagination as they read or listen to the poems and see the detailed drawings.<br /><br />It's Nonsense, it's Fun,<br />It tickles you tongue.<br />There's a mouse that knits<br />And a cat that sits.<br />There's a whale you'll adore<br />And a whole lot more.<br /><br />So, my friends, find a cozy nook<br />And plunge headlong into this book.",
        paperback: true,
        paperback_price: 15.95,
        hardcover: false,
        pages: 40,
        width: 8.5,
        height: 11,
        published: 2011,
        publisher: 'Donnan LLC',
        isbn: {
            10: 0981925227,
            13: '978-0981925226',
        },
        urls: {
            'belle-isle': '',
            bookshop: '',
            'barnes-and-noble': '',
            amazon: 'https://www.amazon.com/dp/0981925227',
        },
    },
    {
        name: 'Tales from Balladhoon',
        id: 'tales-from-balladhoon',
        image: 'balladhoon.jpeg',
        description: 'Join Johnny McGlory and his friends on a delightful journey through the Irish countryside, where fairies and leprechauns are as real as the donkey that walks under the sea and the magician who summons butterflies.<br /><br />These original Irish tales by Irish native Helen L. Williamson, are a delightful glimpse into the world of imagination and an introduction to the time honored craft of Irish storytelling. These books are sure to capture the hearts of both young and old.',
        paperback: true,
        paperback_price: 12.95,
        hardcover: false,
        pages: 87,
        width: 6,
        height: 9,
        published: 2008,
        publisher: 'Donnan LLC',
        isbn: {
            10: 0981925200,
            13: '978-0981925202',
        },
        urls: {
            'belle-isle': '',
            bookshop: '',
            'barnes-and-noble': '',
            amazon: 'https://www.amazon.com/dp/0981925200',
        },
    },
];

let result = [];

books.forEach((book) => {
    let type, price;
    if (book.paperback && book.hardcover) {
        type = 'Paperback / Hardcover';
        price = `$${book.paperback_price} / $${book.hardcover_price}`;
    }
    if (book.paperback && !book.hardcover) {
        type = 'Paperback';
        price = `$${book.paperback_price}`;
    }
    if (!book.paperback && book.hardcover) {
        type = 'Hardcover';
        price = `$${book.hardcover_price}`;
    }

    result.push(
        `<span id="${book.id}"></span>`,
        `<table class="book-table">`,
        `<tbody>`,
        `<tr>`,
        `<td>`,
        `<img class="book-cover popupimage" src="/images/${book.image}" alt="${book.name} Cover" />`,
        `</td>`,
        `<td>`,
        `<div class="paragraph">`,
        `<strong><a href="#${book.id}" class="nolinkstyle">${book.name}</a></strong>`,
        `${book.description}`,
        `<div>`,
        `<strong>Type:</strong> ${type}<br />`,
        `<strong>Price:</strong> ${price}<br />`,
        `<strong>Pages:</strong> ${book.pages}<br />`,
        `<strong>Dimensions:</strong> ${book.width}" x ${book.height}"<br />`,
        `<strong>Published:</strong> ${book.published}, ${book.publisher}<br />`,
        `<strong><span class="tooltip-text tooltip-bottom" data-tooltip="International Standard Book Number">ISBN</span> 10 / ISBN 13:</strong> ${book.isbn[10]} / ${book.isbn[13]}`,
        `</div`,
        `</div>`,
        `</td>`,
        `</tr>`,
        `</tbody>`,
        `</table>`,
        `<div>`,
        `${book.urls['belle-isle'] ? `<a href="${book.urls['belle-isle']}" target="_blank"><img src="/images/belle-isle.png" alt="Belle Isle Books" /></a>` : ''}`,
        `${book.urls.bookshop ? `<a href="${book.urls.bookshop}" target="_blank"><img src="/images/bookshop.png" alt="Bookshop.org" /></a>` : ''}`,
        `${book.urls.amazon ? `<a href="${book.urls.amazon}" target="_blank"><img src="/images/amazon.png" alt="Amazon" /></a>` : ''}`,
        `${book.urls['barnes-and-noble'] ? `<a href="${book.urls['barnes-and-noble']}" target="_blank"><img src="/images/barnes-and-noble.png" alt="Barnes and Noble" /></a>` : ''}`,
        `</div>`
    );
});

document.querySelector('.container').innerHTML = result.join('');

addBookListeners();
