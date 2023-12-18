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

    public List<Map<String, Object>> selectAll(Map<String, Object> pMap) {

        return mainDao.selectAll(pMap);
    }


    public int join(Users users) {
        return mainDao.join(users);
    }


    public int login(Users users) {
        return mainDao.login(users);
    }
}
