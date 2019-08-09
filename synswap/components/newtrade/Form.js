import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import LoadingOverlay from 'react-loading-overlay';
import { Ball } from 'react-loading-io';
import * as Yup from 'yup';


const NewTradeFrom = props => {
    //const validationSchema = useSelector(state => state.NewTradeReducer.validationSchema);
    const [counterparty, changeCounterparty] = React.useState('');
    const [isLoading, changeLoading] = React.useState(false);
    const values = () => {
        const list = [...props.initialValues];
        const result = [];
        for (let i = 0; i < list.length; i++) {
            result.push(
                [list[i], Yup.string().required('Required')]
            )
        }
        return Object.fromEntries(new Map(result));
    };
    const testSchema = Yup.object().shape(values());
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
                initialValues={ props.initialValues }
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
                        <select value={ counterparty } onChange={ e => changeCounterparty(e.target.value)}>
                            <option value=""> Select Counterparty </option>
                            { props.counterparties.map((value, index) => {
                                return (
                                   <option key={ value + index } value={ value }>
                                        {value}
                                   </option>
                                );
                            })}
                        </select>
                        {
                            props.fields.map((field, index) => {
                                return (
                                    <div className="col" key={ field + index }>
                                        <Field type="name" name={ field } disabled={ counterparty === ''} />
                                        <ErrorMessage name={ field } />
                                    </div>
                                )
                            })
                        }
                        <button type="submit" disabled={ isValidating || isSubmitting }> Submit </button>
                    </Form>
                )}
            </Formik>
        </LoadingOverlay>
    )
};
export default NewTradeFrom;
