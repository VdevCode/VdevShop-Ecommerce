import React, { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth();
auth.languageCode = 'it';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
// githubProvider.addScope('repo');

// githubProvider.setCustomParameters({
//   'allow_signup': 'false'
// });

console.log(twitterProvider)

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Tạo người dùng
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Đăng ký bằng gmail
  const signUpWithGmail = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

    // Đăng ký bằng facebook
  const signUpWithFacebook = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  // Đăng ký bằng github

  const signUpWithGithub = (email, password) => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
  }
    // Đăng ký bằng twitter

  const signInWithTwitter = (email, password) => {
      setLoading(true)
      return signInWithPopup(auth, twitterProvider)
  }

  // Đăng nhập
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // Đăng xuất
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Hàm dọn dẹp
    return () => {
      unsubscribe();
    };
  }, []); // Mảng phụ thuộc trống để đảm bảo hiệu ứng chỉ chạy một lần khi mount

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    signUpWithFacebook,
    login,
    logout,
    signUpWithGithub,
    signInWithTwitter
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
