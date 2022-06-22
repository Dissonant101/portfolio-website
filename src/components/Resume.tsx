import { useState, useCallback, useEffect } from 'react';
import _debounce from 'lodash/debounce';
import MyDocument from './MyDocument';

export interface FormData {
  styleName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  summary: string;
  experience: Experience[];
  reference: Reference[];
}

interface Experience {
  experience: string;
}

interface Reference {
  reference: string;
}

/**
 * Resume builder page component.
 */
const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Input form state
  const [formState, setFormState] = useState<FormData>({
    styleName: 'orange1',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    summary: '',
    experience: [{ experience: '' }],
    reference: [{ reference: '' }],
  });

  // PDF document state
  const [documentState, setDocumentState] = useState<FormData>({
    styleName: 'orange1',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    summary: '',
    experience: [{ experience: '' }],
    reference: [{ reference: '' }],
  });

  // Delay between typing and reloading pdf
  const debouncer = useCallback(
    _debounce((event: any, formData: FormData, index?: any) => {
      if (index === undefined) {
        setDocumentState({
          ...formData,
          [event.target.name]: event.target.value,
        });
      } else {
        const fieldName = event.target.name as keyof FormData;
        const list = [...(formData[fieldName] as any[])];
        list[index] = {
          [fieldName]: event.target.value,
        };
        setDocumentState({ ...formData, [event.target.name]: list });
      }
    }, 1000),
    []
  );

  const handleChange = (event: any, index?: any) => {
    if (index === undefined) {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value,
      });
      debouncer(event, formState);
    } else {
      const fieldName = event.target.name as keyof FormData;
      const list = [...(formState[fieldName] as any[])];
      list[index] = {
        [fieldName]: event.target.value,
      };
      setFormState({ ...formState, [event.target.name]: list });
      debouncer(event, formState, index);
    }
  };

  const handleFieldAdd = (fieldName: keyof FormData) => {
    const list = [...(formState[fieldName] as any[])];
    list.push({ [fieldName]: '' });
    setFormState({ ...formState, [fieldName]: list });
  };

  const handleFieldRemove = (fieldName: keyof FormData, index: number) => {
    const list = [...(formState[fieldName] as any[])];
    list.splice(index, 1);
    setFormState({ ...formState, [fieldName]: list });
  };

  return (
    <div className="flex">
      <div className="flex-1 p-5">
        <div className="pb-4 text-xl text-left">Resume Builder</div>
        <form>
          <div className="outline rounded-md p-3 mb-5">
            <label>Style</label>
            <select
              className="outline outline-1 rounded-md my-1 px-5 py-1 w-full"
              name="styleName"
              defaultValue={'orange1'}
              onChange={handleChange}
            >
              <option value="orange1">Orange 1</option>
              <option value="teal1">Teal 1</option>
            </select>
          </div>
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
            <label>Summary</label>
            <br />
            <textarea
              className="outline outline-1 rounded-md my-1 px-3 py-1"
              rows={4}
              cols={90}
              name="summary"
              value={formState.summary}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="outline rounded-md p-3 mb-5">
            <label>Experience</label>
            <br />
            {formState.experience.map((singleExperience, index) => (
              <div key={index} className="experiences">
                <div>
                  <input
                    className="experience outline outline-1 rounded-md my-1 px-3 py-1"
                    type="text"
                    name="experience"
                    value={singleExperience.experience}
                    onChange={(e) => handleChange(e, index)}
                  ></input>
                  {formState.experience.length > 1 && (
                    <button
                      className="p-3"
                      type="button"
                      onClick={() => handleFieldRemove('experience', index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div>
                  {formState.experience.length - 1 === index && (
                    <button
                      type="button"
                      onClick={() => handleFieldAdd('experience')}
                    >
                      Add Experience
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="outline rounded-md p-3 mb-5">
            <label>References</label>
            <br />
            {formState.reference.map((singleReference, index) => (
              <div key={index} className="references">
                <div>
                  <input
                    className="reference outline outline-1 rounded-md my-1 px-3 py-1"
                    type="text"
                    name="reference"
                    value={singleReference.reference}
                    onChange={(e) => handleChange(e, index)}
                  ></input>
                  {formState.reference.length > 1 && (
                    <button
                      className="p-3"
                      type="button"
                      onClick={() => handleFieldRemove('reference', index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div>
                  {formState.reference.length - 1 === index && (
                    <button
                      type="button"
                      onClick={() => handleFieldAdd('reference')}
                    >
                      Add Reference
                    </button>
                  )}
                </div>
              </div>
            ))}
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
