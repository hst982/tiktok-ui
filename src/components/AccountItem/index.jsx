import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/67b5b4971d85cd62e8acd165391c306b~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=63170&refresh_token=11f39aeeabd85c04a60173c4d22cc3b6&x-expires=1740574800&x-signature=CS9jNpY8o8YBliFrITPQqya30E4%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474" 
            alt="user" />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>aaaaaaaaaa</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </div>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     )
}

export default AccountItem;