package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Stores;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StoreDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;
    //가게 등록
    public int register(Stores stores) {

        return sqlSessionTemplate.update("register",stores);

    }
}
