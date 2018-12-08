## Technologies
* [Node v8.9.4](https://nodejs.org/docs/v8.9.4/api/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
    * via [`create-react-app`](https://github.com/facebook/create-react-app)
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* [React Native](https://facebook.github.io/react-native/)
    * via [`create-react-native-app`](https://github.com/react-community/create-react-native-app)
* [React Native Web](https://github.com/necolas/react-native-web)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [React Router Native](https://reacttraining.com/react-router/native/guides/quick-start)
* [Storybook](https://storybook.js.org/)
* [NativeBase](https://nativebase.io/)
    * [NativeBase Kitchen Sink](http://nativebase-customizer.geekydev.com/) ([src](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support))
* [Sequelize](http://docs.sequelizejs.com/) w/ [Postgres](https://www.postgresql.org/)
* [Redux](https://redux.js.org/)
    * [connected-react-router](https://github.com/supasate/connected-react-router)
    * [react-native-redux-router](https://github.com/aksonov/react-native-redux-router)
* [Passport](http://www.passportjs.org/)
    * [passport-facebook-token](https://github.com/drudge/passport-facebook-token)
* [Expo](https://expo.io/)

## Environment
### Mac
1. Install [Homebrew](https://brew.sh): `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install: `brew install postgresql@9.6`
3. Start Postgres: `brew services start postgresql@9.6`
4. Add line to your `~/.bash_profile`: `echo 'export PATH="/usr/local/opt/postgresql@9.6/bin:$PATH"' >> ~/.bash_profile`
4. Create default database: `createdb`
5. Install [pg Admin 4](https://www.pgadmin.org/): `brew cask install pgadmin4`
6. Install [ngrok](https://ngrok.com/): `brew csk install ngrok`
7. Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger): `brew cask install react-native-debugger`

### Windows
1. Install [Chocolately](https://chocolatey.org/)
    1. Open PowerShell as administrator by right clicking icon
    1. run `Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
1. Install postgresql: `choco install postgresql -y`
1. Install [pg Admin 4](https://www.pgadmin.org/) : `choco install pgadmin4 -y`
1. Install [ngrok](https://ngrok.com/): `choco install ngrok -y`
2. Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases)
3. Create default database: `createdb`
4. TODO: Android Instructions.

## Setup
1. install dependencies: `yarn install`
2. create local env file: `cp .env.example .env`
3. create database `yarn sequelize db:create`
4. run migrations `yarn sequelize db:migrate`
5. seed database `yarn sequelize db:seed:all`
6. Ask for Facebook API keys for `.env`

## Development
### Web
1. `yarn dev`
    * it'll give some warning about an untrusted certificate, just click advanced and proceed
1. serve web storybook: `yarn storybook`

### Native IOS
#### Running the App
1. `yarn api` in one terminal window
1. `ngrok http 8080` in another terminal window
1. 🔥 Fill in https ngrok url for `API_SERVER` in `.env` 🔥
3. `yarn native-start` in another terminal window
1. Open native app on ios simulator: `yarn ios`
    * Or Send to your iPhone `npx expo-cli send -s <your-phone-number-or-email>`
* Note: Do not use the "Open in iOS Simulator" button in the Expo Debugger popup.

#### Running Storybook Native
1. 🔥 Fill in `STORYBOOK=true` in `.env` 🔥
2. Serve native storybook: `yarn native-storybook`
3. Open native app on ios simulator: `yarn ios`
    * Or Send to your iPhone `npx expo-cli send -s <your-phone-number-or-email>`
