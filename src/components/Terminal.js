import React from 'react';
import { useFormik } from 'formik';
import { Link, useParams, useHistory } from 'react-router-dom';
import {
  Input,
  TextField,
  InputLabel,
  Button,
  FormControl,
} from '@material-ui/core';
import * as yup from 'yup';
import providersList from './cellProvidersList';
import { TextMaskCustom, NumberFormatCustom } from './Masks';

const validation = yup.object().shape({
  payment: yup
    .number('Введите сумму')
    .min(1, 'Минималная сумма платежа - 1 рубль')
    .max(1000, 'Сумма должна быть менее 1000 рублей')
    .required('Необходимо ввести сумму платежа'),
  phone: yup
    .string()
    .test('len', (val) => val.replace(/[^0-9]/g, '').length === 10),
});

const Terminal = () => {
  const history = useHistory();
  const { cellProvider } = useParams();

  const formik = useFormik({
    initialValues: { phone: '9', payment: '1' },
    validationSchema: validation,
    onSubmit: (values) => {
      const promise = new Promise((reslove) => {
        const random = Math.random(0, 1);
        setTimeout(() => {
          if (random > 0.5) {
            reslove(success(values));
          } else {
            alert(
              'Что-то пошло не так, повторите попытку позже. Приносим свои извинения'
            );
          }
        }, 1000);
      });
      return promise;
    },
  });

  function success(values) {
    const payment = values.payment.replace(/[A-Z:]/g, '');
    alert(
      'Пополнение на сумму: ' +
        payment +
        ' рублей, на номер 8 ' +
        values.phone +
        ' проведенно успешно!'
    );
    history.push('/');
  }

  return (
    <div className="terminal">
      <div className="logo">
        <img
          src={providersList.find((item) => item.title === cellProvider).logo}
          alt={cellProvider}
          className={cellProvider + ' terminal-logo'}
        />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs">
          <FormControl>
            <InputLabel htmlFor="formatted-text-mask-input">
              Введите номер телефона без первой цифры
            </InputLabel>
            <Input
              style={{ width: '50vh' }}
              label="Введите номер телефона"
              variant="outlined"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              inputComponent={TextMaskCustom}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
            />
          </FormControl>
          <p />
          <TextField
            style={{ width: '50vh' }}
            label="Введите сумму пополнения"
            value={formik.values.payment}
            onChange={formik.handleChange}
            name="payment"
            id="payment"
            error={formik.touched.payment && Boolean(formik.errors.payment)}
            helperText={formik.touched.payment && formik.errors.payment}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <div className="buttons">
            <Button variant="outlined" color="primary" type="submit">
              Пополнить
            </Button>
            <Link to="/">
              <Button variant="outlined">Назад</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Terminal;
