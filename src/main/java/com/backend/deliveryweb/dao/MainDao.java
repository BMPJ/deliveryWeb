package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Users;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class MainDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;

    public List<Map<String, Object>> selectAll(Map<String, Object> pMap) {
        return sqlSessionTemplate.selectList("selectAll", pMap);
    }
    public int join(Users users) {
        return sqlSessionTemplate.update("join", users);
    }

    public int login(Users users) {
        Integer result = sqlSessionTemplate.selectOne("login", users);
        return (result != null) ? result : 0; // null이면 0으로 처리
    }

}
