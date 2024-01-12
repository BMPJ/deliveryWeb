package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.StoreLogic;
import com.backend.deliveryweb.vo.Stores;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreLogic storeLogic;

    Gson g = new Gson();

    //가게 등록
    @PostMapping("/register")
    public String storeRegister(@RequestBody Stores stores){

        System.out.println(stores);
        int result = storeLogic.register(stores);
        return String.valueOf(result);

    }

    @GetMapping("/info")
    public String storeInfo(@RequestParam String userid) {
        //System.out.println(userid);

        List<Map<String, Object>> list = storeLogic.info(userid);


        return g.toJson(list);
    }

    @GetMapping("/detail")
    public String storeDetail(@RequestParam String storeid, @RequestParam String userid) {
        System.out.println(storeid);
        System.out.println(userid);

        List<Map<String, Object>> list = storeLogic.detail(storeid, userid);

        return g.toJson(list);
    }

    @PostMapping("/update")
    public String storeUpdate(@RequestBody Stores stores){

        System.out.println(stores);
        System.out.println(stores.getName());

        int result = storeLogic.update(stores);

        return String.valueOf(result);
    }


}
