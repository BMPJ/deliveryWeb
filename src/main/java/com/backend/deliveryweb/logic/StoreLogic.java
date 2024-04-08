package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.StoreDao;
import com.backend.deliveryweb.vo.Menu;
import com.backend.deliveryweb.vo.Stores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StoreLogic {

    @Autowired
    private StoreDao storeDao;

    public int update(Stores stores) {
        return storeDao.update(stores);
    }


    public int register(Stores stores){
        return storeDao.register(stores);
    }


    public List<Map<String, Object>> info(String userid) {

        return storeDao.info(userid);

    }


    public List<Map<String, Object>> detail(String storeid, String userid) {

        return storeDao.detail(storeid, userid);
    }


    public int menuRegister(Menu menu) {
        return storeDao.menuRegister(menu);
    }

    public List<Map<String, Object>> menuInfo(String storeid) {
        return storeDao.menuInfo(storeid);
    }

    public int menuUpdate(Menu menu) {
        return storeDao.menuUpdate(menu);
    }

    public List<Map<String, Object>> orderList(String storeid) { return storeDao.orderList(storeid); }
}
