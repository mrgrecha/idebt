# iDebt
It is mobile version of [iDebt](https://github.com/alexanderSvito/idebt-finance)

### How to run project locally? ###

First of all you need to clone project.
```sh
git clone https://github.com/mrgrecha/idebt.git
```
Then you need to setup [Expo](https://expo.io/). [There](https://expo.io/learn) you can find how to do it.

After installing Expo. Install dependecies.
```sh
yarn
```
or
```sh
npm install
```
Finally run
```sh
expo start
```
There you will find QR code. Scan it with your phone camera. Notice that your phone and laptop must use the same WI-FI.

### How to connect with backend? ###
How to run backend you can find it readme of [iDebt](https://github.com/alexanderSvito/idebt-finance)
Run iDebt on 0.0.0.0:8000:
```sh
python3 manage.py runserver 0.0.0.0:8000
```
When you run expo you can find IP of it(on top of the QR-code). Add it to ALLOWED_HOSTS in [settings](https://github.com/alexanderSvito/idebt-finance/blob/master/idebt/settings.py)
Then update constant BASE_API_URL in [constans](https://github.com/mrgrecha/idebt/blob/master/app/constants/index.js)
