import { useEffect, useState, useCallback } from "react";
import _debounce from "lodash/debounce";
import MyDocument from "./MyDocument";
import { useForm, SubmitHandler } from "react-hook-form";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const Resume = () => {
  const [formState, setFormState] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [documentState, setDocumentState] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const debouncer = useCallback(_debounce((event: React.ChangeEvent<HTMLInputElement>, formData: FormData) => {
    setDocumentState({
      ...formData,
      [event.target.name]: event.target.value
    });
  }, 500), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
    debouncer(event, formState);
  }

  return (
    <div className="flex">
      <div className="flex-1 p-5">
        Resume Builder
        <form>
          <input className="outline outline-1 my-1 px-5 py-1" type="text" name="firstName" value={formState.firstName} placeholder="First Name" onChange={handleChange}></input>
          <br />
          <input className="outline outline-1 my-1 px-5 py-1" type="text" name="lastName" value={formState.lastName} placeholder="Last Name" onChange={handleChange}></input>
          <br />
          <input className="outline outline-1 my-1 px-5 py-1" type="email" name="email" value={formState.email} placeholder="Email" onChange={handleChange}></input>
          <br />
          <input className="outline outline-1 my-1 px-5 py-1" type="text" name="phoneNumber" value={formState.phoneNumber} placeholder="Phone Number" onChange={handleChange}></input>
        </form>
      </div>
      <div className="flex-1 min-h-screen">
        <MyDocument {...documentState} />
      </div>
    </div>
  );
};

export default Resume;
