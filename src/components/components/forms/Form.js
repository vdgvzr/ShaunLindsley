import React from "react";
import Text from "./inputs/Text";
import Email from "./inputs/Email";
import Textarea from "./inputs/Textarea";
import Button from "../buttons/Button";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ form, onSubmit, onChange, formState, submitting, recaptchaRef, recaptchaKey, updateRecaptchaToken }) => {
    return(
        <>
            <form className="default-form" onSubmit={onSubmit}>
                {form.inputs.map((input, i) => {
                    if (input.type === 'text') {
                        return(
                            <div key={i} className="row justify-content-center mb-3">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <Text 
                                        label={input.label}
                                        name={input.name}
                                        onChange={onChange}
                                        value={formState.name}
                                        required={true}
                                    />
                                </div>
                            </div>
                        )
                    } else if (input.type === 'email') {
                        return(
                            <div key={i} className="row justify-content-center mb-3">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <Email 
                                        label={input.label}
                                        name={input.name}
                                        onChange={onChange}
                                        value={formState.email}
                                        required={true}
                                    />
                                </div>
                            </div>
                        )
                    } else if (input.type === 'textarea') {
                        return(
                            <div key={i} className="row justify-content-center mb-3">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <Textarea
                                        label={input.label}
                                        name={input.name}
                                        rows="10"
                                        onChange={onChange}
                                        value={formState.message}
                                        required={true}
                                    />
                                </div>
                            </div>
                        )
                    } else {
                        null
                    }
                })}
                {form.recaptchaEnabled &&
                    <div className="row my-3">
                        <div className="col-12 recaptcha">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={recaptchaKey}
                                onChange={updateRecaptchaToken}
                            />
                        </div>
                    </div>
                }
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Button
                            external={false}
                            url={null}
                            buttonText="Submit"
                            download={false}
                            type="submit"
                            icon="Submit"
                            submitting={submitting}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form;