//Comment out sample imported data used to test our function logic before fetching real data
import {
  users as sampleUsers/*,
  breaches as sampleBreaches,
  response as sampleResponse*/
} from "./sample";

function authenticate(email, password) {
  const account = sampleUsers.find(a => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return null;
  }
}

async function login(email, password) {
  const account = authenticate(email, password);
  let breaches, copy;
  if (account) {
    // Async function to fetch all breaches associated with this account.
    (async function fetchBreaches () {
      const queryString = '?truncateResponse=false';
      //In most cases to access this API, you will need you own authenticated API as well as API Key.
      //The one provided below in the fetch statement was just an example and will not work. Follow the instructions in these docs to receive an authenticated API and API Keys: https://haveibeenpwned.woventeams.com/api/v3#BreachModel
      //Remember to append the `queryString` combining the parameter and value of  `truncateResponse` and false respectively, to the end of the url. Take a look at the `queryString' variable above to see what it should look like.
      const response = await fetch(`https://haveibeenpwned.woventeams.com/${queryString}`)
      .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw new Error('Request failed!');
      }, (networkError) => {
          console.log(networkError.message);
      }).then(jsonResponse => {
          return breaches = jsonResponse;
      })
    })()
    
    copy = JSON.parse(JSON.stringify(breaches));
    copy = copy.filter(breach => !breach["IsSensitive"] && breach["DataClasses"].includes("Passwords") && Date.parse(breach["AddedDate"]) >  Date.parse(account.lastLogin));
    const createBreaches = () => {
      let results = [];
      for(let i = 0; i < copy; i++) {
        let obj = {
          name : account.name,
          domain: i["Domain"],
          breachDate: i["BreachDate"],
          addedDate: i["AddedDate"]
        };
        results.push(obj);
      }
      return results;
    }
    const breachedAccs = createBreaches();
    if (copy.length > 0) {
      const returnObj = {
          success: true,
          meta: {
            suggestPasswordChange: true,
            breachedAccounts: breachedAccs
          }
	  }
	  return returnObj;
   
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}

export default login;