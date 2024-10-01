// we do [[...sign-in]] for the folder name so that it will catch all of the sign in redirect
import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-sign-up bg-no-repeat">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
