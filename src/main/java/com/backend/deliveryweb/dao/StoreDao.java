package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Stores;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class StoreDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;
    //가게 등록
    public int register(Stores stores) {

        return sqlSessionTemplate.update("register",stores);

    }

    public List<Map<String, Object>> info(String userid) {
        return sqlSessionTemplate.selectList("info",userid);
    }
}
