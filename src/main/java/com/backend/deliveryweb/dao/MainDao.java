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

    public int join(Users users) {
        return sqlSessionTemplate.update("join", users);
    }

    public int login(Users users) {
        Integer result = sqlSessionTemplate.selectOne("login", users);
        return (result != null) ? result : 0; // null이면 0으로 처리
    }

    public List<String> session(String userid) {
        return sqlSessionTemplate.selectList("session", userid);
    }

    public List<Map<String, Object>> userInfo(String userid) {
        return sqlSessionTemplate.selectList("userInfo", userid);
    }

    public List<Map<String, Object>> category(int type) {
        return sqlSessionTemplate.selectList("category", type);
    }

    public List<Map<String, Object>> getDeliveryStores(String category) {
        return sqlSessionTemplate.selectList("getDeliveryStores", category);
    }

    public List<Map<String, Object>> getMenu(String storeid) {
        return sqlSessionTemplate.selectList("getMenu", storeid);
    }
}
