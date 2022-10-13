// import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import './authentication.styles.scss';
// import {
  // auth,
  // signInWithGooglePopup,
  // signInWithGoogleRedirect,
  // createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

const Authentication = () => {
  // useEffect(async ()=>{
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  // }, [])

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />

      {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
    </div>
  );
};

export default Authentication;
