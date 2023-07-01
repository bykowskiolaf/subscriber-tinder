# Subscriber Tinder 🔥

![File amount](https://img.shields.io/github/directory-file-count/bykowskiolaf/subscriber-tinder?style=for-the-badge) ![Last commit](https://img.shields.io/github/last-commit/bykowskiolaf/subscriber-tinder?style=for-the-badge) [![MIT License](https://img.shields.io/github/license/bykowskiolaf/subscriber-tinder?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

This is a work-in-progress app for cleaning up channels you're subscribed to on YouTube using the YouTube data API v3.
## Prerequisites 
* Google cloud project with YouTube data API enabled.
* OAuth 2.0 Client for a web application.
* A working node.js and npm installation.
## Run Locally

1. Clone the project:

```bash
	git clone --recurse-submodules https://github.com/bykowskiolaf/subscriber-tinder.git
```

2. Navigate to the project directory:

```bash
	cd subscriber-tinder
```

4. Navigate to st-frontend & st-backend directory.

5. Install dependencies:

```bash
	npm install
```

6. Edit the st-backend/config/.env config with your client id, secret, redirect URI and mongoDB link for authentication.
