package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.StoreLogic;
import com.backend.deliveryweb.vo.Menu;
import com.backend.deliveryweb.vo.Stores;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public String storeRegister(@RequestPart("file") MultipartFile file, @RequestPart("store") String storeJson) {
        ObjectMapper objectMapper = new ObjectMapper();
        Stores stores;
        try {
            stores = objectMapper.readValue(storeJson, Stores.class);
        } catch (IOException e) {
            e.printStackTrace();
            return "Error parsing JSON";
        }

        System.out.println("컨트롤러파일:" + file);
        System.out.println("컨트롤러스토어:" + stores);

        int result = storeLogic.register(stores);
        String result1 = storeLogic.logoImage(file);

        return "";
    }
/*
    @PostMapping("/register")
    public String storeRegister(@RequestBody Stores stores) {

        int result = storeLogic.register(stores);
        return String.valueOf(result);

    }
*/

    @GetMapping("/info")
    public String storeInfo(@RequestParam String userid) {

        List<Map<String, Object>> list = storeLogic.info(userid);


        return g.toJson(list);
    }

    @GetMapping("/detail")
    public String storeDetail(@RequestParam String storeid, @RequestParam String userid) {

        List<Map<String, Object>> list = storeLogic.detail(storeid, userid);

        return g.toJson(list);
    }

    @PostMapping("/update")
    public String storeUpdate(@RequestBody Stores stores) {

        int result = storeLogic.update(stores);

        return String.valueOf(result);
    }

    @PostMapping("/delete")
    public String storeDelete(@RequestBody Map<String, Object> storeid) {

        int result = storeLogic.delete(storeid);

        return String.valueOf(result);
    }

    @PostMapping("/menu/register")
    public String menuRegister(@RequestBody Menu menu) {

        int result = storeLogic.menuRegister(menu);

        return String.valueOf(result);

    }

    @GetMapping("/menu/info")
    public String menuInfo(@RequestParam String storeid) {

        List<Map<String, Object>> list = storeLogic.menuInfo(storeid);
        return g.toJson(list);
    }

    @PostMapping("/menu/update")
    public String menuUpdate(@RequestBody Menu menu) {

        int result = storeLogic.menuUpdate(menu);

        return String.valueOf(result);

    }

    @PostMapping("/menu/delete")
    public String menuDelete(@RequestBody Map<String, Object> menuid) {
        int result = storeLogic.menuDelete(menuid);
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
