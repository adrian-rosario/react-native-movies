# react-native-movies

A work in progress. Exploring the [movies React](https://github.com/adrian-rosario/django-react-movies) project in Expo / React Native, utilizing the same Django API endpoints, Redux, Google fonts, React Native Vector Icons, ScrollView, etc.

To note, the Django server must be run with:

```bash
python manage.py runserver 0.0.0.0:8000
```

and edit the `movies-expo/src/common/common_constants.js` file for the local IP address:

```bash
  BASE_URL: "http://192.0.0.0:8000", // use local ip address
```

<div style="text-align:center">
<img src="./screenshots/home.png" alt="home" style="width:150px" />
<img src="./screenshots/mission.png" alt="mission" style="width:150px" />
<img src="./screenshots/no-login.png" alt='not logged in'
style="width:150px"
/>
<img src="./screenshots/loggedin.png" alt="logged in" style="width:150px" />
</div>
