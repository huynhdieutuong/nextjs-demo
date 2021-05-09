import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  header?: string;
  footer?: () => JSX.Element;
  onCancel?: () => void;
  onOk?: () => void;
  buttonCancelText?: string;
  buttonOkText?: string;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  header,
  children,
  footer,
  onCancel,
  onOk,
  buttonCancelText,
  buttonOkText,
}) => {
  const classNameOpen = open ? styles.open : '';

  useEffect(() => {
    if (open) {
      document.querySelector('body').classList.add('hide-scroll');
    } else {
      document.querySelector('body').classList.remove('hide-scroll');
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      console.log(e);
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handler);

    // This function will run when Model is removed (componentWilUnmount) to DOM
    // If have not this function, handler still run although close modal, it is bad code (Memory leak)
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  const renderFooter = (): JSX.Element => {
    if (footer) {
      return footer();
    }

    return (
      <>
        <button onClick={onCancel}>{buttonCancelText}</button>
        <button onClick={onOk}>{buttonOkText}</button>
      </>
    );
  };

  return (
    <>
      <div
        className={`${styles.layer} ${classNameOpen}`}
        onClick={onClose}
      ></div>
      <div className={`${styles.modal} ${classNameOpen}`}>
        <div className={styles.header}>{header ? header : 'Header'}</div>
        <div className={styles.content}>{children ? children : 'Content'}</div>
        <div className={styles.footer}>{renderFooter()}</div>
      </div>
    </>
  );
};

Modal.defaultProps = {
  buttonCancelText: 'Cancel',
  buttonOkText: 'Ok',
};

export default Modal;
