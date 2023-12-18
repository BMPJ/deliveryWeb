package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import com.backend.deliveryweb.vo.Users;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    @Autowired
    private MainLogic mainLogic;

    Gson g = new Gson();

   @GetMapping("/main")
   public String getMain(@RequestParam String userid){

       List<Map<String, Object>> list = mainLogic.userInfo(userid);

       return g.toJson(list);
   }

    @PostMapping("/main/join")
    public String postjoin(@RequestBody Users users){

        return String.valueOf(mainLogic.join(users));
    }

    @PostMapping("/main/login")
    public String postLogin(@RequestBody Users users){

       int login = mainLogic.login(users);

       if(login==1){
           return mainLogic.session(users.getUserid());
       }else{
           return "0";
       }
    }





}
