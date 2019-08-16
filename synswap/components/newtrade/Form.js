import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import LoadingOverlay from 'react-loading-overlay';
import { Ball } from 'react-loading-io';
import * as Yup from 'yup';
import {TextField, Select, InputLabel} from "@material-ui/core";

const NewTradeForm = props => {
    //const validationSchema = useSelector(state => state.NewTradeReducer.validationSchema);
    const { counterpartyList, initialValues, fields } = props;




    return (
        <LoadingOverlay
            active={ isLoading }
            spinner={ <Ball />}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'rgba(255, 255, 255, 0.1)'
                })
            }}
        >
            <Formik
                initialValues={ initialValues }
                onSubmit={ (values, actions)=> {
                    changeLoading(true);
                    setTimeout(() => {
                        changeLoading(false);
                    }, 2000);
                    console.log(values);
                    actions.setSubmitting(false);
                }}
                enableReinitialize={ true }
                /*onSubmit={(values, actions) => {
                    MyImaginaryRestApiCall(user.id, values).then(
                        updatedUser => {
                            actions.setSubmitting(false);
                            updateUser(updatedUser);
                            onClose();
                        },
                        error => {
                            actions.setSubmitting(false);
                            actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                            actions.setStatus({ msg: 'Set some arbitrary status or data' });
                        }
                    );
                }}
                */
                validationSchema={ testSchema }
                validateOnBlur={ true }
                >
                {({ errors, touched, isValidating, isSubmitting }) => (
                    <Form>
                        <Select value={ counterparty } onChange={ e => handleCounterpartyChange(e) } >
                            <option value=""> Select Counterparty </option>
                            { counterpartyList.map((value, index) => {
                                return (
                                   <option key={ value + index } value={ value }>
                                        {value}
                                   </option>
                                );
                            })}
                        </Select>
                        {
                            fields.map((field, index) => {
                                switch(field[1]){
                                    case 'text':
                                        return (
                                            <div className="col" key={ field[0] + index }>
                                                <Field name={ field[0] }
                                                       render={() => (
                                                           <TextField label={ field[0] } disabled={ counterparty === ''} variant="outlined"/>
                                                       )}
                                                />
                                                <ErrorMessage name={ field[0] } />
                                            </div>
                                        );
                                    case 'select':
                                        return (
                                            <Field name={ field[0]}
                                                   render={() => (
                                                       <div>
                                                           <InputLabel htmlFor={ field[0] }> { field[0] } </InputLabel>
                                                           <Select name={ field[0]} >
                                                               <option value="DEFAULT"> Default </option>
                                                           </Select>
                                                           <ErrorMessage name={ field[0] } />
                                                       </div>
                                                   )}
                                            />
                                        );
                                    case 'number':
                                        return (
                                            <div className="col" key={ field[0] + index }>
                                                <Field name={ field[0] }
                                                       render={() => (
                                                           <TextField label={ field[0] } disabled={ counterparty === ''} variant="outlined" type="number"/>
                                                       )}
                                                />
                                                <ErrorMessage name={ field[0] } />
                                            </div>
                                        );
                                    case 'date':
                                        return (
                                            <div className="col" key={ field[0] + index }>
                                                <Field name={ field[0] }
                                                       render={() => (
                                                           <TextField label={ field[0] } disabled={ counterparty === ''} variant="outlined" type="date"/>
                                                       )}
                                                />
                                                <ErrorMessage name={ field[0] } />
                                            </div>
                                        );
                                    default:
                                        return;
                                }

                            })
                        }
                        <button type="submit" disabled={ isValidating || isSubmitting }> Submit </button>
                    </Form>
                )}
            </Formik>
        </LoadingOverlay>
    )
};
export default NewTradeForm;
