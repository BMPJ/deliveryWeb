package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.vo.Stores;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/main/*")
public class MainController {

    @GetMapping("main")
    public void Main(){

    }

    @PostMapping("./pk")
    public String pk(Stores stores){
        System.out.println(stores);
        return "";

    }
    @PostMapping("./dv")
    public String dv(Stores stores){
        System.out.println(stores);
        return "";
    }

}
