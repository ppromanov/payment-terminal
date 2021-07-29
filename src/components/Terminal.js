import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import MaskedInput from 'react-text-mask';
import Context from '../context/context';
import { Link, Redirect } from 'react-router-dom';
import NumberFormat from 'react-number-format';

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

const Terminal = () => {
  const { selectProvider, cellProvider } = useContext(Context);

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
    value = value.replace(/[^0-9]/g, '');
    if (!value) {
      error = 'Необходимо ввести сумму';
    } else if (value > 1000 || value <= 0) {
      error =
        'Максимальная сумма пополнения - 1000 рублей, минимальная - 1 рубль';
    }
    return error;
  };

  const [back, setBack] = useState('');

  if (back === 'back') {
    selectProvider(null);
    return <Redirect to="/" />;
  }

  function success(values) {
    const payment = values.payment.replace(/[A-Z:]/g, '');
    alert(
      'Пополнение на сумму: ' +
        payment +
        ' рублей, на номер ' +
        values.phone +
        ' проведенно успешно!'
    );
    setBack('back');
  }

  return (
    <div className="terminal">
      <div className="logo">
        <img
          src={cellProvider.logo}
          alt={cellProvider.title}
          className={cellProvider.title + ' terminal-logo'}
        />
      </div>
      <Formik
        initialValues={{ phone: '', payment: '' }}
        onSubmit={(values) => {
          const promise = new Promise((reslove, reject) => {
            const random = Math.random(0, 1);
            setTimeout(() => {
              if (random > 0.5) {
                reslove(success(values));
              } else {
                alert(
                  'Что-то пошло не так, повторите попытку позже. Приносим свои извинения'
                );
              }
            }, 1500);
          });
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
            <p>Введите сумму пополнения (максимум 1000 рублей)</p>
            <Field
              className="payment"
              validate={validatePayment}
              name="payment"
              render={({ field }) => (
                <NumberFormat
                  {...field}
                  placeholder="RUB:"
                  thousandSeparator={true}
                  prefix={'RUB: '}
                />
              )}
            />
            {errors.payment && touched.payment && (
              <div className="error">{errors.payment}</div>
            )}
            <div className="buttons">
              <button type="submit">Пополнить</button>
              <Link to="/">
                <button onClick={() => selectProvider(null)}>Назад</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Terminal;
