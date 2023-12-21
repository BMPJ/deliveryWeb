package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import com.backend.deliveryweb.vo.Stores;
import com.backend.deliveryweb.vo.Users;
import com.google.gson.Gson;
import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    private static final Logger logger = LoggerFactory.getLogger(MainController.class);
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

    //로그인+세션
    @PostMapping("/main/login")
    public String postLogin(@RequestBody Users users){

       int login = mainLogic.login(users);

       List<String> session = mainLogic.session(users.getUserid());


       if(login==1){
           return g.toJson(session);
       }else{
           return "" ;
       }
    }

    @GetMapping("/main/delivery")
    public String getDelivery(int type){

       List<Map<String, Object>> list = mainLogic.category(type);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/category")
    public String getCategory(@RequestParam("category") String category) {
        System.out.println(category);

       List<Map<String, Object>> list = mainLogic.getDeliveryStores(category);
        System.out.println(list);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/category/store")
    public String deliveryStore(@RequestParam ("storeid") String storeid){

        System.out.println(storeid);

       return "";
    }





}
