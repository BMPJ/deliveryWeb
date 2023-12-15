package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Users;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ManageDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;
    public int join(Users users) {
        return sqlSessionTemplate.update("join", users);
    }

    public int checkInfo(String userid) {

        return sqlSessionTemplate.selectOne("checkInfo",userid);
    }
}
