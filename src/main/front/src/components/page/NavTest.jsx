import React, {useState} from "react";

import {NavLink, useLocation} from "react-router-dom";

const NavTest = () => {
    const paths = useLocation().pathname;
    // const pathName = useLocation().pathname; <- 기존 에러 코드
    const pathName = useLocation().pathname.split("/")[1];

    const clientTabs = [
        {name: "내 정보", path: "/client/mypage/myinfo"},
        {name: "예약 조회", path: "/client/mypage/rez"},
        {name: "이전 예약 조회", path: "/client/mypage/pastrez"},
        {name: "내 리뷰 보기", path: "/client/mypage/review"},
    ];

    const adminTabs = [
        {name: "내 정보", path: "/admin/mypage/myinfo"},
        {name: "캠핑장 등록 및 관리", path: "/admin/mypage/post"},
        {name: "캠핑장 예약 관리", path: "/admin/mypage/rez"},
        {name: "캠핑장 리뷰 관리", path: "/admin/mypage/review"},
    ];

    // 객체로 처리
    const Tabs = {
        client: clientTabs,
        admin: adminTabs,
    };

    return (
        <div>
            {/* 기존 에러 코드 (삼항 연산자 활용) ->
	    {(pathName === "/client/mypage/" ? clientTabs : adminTabs) */}

            {Tabs[pathName].map((tab, idx) => {
                return (
                    <NavLink to={tab.path} key={idx}>
                        {/*<SidebarItem*/}
                        {/*    tab={tab}*/}
                        {/*    isActive={paths === tab.path ? true : false}*/}
                        {/*/>*/}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavTest;