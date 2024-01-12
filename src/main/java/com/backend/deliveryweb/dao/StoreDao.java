package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Stores;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
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
    //가게 리스트 조회
    public List<Map<String, Object>> info(String userid) {
        return sqlSessionTemplate.selectList("info",userid);
    }
    //가게 수정
    public int update(Stores stores) {
        return sqlSessionTemplate.update("update",stores);
    }

    //가게 상세 조회
    public List<Map<String, Object>> detail(String storeid, String userid) {
        Map<String, Object> params = new HashMap<>();
        params.put("storeid", storeid);
        params.put("userid", userid);
    return sqlSessionTemplate.selectList("detail",params);
    }
}
