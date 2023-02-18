import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  CloseIcon,
  Title,
  Message,
  IconImg,
  Content
} from './styles';

const iconInfo = require('./icon-info.svg');
const iconWarning = require('./icon-warning.svg');
const iconSuccess = require('./icon-checked.svg');

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      if (title === '' || title === null || typeof title === 'undefined') {
        title = type;
      }

      setToasts(currentToasts => [
        ...currentToasts,
        { id, type, title, message }
      ]);

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="ba-toast" timeout={200}>
            <StyledToast
              key={toast.id}
              type={toast.type}
              onClick={() => removeToast(toast.id)}
            >
              {toast.type == 'info' && <IconImg src={iconInfo} />}
              {toast.type == 'success' && <IconImg src={iconSuccess} />}
              {toast.type == 'warning' && <IconImg src={iconWarning} />}
              {toast.type == 'danger' && <IconImg src={iconWarning} />}
              <CloseIcon type="close" />
              <Content>
                {toast.title && <Title type={toast.type}>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </Content>
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
