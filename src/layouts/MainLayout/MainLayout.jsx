import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ Sidebar, View, Playbar }) {
    return (
        <div className={cx('container')}>
            <div className={cx('sidebar')}>{Sidebar}</div>
            <div className={cx('main-view')}>{View}</div>
            <div className={cx('playbar')}>{Playbar}</div>
        </div>
    );
}

export default MainLayout;
