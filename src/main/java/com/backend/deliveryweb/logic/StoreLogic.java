package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.StoreDao;
import com.backend.deliveryweb.vo.Stores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StoreLogic {

    @Autowired
    private StoreDao storeDao;


    public int register(Stores stores){
        return storeDao.register(stores);
    }


    public List<Map<String, Object>> info(String userid) {

        return storeDao.info(userid);

    }
}
