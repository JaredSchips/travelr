import { useState } from "react";
import { signupFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";

import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { CREATE_USER } from "../utils/mutations";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [createUser, error] = useMutation(CREATE_USER);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    try {
      const mutationResponse = await createUser({
        variables: {
          username: signupState.username,
          email: signupState["email-address"],
          password: signupState.password,
        },
      });
      const token = mutationResponse.data.createUser.token;
      Auth.login(token);
      window.location.pathname = "/profile";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        {error.error && (
          <div className="text-pink-500 font-bold">
            An error occured during the signup process.
          </div>
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
      <div className=""></div>
    </form>
  );
}
