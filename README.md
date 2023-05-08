# Subscriber Tinder 🔥


![File amount](https://img.shields.io/github/directory-file-count/bykowskiolaf/subscriber-tinder?style=for-the-badge) ![Last commit](https://img.shields.io/github/last-commit/bykowskiolaf/subscriber-tinder?style=for-the-badge) [![MIT License](https://img.shields.io/github/license/bykowskiolaf/subscriber-tinder?style=for-the-badge)](https://choosealicense.com/licenses/mit/)



This is a work-in-progress app for cleaning up channels you're subscribed to on youtube using the YouTube data API v3.
## Prerequisites 
* Google cloud project with YouTube data API enabled.
* OAuth 2.0 Client for a web application.
* A working node.js and npm install.
## Run Locally

1. Clone the project:

```bash
  git clone https://github.com/bykowskiolaf/subscriber-tinder.git
```

2. Go to the project directory:

```bash
  cd subscriber-tinder
```

3. Install dependencies:

```bash
  npm install
```

4. Edit the .env config with your client id, secret, redirect URI and mongoDB link.

5. Build the neccessary tailwind files using:

```bash
  npm run build-css
```

6. Start the server.

```bash
  npm run start:dev
```
