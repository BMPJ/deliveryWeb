package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.ManageLogic;
import com.backend.deliveryweb.vo.Users;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage")
public class ManageController {

    @Autowired
    private ManageLogic manageLogic;

    @PostMapping("/join")
    public String postjoin(@RequestBody Users users) {

        System.out.println(users);
        int result = manageLogic.join(users);
        return String.valueOf(result);
    }

    @GetMapping("/login")
    public String getLogin() {
        return "";
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
