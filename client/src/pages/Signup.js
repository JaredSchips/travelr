import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage({ setIconsBlack }) {
  // If you need to modify setIconsBlack, pass a callback function or use a state management solution
  setIconsBlack = true;
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
        setIconsBlack={setIconsBlack} // If you need to pass the setIconsBlack to the Header component
      />
      <Signup />
    </>
  );
}
