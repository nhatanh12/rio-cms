import {Tag, Space, Menu} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import React from "react";

import Avatar from "./AvatarDropdown";
import HeaderDropdown from "../HeaderDropdown";
import HeaderSearch from "../HeaderSearch";
// import "./index.less";
import classes from "./index.module.less";
import {useRecoilState} from "recoil";
import {userState} from "@/stores/user";
import SelectLang from "./SelectLang";
import {ReactComponent as LanguageSvg} from '@/assets/header/language.svg';

export type SiderTheme = "light" | "dark";

const ENVTagColor = {
    dev: "orange",
    test: "green",
    pre: "#87d068",
};

const GlobalHeaderRight: React.FC = () => {
    const [user, setUser] = useRecoilState(userState);

    const {settings} = user;
    let className = classes.right;

    if ((settings.navTheme === "realDark")) {
        className = `${classes.right} ${classes.dark}`;
    }
    return (
        <Space className={className}>
            <HeaderSearch
                className={`${classes.action} ${classes.search}`}
                placeholder="Search"
                defaultValue="Rio CMS"
                options={[]}
                onSearch={value => {
                    console.log('input', value);
                }}
            />
            <Avatar/>

            <SelectLang className={classes.action}/>
        </Space>
    );
};
export default GlobalHeaderRight;
