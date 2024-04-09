package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.StoreLogic;
import com.backend.deliveryweb.vo.Menu;
import com.backend.deliveryweb.vo.Stores;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

import static org.apache.logging.log4j.message.MapMessage.MapFormat.JSON;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreLogic storeLogic;

    Gson g = new Gson();

    //가게 등록
    @PostMapping("/register")
    public String storeRegister(@RequestBody Stores stores) {

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
    public String storeUpdate(@RequestBody Stores stores) {

        System.out.println(stores);
        System.out.println(stores.getName());

        int result = storeLogic.update(stores);

        return String.valueOf(result);
    }

    @PostMapping("/menu/register")
    public String menuRegister(@RequestBody Menu menu) {

        System.out.println(menu);

        int result = storeLogic.menuRegister(menu);

        return String.valueOf(result);

    }

    @GetMapping("/menu/info")
    public String menuInfo(@RequestParam String storeid) {

        System.out.println("스토어아이디" + storeid);
        List<Map<String, Object>> list = storeLogic.menuInfo(storeid);
        return g.toJson(list);
    }

    @PostMapping("/menu/update")
    public String menuUpdate(@RequestBody Menu menu) {
        System.out.println(menu);

        int result = storeLogic.menuUpdate(menu);

        return String.valueOf(result);

    }

    @PostMapping("/menu/imgUpdate")
    public String menuImgUpdate(@RequestParam MultipartFile file, @RequestParam("menuId") String menuId) {

        int menuid = g.fromJson(menuId, int.class);


        return storeLogic.imageUpdate(file, String.valueOf(menuid));

    }

    @GetMapping("/orderList")
    public String orderList(String storeid) {
        System.out.println(storeid);

        List<Map<String, Object>> list = storeLogic.storeOrderList(storeid);
        System.out.println(list);

        return "";
    }

}
