package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Menu;
import com.backend.deliveryweb.vo.Stores;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class StoreDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;

    public int imageUpdate(Map<String, Object> image) {
        System.out.println(image);
        return sqlSessionTemplate.update("imageUpdate", image);
    }


    //가게 등록
    public int register(Stores stores) {

        return sqlSessionTemplate.update("register", stores);

    }

    public int logoImage(Map<String, Object> image) {
        System.out.println(image);
        return sqlSessionTemplate.update("registerImg", image);
    }

    //가게 리스트 조회
    public List<Map<String, Object>> info(String userid) {
        return sqlSessionTemplate.selectList("info", userid);
    }

    //가게 수정
    public int update(Stores stores) {
        return sqlSessionTemplate.update("update", stores);
    }

    //가게 상세 조회
    public List<Map<String, Object>> detail(String storeid, String userid) {
        Map<String, Object> params = new HashMap<>();
        params.put("storeid", storeid);
        params.put("userid", userid);
        return sqlSessionTemplate.selectList("detail", params);
    }

    public int menuRegister(Menu menu) {
        return sqlSessionTemplate.update("menuRegister", menu);
    }

    public List<Map<String, Object>> menuInfo(String storeid) {
        return sqlSessionTemplate.selectList("menuInfo", storeid);
    }

    public int menuUpdate(Menu menu) {
        return sqlSessionTemplate.update("menuUpdate", menu);
    }

    public List<Map<String, Object>> storeOrderList(String storeid) {
        return sqlSessionTemplate.selectList("storeOrderList", storeid);
    }

    public int menuDelete(Map<String, Object> menuid) {
        return sqlSessionTemplate.update("menuDelete", menuid);
    }

    public int menuImageDelete(Map<String, Object> menuid) {
        return sqlSessionTemplate.update("menuImageDelete", menuid);
    }

    public int delete(Map<String, Object> storeid) {
        return sqlSessionTemplate.update("storeDelete", storeid);
    }


}
