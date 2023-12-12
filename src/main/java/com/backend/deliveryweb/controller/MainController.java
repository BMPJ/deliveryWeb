package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
public class MainController {


    @Autowired
    private MainLogic mainLogic;
    @GetMapping("/test")
    public String test() {

        return "Hello, world!";
    }
   @GetMapping("/main")
   public String main(@RequestParam Map<String, Object> pMap){

        List<Map<String, Object>> list = mainLogic.selectAll(pMap);
       System.out.println(list);

        return "";
   }





}
