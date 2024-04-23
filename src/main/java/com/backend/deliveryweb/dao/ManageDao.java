package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Users;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ManageDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;

    public int join(Users users) {
        return sqlSessionTemplate.update("join", users);
    }

    public int checkInfo(String userid) {

        return sqlSessionTemplate.selectOne("checkInfo", userid);
    }

    public List<Map<String, Object>> getInfo(Users users) {

        return sqlSessionTemplate.selectList("getInfo", users);
    }

    public List<Map<String, Object>> login(Users users) {
        return sqlSessionTemplate.selectList("manageLogin", users);
    }
}
