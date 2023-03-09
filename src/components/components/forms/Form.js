import React from "react";
import Text from "./inputs/Text";
import Email from "./inputs/Email";
import Textarea from "./inputs/Textarea";
import Button from "../buttons/Button";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ onSubmit, onChange, formState, submitting, recaptchaRef, recaptchaKey, updateRecaptchaToken }) => {
    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Text 
                            label="Full Name"
                            name="name"
                            onChange={onChange}
                            value={formState.name}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Email 
                            label="Email Address"
                            name="email"
                            onChange={onChange}
                            value={formState.email}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Textarea
                            label="Message"
                            name="message"
                            rows="10"
                            onChange={onChange}
                            value={formState.message}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}
                            onChange={updateRecaptchaToken}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Button
                            external={false}
                            url={null}
                            buttonText="Submit"
                            download={false}
                            type="submit"
                            icon="External"
                            submitting={submitting}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form;