import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();




const useFirebase = () => {
    const [user, setUser] = useState({});
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider();
    
    const auth = getAuth();

    const handleName = e => {
        setName(e.target.value)
      }
      const handleEmail = e => {
        setEmail(e.target.value)
      }
      
      const handlePassword = e => {
        setPassword(e.target.value)
    }
    const toggle = e => {
        setLogin(e.target.value)
      }
      
      const handleRegistration = e => {
        e.preventDefault();
    
        if (password.length < 6) {
          setError('password must be 6 character')
          return;
        }
        
        login ? processLogin(email, password) : createNewUser(email, password)
      }
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth,email, password)
          .then(result => {
            const user = result.user;
            console.log(user)
            setError(' ')
          })
          .catch(error => {
            setError(error.message);
        
          })
            
        
      }
        const createNewUser = (email, password) => {
          createUserWithEmailAndPassword(auth,email, password)
          .then(result => {
            const user = result.user;
            console.log(email, password)
              setError(' ')
            setUserName();
              
          })
          .catch(error => {
            setError(error.message);
          })
    
      const setUserName = () => {
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
            }
            
    }
    
    

    const googlehandle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const logout = () => {
        signOut(auth)
            .then(result => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                console.log('hello' ,user)
            }
        })
    },[])
    return {
        user,
        error,
        googlehandle,
        login,
    

        toggle,
        handleName,

        handleEmail, handleRegistration,
        handlePassword,
        logout
    }
}
    
export default useFirebase;