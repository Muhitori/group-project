import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Backdrop,
  Modal
} from '@material-ui/core';
import { useStyle } from './Styles';
import {
  validateCity,
  validateDate,
  validatePhone,
} from '../../../../utils/validation';
import { getMinDeliveryDate } from '../../../../utils/formatDate';
import { createOrderAsync, getUserCartAsync } from '../../../../store/slices/cart-slice';
import { cartProductsForOrder } from '../../../../store/selectors/cart-selector';

export const CheckoutForm = () => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const history = useHistory();
  const routeMatch = useRouteMatch('/cart/checkout');
  const products = useSelector(cartProductsForOrder);

  const minDeliveryDate = getMinDeliveryDate();

  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(minDeliveryDate);
  const [cityError, setCityError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');

  useEffect(async () => {
    dispatch(getUserCartAsync());
  }, []);

  const closeModal = () => {
    history.push('/cart');
  };

  const submit = async (e) => {
    e.preventDefault();

    const cityErrorMsg = validateCity(city);
    const phoneErrorMsg = validatePhone(phone);
    const dateErrorMsg = validateDate(date, minDeliveryDate);

    setCityError(cityErrorMsg);
    setPhoneError(phoneErrorMsg);
    setDateError(dateErrorMsg);

    if (!cityErrorMsg && !phoneErrorMsg) {
      const info = {
        phone,
        date,
        city,
        adress,
      };
      dispatch(createOrderAsync({ products, info }));
      closeModal();
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={routeMatch}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container
        className={classes.formContainer}
        component="main"
        maxWidth="xs"
      >
        <div className={classes.paper}>
          <Typography variant="h5">Checkout Form</Typography>
          <form className={classes.form} onSubmit={submit}>
            <Grid container spacing={2} className={classes.formField}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="City"
                  error={!!cityError}
                  helperText={cityError}
                  onChange={({ target }) => setCity(target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.formField}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="adress"
                  label="Adress"
                  id="adress"
                  onChange={({ target }) => setAdress(target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.formField}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  error={!!phoneError}
                  helperText={phoneError}
                  onChange={({ target }) => setPhone(target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.formField}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="date"
                  label="When"
                  type="datetime-local"
                  error={!!dateError}
                  helperText={dateError}
                  defaultValue={minDeliveryDate}
                  id="date"
                  onChange={({ target }) => setDate(target.value)}
                />
              </Grid>
            </Grid>
            <Button
              disabled={!city || !phone || !adress || !date}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Checkout
            </Button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};
