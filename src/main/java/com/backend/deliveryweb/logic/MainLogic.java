package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.MainDao;
import com.backend.deliveryweb.vo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class MainLogic {

    @Autowired
    private MainDao mainDao;

    public int join(Users users) {
        return mainDao.join(users);
    }


    public int login(Users users) {
        return mainDao.login(users);
    }

    public String session(String userid) {
        return mainDao.session(userid);
    }

    public List<Map<String, Object>> userInfo(String userid) {
        return mainDao.userInfo(userid);
    }

    public List<Map<String, Object>> category(int type) {
        return mainDao.category(type);
    }

    public List<Map<String, Object>> getDeliveryStores(String category) { return mainDao.getDeliveryStores(category); }
}
