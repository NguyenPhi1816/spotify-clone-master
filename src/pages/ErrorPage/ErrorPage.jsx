import classNames from 'classnames/bind';
import styles from './ErrorPage.module.scss';
import ModalLayout from '../../layouts/ModalLayout';

const cx = classNames.bind(styles);

function ErrorPage() {
    return (
        <ModalLayout>
            <div className={cx('wrapper')}>
                <img src={import.meta.env.VITE_LOGO_URL} alt="logo" />
                <h1>Không tìm thấy trang</h1>
                <p>Chúng tôi không tìm thấy trang bạn muốn tìm</p>
                {/* <Button
                    to="/"
                    className={cx('home-page-btn')}
                    content="Trang chủ"
                />
                <Button
                    className={cx('help-btn')}
                    content="Trợ giúp"
                    noBackground
                /> */}
            </div>
        </ModalLayout>
    );
}

export default ErrorPage;
