import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import PropTypes from "prop-types";

import Image from "@components/Images";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.nickname} />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <h4>{data.full_name}</h4>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
          )}
        </div>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    tick: PropTypes.bool,
  }).isRequired,
};

export default AccountItem;
// export default AccountItem;
