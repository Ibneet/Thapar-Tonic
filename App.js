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
   CameraTeacher: {screen: CameraTeacher}
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