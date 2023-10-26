import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signIn, signUp, deleteInfo } from "./userDataSlice";
import { typeAuthData } from "../../variables/reduxTypes";

export const useUserData = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);
  const deleteUser = () => dispatch(deleteInfo());

  const signInError = useAppSelector((state) => state.user.errorSignIn);
  const signInUser = (userData: typeAuthData) => dispatch(signIn(userData));

  const signUpError = useAppSelector((state) => state.user.errorSignUp);
  const signUpUser = (userData: typeAuthData) => dispatch(signUp(userData));

  return {
    userData,
    deleteUser,
    signInError,
    signInUser,
    signUpError,
    signUpUser
  };
};
