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
                class: 'bg-success',
                text: 'Your message has been submitted'
            })
            setFormState({
                name: '',
                email: '',
                message: '',
            });
            recaptchaEnabled ?? recaptchaRef.current.reset();
        } catch(error) {
            console.error(error);
            setMessage({
                class: 'bg-danger',
                text: 'Error'
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
            <div className="custom-panel contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Header
                                title={page.title}
                                textAlign="center"
                                colWidth="6"
                            />
                            {message && 
                                <div className={`my-4 text-white ${message.class}`}>
                                    {message.text}
                                </div>
                            }
                            <div className="row justify-content-center">
                                <div className="col-6">
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