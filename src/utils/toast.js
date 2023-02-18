import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

const show = toast => {
  pubsub.emit('toast', toast);
};

const success = message => {
  show({
    type: 'success',
    title: 'Success',
    message: get(message, 'message', message),
    duration: 5
  });
};

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: get(err, 'message', err),
    duration: 5
  });
};

const info = data => {
  show({
    type: 'info',
    message: get(data, 'message', data),
    duration: 5
  });
};

const warning = data => {
  show({
    type: 'warning',
    message: get(data, 'message', data),
    duration: 5
  });
};

const danger = data => {
  show({
    type: 'danger',
    message: get(data, 'message', data),
    duration: 5
  });
};

export default { show, error, success, info, warning, danger };
