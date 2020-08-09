## Data Breach

#### [Link to Repo](https://github.com/Arathurs/Breach.git/)  

### About the Project

Data breaches are a common and very important problem. Hackers routinely gain access to vast swath of user information, including sensitive information, like passwords, often from third party sources with security vulnerabilities.

Data breaches often arise from completely separate and unrelated software, yet can still be cautostrophic. Breaches allows bad actors to gain access to your personal information. And perhaps even worse, many users reuse login credentials like usernames and passwords for mulitple different services. So public release of a password to one site, may possibly the release of the password for almost every important service that user accesses.

This project features a mostly simple React App. The real magic happens in `src/login.js` which contains logic to swiftly determine and alert a user of any pertinent data breach of their personal information from third party websites. `login.js` fetches a a list of all breaches from an external API, which hosts a central location for reported data breaches from various sources. It then filters these breaches to show any each specific user any breaches which might be relevant to them or contain worrisome information.

#### Functionalities

  - Allow a user to login and verify their authorization to access that account.
  - The fetch API is then to handle a GET request which retrieves a list of all known breaches.
  - The total list of breaches is then filtered so only incidents where sensitive information is disclosed and which occurred ***BEFORE*** the user's last login remain.
  - This code does not need to be concerned about breaches which happened ***BEFORE*** our last login, since that is when the software would have alerted the user of previous breaches.
  - `login.js` then returns the filtered list for user display to our React Frontend, along with suggested actions such as changing passwords.


### Technologies Used
- React
- ReactDOM
- JavaScript ES2015/ES6+
- Fetch API
- HTML5
- CSS5
- Bootstrap 4


