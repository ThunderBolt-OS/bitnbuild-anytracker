
# Any Tracker

An Inventory management mobile app built in BitNBuild Hackathon.

[Our Landing Page ](https://any-tracker.surge.sh/)


## Screenshots

![App Screenshot](https://any-tracker.surge.sh/_next/static/images/banner1-59a5e72b668b3fbef9b4890f6fe807b3.png)

![App Screenshot](https://any-tracker.surge.sh/_next/static/images/banner2-efb5e5562978c22722055a9af921af84.png)



## Run Locally

Clone the project

```bash
  git clone https://github.com/ThunderBolt-OS/bitnbuild-anytracker.git
```

Go to the project directory

```bash
  cd mobileapp
```

Install dependencies

```bash
  npm install
```
### Before spinning up the server 

Install `expo` on your laptop/PC. Run the command below
```bash
npm install -g expo
```

If you don't have android/iOS emulator then install `expo` on your mobile via playstore (for android) or app store (for iOS)

### Spin up the server
Run the following command in your terminal

```bash
npm start
```

Open the expo app in your mobile and select `Scan QR Code`
Then scan the QR generate in the console after running the command `npm start`  




## Architecture and Methodology 

- Adopted Agile Methodology
- Micro-service Architecture
## Features

- Inventory Management
- 3rd Party API
- AI Forecasting
- Inventory Space Management
- Employee Management
- Inventory Report Generation
- SOS Contacts
- GS1 Barcode System


## Tech Stack

**Client:** React, React Native, Stylesheets

**Language:** TypeScript


## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` or `src/lib/baseUrl.tsx` file

After spinning up the backend (express.js and swagger) in your device open up your terminal and run `ipconfig` and copy your `IPv4 address`

`baseUrl` = `"http://<your IPv4 address>:5000/admin"`



## License

[MIT](https://choosealicense.com/licenses/mit/)

