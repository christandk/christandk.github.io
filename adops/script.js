//test values
//short url: http://bitly.is/integrations
//long url: https://bitly.com/blog/bitly-integrations/?utm_campaign=August+Blog+Posts&utm_medium=bitly&utm_source=Product+Blog+Posts

//api key
const apiKey = '05d6a635a4e0c77d96ab81cd7c6b3ccdfde3025e';
const url = 'https://api-ssl.bitly.com';

//html elements
const $result = document.querySelector('.result');
const $inputField = document.querySelector('.input-field');
const $expandBtn = document.querySelector('.expand-btn');
const $shortenBtn = document.querySelector('.shorten-btn');

//AJAX functions
shortenUrl = () => {
    const urlToShorten = url + '/v3/shorten?access_token=' + apiKey + '&longUrl=' + $inputField.value;
    fetch(urlToShorten).then(response => {
    if (response.ok) {
        return response.json();
    }

    throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        console.log(jsonResponse);
        // $result.innerHTML = '<p>Your shortened url:</p><p>' + jsonResponse.data.url + '</p>';
        $result.innerHTML = `<span>Your shortened url: </span><a href='${jsonResponse.data.url}'>${jsonResponse.data.url}</a>`;

    });
}

expandUrl = () => {
    const urlToExpand = url + '/v3/expand?access_token=' + apiKey + '&shortUrl=' + $inputField.value;

    console.log(urlToExpand);

    fetch(urlToExpand).then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        console.log(jsonResponse);
        // $result.innerHTML = '<p>Your expanded url:</p><p>' + jsonResponse.data.expand[0].long_url + '</p>';
        $result.innerHTML = `<p>Your expanded url:</p><p><a href='${jsonResponse.data.expand[0].long_url}'>${jsonResponse.data.expand[0].long_url}</a></p>`;
    });
}

const shorten = () => {
    $result.innerHTML = '';
    shortenUrl();
}

const expand = () => {
    $result.innerHTML = '';
    expandUrl();
}


$shortenBtn.addEventListener('click', shorten);
$expandBtn.addEventListener('click', expand);