## Data Breach

#### [Link to Repo](https://github.com/Arathurs/Breach.git/)  

### About the Project

Data breaches are a common and persistent problem. Hackers routinely gain access to vast swathes of user information, including sensitive information, like passwords, often from third party sources with security vulnerabilities.

Data breaches often arise from completely separate and unrelated software, yet can still be catastrophic. Breaches allows bad actors to gain access to your personal information. And perhaps even worse, many users reuse login credentials like usernames and passwords for mulitple different services. So public release of a password to one site, may possibly the release of the password for almost every important service that user accesses.

This project features a mostly simple React App. The real magic happens in `src/login.js` which contains logic to swiftly determine and alert a user of any pertinent data breach of their personal information from third party websites. `login.js` fetches a a list of all breaches from an external API, which hosts a central location for reported data breaches from various sources. It then filters these breaches to show any each specific user any breaches which might be relevant to them or contain worrisome information.

#### Functionalities

  - Allow a user to login and verify authorization to access account.
  - The fetch API is used to handle a GET request which retrieves a list of all known breaches containing user's personal information.
  - The total list of breaches is then filtered to only incidents where "sensitive" information is disclosed and which occurred ***AFTER*** the user's last login date.
  - This code does not need to be concerned with breaches which happened ***BEFORE*** our last login. Like it is doing now, this software would have made the user aware of all recent pertinent breaches since the prior time the user logged in.
  - `login.js` then returns the filtered list to our React Frontend for display to the user, along with strongly suggested actions such as changing passwords.


#### Technologies Used
- React
- ReactDOM
- JavaScript ES2015/ES6+
- Fetch API
- HTML5
- CSS5
- Bootstrap 4