package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class MainController {


    @Autowired
    private MainLogic mainLogic;

   @GetMapping("/main")
   public String main(@RequestParam Map<String, Object> pMap){

        List<Map<String, Object>> list = mainLogic.selectAll(pMap);
        Gson g = new Gson();
        String temp = g.toJson(list);
       System.out.println(temp);

        return temp;
   }





}
