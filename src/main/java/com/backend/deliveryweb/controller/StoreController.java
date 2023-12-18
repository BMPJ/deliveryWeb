package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.StoreLogic;
import com.backend.deliveryweb.vo.Stores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreLogic storeLogic;

    //가게 등록
    @PostMapping("/register")
    public String storeRegister(@RequestBody Stores stores){

        System.out.println(stores);
        int result = storeLogic.register(stores);
        return String.valueOf(result);

    }

}
