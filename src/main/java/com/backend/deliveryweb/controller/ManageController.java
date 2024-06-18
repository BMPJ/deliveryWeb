package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.ManageLogic;
import com.backend.deliveryweb.vo.Users;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/manage")
public class ManageController {

    Gson g = new Gson();

    @Autowired
    private ManageLogic manageLogic;

    /**
     * 사장님 회원가입
     *
     * @param users
     * @return
     */
    @PostMapping("/join")
    public String postjoin(@RequestBody Users users) {

        System.out.println(users);
        int result = manageLogic.join(users);
        return String.valueOf(result);
    }

    /**
     * 사장님 로그인
     *
     * @param users
     * @return
     */
    @GetMapping("/login")
    public String getLogin(@ModelAttribute Users users) {

        System.out.println(users);
        List<Map<String, Object>> list = manageLogic.login(users);
        System.out.println(list);
        return g.toJson(list);
    }


    @GetMapping("/checkInfo")
    public String getInfo(@RequestParam String userid) {

        System.out.println(userid);

        return String.valueOf(manageLogic.checkInfo(userid));

    }

    @GetMapping("/getInfo")
    public String getInfo(@RequestParam Users users) {
        System.out.println(users);
        return String.valueOf(manageLogic.getInfo(users));
    }
}
