import './App.css';
import SignIn from './components/SignIn';
import Line from './components/Line'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';

function App() {
  //hookは[user, loading, error]という配列を返す
  //[user]とすることでログイン中のユーザー情報のみ取得する
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
