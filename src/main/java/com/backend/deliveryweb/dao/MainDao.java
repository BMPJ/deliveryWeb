package com.backend.deliveryweb.dao;

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
        List<Map<String, Object>> list = sqlSessionTemplate.selectList("selectAll", pMap);
        return list;
    }

}
