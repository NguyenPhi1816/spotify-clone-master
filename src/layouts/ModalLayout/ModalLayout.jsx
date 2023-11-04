import classNames from 'classnames/bind';
import styles from './ModalLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ModalLayout({ children, backgroundColor }) {
    return (
        <div
            className={cx('modal')}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className={cx('modal-content')}>{children}</div>
        </div>
    );
}

ModalLayout.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
};

export default ModalLayout;
