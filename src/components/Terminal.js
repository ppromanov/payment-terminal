import React from 'react';
import { Formik, Field, Form } from 'formik';
import MaskedInput from 'react-text-mask';

const phoneNumberMask = [
  '8',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const Terminal = ({ cellProvider: { title, logo }, selectProvider }) => {
  const validatePhone = (value) => {
    let error;
    value = value.replace(/[^0-9]/g, '');
    if (!value) {
      error = 'Необходимо ввести номер телефона';
    } else if (value.length < 11) {
      error = 'В номере телефона не достаточно цифр';
    }
    return error;
  };

  const validatePayment = (value) => {
    let error;
    if (!value) {
      error = 'Необходимо ввести сумму';
    } else if (/[^0-9]/i.test(value)) {
      error = 'Сумма должна быть записанна цифрой';
    } else if (value > 1000) {
      error = 'Максимальная сумма пополнения - 1000 рублей';
    }
    return error;
  };

  return (
    <div className="terminal">
      <img src={logo} alt={title} className={title + ' terminal-logo'} />
      <Formik
        initialValues={{ phone: '', payment: '' }}
        onSubmit={(values) => {
          alert(
            'Пополнение на сумму: ' +
              values.payment +
              ' рублей, на номер ' +
              values.phone +
              ' проведенно успешно!'
          );
          selectProvider(null);
        }}
      >
        {({ errors, touched }) => (
          <Form className="inputs">
            <p>Введите номер телефона</p>
            <Field
              className="number"
              validate={validatePhone}
              name="phone"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id="phone"
                  type="text"
                  placeholder="8 (___) ___-____"
                />
              )}
            />
            {errors.phone && touched.phone && (
              <div className="error">{errors.phone}</div>
            )}
            <p>Введите сумму пополнения(максимум 1000 рублей)</p>
            <Field
              className="payment"
              validate={validatePayment}
              name="payment"
            />
            {errors.payment && touched.payment && (
              <div className="error">{errors.payment}</div>
            )}
            <div className="buttons">
              <button type="submit">Пополнить</button>
              <button onClick={() => selectProvider(null)}>Назад</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Terminal;
