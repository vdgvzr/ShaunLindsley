import React, { useRef, useState } from "react";
import axios from "axios";
import Header from "../../components/headers/Header";
import Form from "../../components/forms/Form";

const Contact = ({ page }) => {
    const recaptchaEnabled = page.form[0].recaptchaEnabled;
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        errors: '',
    });
    const [message, setMessage] = useState({
        class: '',
        text: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState();

    const formId = process.env.REACT_APP_FORM_ID;
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef();

    // Submit form to formspark using axios
    const submitForm = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            name: formState.name,
            email: formState.email,
            message: formState.message,
            'g-recaptcha-response':  recaptchaToken,
        };

        try {
            await axios.post(formSparkUrl, payload);
            setMessage({
                class: 'bg-ylmn-blue',
                text: 'Your message has been submitted'
            })
            setFormState({
                name: '',
                email: '',
                message: '',
            });
            recaptchaEnabled ?? recaptchaRef.current.reset();
            setTimeout(() => {
                setMessage({
                    class: '',
                    text: ''
                })
            }, 5000);
        } catch(error) {
            console.error(error);
            setMessage({
                class: 'bg-rich-black',
                text: 'There was an error submitting the form, please try again'
            })
        }
        setSubmitting(false);
    }

    // Handle field change to set state value
    const updateFormControl = (e) => {
        const {id, value} = e.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    // Reset recaptcha token on submission
    const updateRecaptchaToken = (token) => {
        if (recaptchaEnabled) {
            setRecaptchaToken(token ?? null);
        }
    }

    return (
        <>
            <div className="custom-panel container contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Header
                                title={page.title}
                                textAlign="center"
                                colWidth="6"
                            />
                            <div className="row mb-5 justify-content-center">
                                <div className="col-8 text-center">
                                    <h6>{page.text}</h6>
                                </div>
                            </div>
                            {message.text !== ''
                            ?   
                                message &&
                                    <div className="row justify-content-center">
                                        <div className={`col-6 py-4 my-4 text-white ${message.class} text-center`}>
                                            {message.text}
                                        </div>
                                    </div>
                            :
                                null
                            }
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <Form 
                                        form={page.form[0]}
                                        onSubmit={submitForm}
                                        onChange={updateFormControl}
                                        formState={formState}
                                        submitting={submitting}
                                        recaptchaKey={recaptchaKey}
                                        recaptchaRef={recaptchaRef}
                                        updateRecaptchaToken={updateRecaptchaToken}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;