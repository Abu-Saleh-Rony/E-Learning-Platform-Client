import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import swal from "sweetalert";
const RegisterPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { createUser, profileUpdated, updateEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const handleRegisterForm = (e) => {
    setSuccess(false);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
        form.reset();
        updateUserProfile(name, photoURL);
        navigate(from, { replace: true });
        swal("Register successful!", "You can visit now!", "success");
        verifyEmail();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
        swal("Wrong!", "Please try again letter", "warning");
        // ..
      });
  };

  const updateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    profileUpdated(profile)
      .then(() => { })
      .catch((error) => console.error(error));
  };

  const verifyEmail = () => {
    updateEmail().then(() => { });
  };

  return (
    <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100 md:w-[50%] mx-auto">
      <form
        onSubmit={handleRegisterForm}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid"
      >
        <label for="name" className="self-start text-xs font-semibold">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
          required
        />
        <label for="PhotoURL" className="self-start text-xs font-semibold">
          PhotoURL
        </label>
        <input
          id="PhotoURL"
          type="text"
          name="photoURL"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
          required
        />

        <label for="email" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
          required
        />

        <label for="password" className="self-start mt-3 text-xs font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          Sign up
        </button>
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <span>Already have an account?</span>
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="dark:text-gray-400"
          >
            Sign in
          </Link>
          {error}
        </div>
        <div>{success && <small>Successfully Register</small>}</div>
      </form>
    </div>
  );
};

export default RegisterPage;
