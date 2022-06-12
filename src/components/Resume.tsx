import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import _debounce from 'lodash/debounce';
import MyDocument from './MyDocument';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  experience: string;
}

const Resume = () => {
  const [formState, setFormState] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    experience: '',
  });

  const [documentState, setDocumentState] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    experience: '',
  });

  const debouncer = useCallback(
    _debounce(
      (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
        formData: FormData
      ) => {
        setDocumentState({
          ...formData,
          [event.target.name]: event.target.value,
        });
      },
      1000
    ),
    []
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    debouncer(event, formState);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-5">
        <div className="pb-4 text-xl text-left">Resume Builder</div>
        <form>
          <div className="outline rounded-md p-3 mb-5">
            <div className="flex">
              <div className="flex-1">
                <label>First Name</label>
                <br />
                <input
                  className="outline outline-1 rounded-md my-1 px-5 py-1"
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex-1">
                <label>Last Name</label>
                <br />
                <input
                  className="outline outline-1 rounded-md my-1 px-5 py-1"
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <br />
            <div className="flex">
              <div className="flex-1">
                <label>Email</label>
                <br />
                <input
                  className="outline outline-1 rounded-md my-1 px-3 py-1"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex-1">
                <label>Phone Number</label>
                <br />
                <input
                  className="outline outline-1 rounded-md my-1 px-3 py-1"
                  type="text"
                  name="phoneNumber"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="outline rounded-md p-3 mb-5">
            <label>Experience</label>
            <br />
            <textarea
              className="outline outline-1 rounded-md my-1 px-3 py-1"
              rows={4}
              cols={90}
              name="experience"
              value={formState.experience}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex-1 min-h-screen">
        <MyDocument {...documentState} />
      </div>
    </div>
  );
};

export default Resume;
