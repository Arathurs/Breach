
async function testFetchBreaches () {
    const queryString = '?truncateResponse=false';
    const response = await fetch(`https://haveibeenpwned.woventeams.com/${queryString}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, (networkError) => {
        console.log(networkError.message);
    }).then(jsonResponse => {
        console.log(jsonResponse);
    })
}

testFetchBreaches();