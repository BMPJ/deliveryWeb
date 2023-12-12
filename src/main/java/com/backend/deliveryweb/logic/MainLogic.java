package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.MainDao;
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
}
