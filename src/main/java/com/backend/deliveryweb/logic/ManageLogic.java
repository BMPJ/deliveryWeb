package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.ManageDao;
import com.backend.deliveryweb.vo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ManageLogic {

    @Autowired
    private ManageDao manageDao;


    public int join(Users users) {

        return manageDao.join(users);
    }

    public int checkInfo(String userid) {

        return manageDao.checkInfo(userid);
    }

    public List<Map<String, Object>> getInfo(Users users) {

        return manageDao.getInfo(users);
    }
}
