package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.StoreDao;
import com.backend.deliveryweb.vo.Stores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoreLogic {

    @Autowired
    private StoreDao storeDao;

    public int register(Stores stores){
        return storeDao.register(stores);
    }


}
