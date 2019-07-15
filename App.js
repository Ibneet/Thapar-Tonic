import { createStackNavigator, createAppContainer } from "react-navigation";
import Start from './screens/Start'
import CreateNewAccount from './screens/CreateNewAccout';
import Login from './screens/Login';
import Student from './screens/Student';
import CameraScreen from './screens/CameraScreen';
import TeacherSignup from './screens/TeacherSignup';
import ParentSignup from './screens/ParentSignup';
import CameraParent from './screens/CameraParent';
import CameraTeacher from './screens/CameraTeacher';
import HomeStudent from './screens/HomeStudent';
import HomeTeacher from './screens/HomeTeacher';
import HomeParent from './screens/HomeParent';
import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyCY02kgs1SCdzd-lgNPOq9ZLY8ZMVsGKVw",
  authDomain: "campus-tonic.firebaseapp.com",
  databaseURL: "https://campus-tonic.firebaseio.com",
  projectId: "campus-tonic",
  storageBucket: "",
  messagingSenderId: "455096113702",
  appId: "1:455096113702:web:bf746f18376f410c"
};

firebase.initializeApp(firebaseConfig)

const MainNavigator = createStackNavigator(
  {
   Start: {screen: Start},
   CreateNewAccount: { screen: CreateNewAccount },
   Login: {screen: Login},
   Student: {screen: Student},
   CameraScreen: {screen: CameraScreen},
   TeacherSignup: {screen: TeacherSignup},
   ParentSignup: {screen: ParentSignup},
   CameraParent: {screen: CameraParent},
   CameraTeacher: {screen: CameraTeacher},
   HomeParent: {screen: HomeParent},
   HomeStudent: {screen: HomeStudent},
   HomeTeacher: {screen: HomeTeacher}

  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2B2B52'
      },
      headerTitleStyle: {
        color: '#fff'
      }

    }

});

const App = createAppContainer(MainNavigator);
export default App;