package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.ManageLogic;
import com.backend.deliveryweb.vo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manage")
public class ManageController {

    @Autowired
    private ManageLogic manageLogic;

    @GetMapping("/main")
    public String getmain(){
        return "";
    }

    @PostMapping("/join")
    public String postjoin(@RequestBody Users users){

        System.out.println(users);
        return "";
    }

    @GetMapping("/login")
    public String getLogin(){
        return "";
    }





}
