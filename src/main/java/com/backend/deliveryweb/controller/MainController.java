package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import com.backend.deliveryweb.vo.Carts;
import com.backend.deliveryweb.vo.Orders;
import com.backend.deliveryweb.vo.Reviews;
import com.backend.deliveryweb.vo.Users;
import com.google.gson.Gson;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class MainController {

    @Autowired
    private MainLogic mainLogic;

    Gson g = new Gson();

    @GetMapping("/main")
    public String getMain(@RequestParam String userid) {

        System.out.println(userid);
        List<Map<String, Object>> list = mainLogic.userInfo(userid);

        return g.toJson(list);
    }

    @PostMapping("/main/join")
    public String postjoin(@RequestBody Users users) {

        return String.valueOf(mainLogic.join(users));
    }

    //로그인+세션
    @PostMapping("/main/login")
    public String postLogin(@RequestBody Users users) {

        int login = mainLogic.login(users);

        List<String> session = mainLogic.session(users.getUserid());

        if (login == 1) {
            return g.toJson(session);
        } else {
            return "";
        }
    }

    @GetMapping("/main/delivery")
    public String getDelivery(int type) {

        List<Map<String, Object>> list = mainLogic.category(type);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/category")
    public String deliveryGetCategory(@RequestParam("category") String category) {

        System.out.println(category);

        List<Map<String, Object>> list = mainLogic.getDeliveryStores(category);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/storeid")
    public String deliveryStoreid(@RequestParam("storeid") String storeid) {

        List<Map<String, Object>> list = mainLogic.getStores(storeid);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/storeMenu")
    public String deliveryStoreMenu(@RequestParam("storeid") String storeid) {

        List<Map<String, Object>> list = mainLogic.getMenu(storeid);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/menuOption")
    public String deliveryMenuOption(@RequestParam("menuid") String menuid) {

        List<Map<String, Object>> list = mainLogic.getOption(menuid);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/getCart")
    public String getCart(String userid) {
        System.out.println(userid);
        return g.toJson(mainLogic.getCart(userid));
    }

    @PostMapping("/main/delivery/cart")
    public String deliveryCart(@RequestBody Carts carts) {

        int i = mainLogic.checkCart(carts);

        if (i > 0) {
            mainLogic.plusQuantity(carts);
        } else {
            mainLogic.cart(carts);
        }
        return g.toJson(mainLogic.getCart(carts.getUserid()));
    }

    @GetMapping("/main/delivery/deleteCart")
    public String deleteCart(@RequestParam String userid) {

        mainLogic.deleteCart(userid);
        return "";
    }

    @GetMapping("/main/user/cartDeleteMenu")
    public String cartDeleteMenu(@RequestParam String cartid) {

        System.out.println(cartid);
        mainLogic.cartDeleteMenu(cartid);
        return "";
    }

    @GetMapping("/main/delivery/cart")
    public String deliveryCartGet(@RequestParam String userid) {

        List<Map<String, Object>> list = mainLogic.getCart(userid);
        System.out.println(list);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/cart/menu")
    public String getMenu(@RequestParam String menuid) {

        List<Map<String, Object>> list = mainLogic.cartMenu(menuid);

        return g.toJson(list);
    }

    @GetMapping("/main/delivery/cart/menuOptionId")
    public String getOption(@RequestParam String menuOptionId) {

        List<Map<String, Object>> list = mainLogic.cartMenuOption(menuOptionId);

        return g.toJson(list);
    }

    @PostMapping("/main/delivery/cart/pay")
    public String pay(@RequestBody Orders orders) {

        System.out.println(orders);

        return String.valueOf(mainLogic.deliveryPay(orders));
    }

    @GetMapping("/main/delivery/order")
    public String order(@RequestParam String userid) {

        System.out.println(mainLogic.orderList(userid));

        return g.toJson(mainLogic.orderList(userid));
    }

    @GetMapping("/main/delivery/getOrder")
    public String getOrder(String orderid) {

        return g.toJson(mainLogic.getOrder(orderid));
    }

    @PostMapping("/main/delivery/reviewWrite")
    public String reviewWrite(@RequestBody Reviews reviews) {

        System.out.println(reviews);

        return String.valueOf(mainLogic.reviewWrite(reviews));
    }

    @GetMapping("/main/delivery/reviewList")
    public String reviewList(String storeid) {

        return g.toJson(mainLogic.reviewList(storeid));
    }

    @GetMapping("/main/delivery/reviewCount")
    public String reviewCount(String storeid) {

        return g.toJson(mainLogic.reviewCount(storeid));
    }

    @GetMapping("/main/delivery/store/map")
    public String map(@RequestParam String adr) {

        System.out.println(adr);

        String apikey = "D8D77C59-1BA5-3F41-AFEB-A7BDD7B52198";
        String searchType = "ROAD";
        String epsg = "epsg:4326";

        StringBuilder sb = new StringBuilder("https://api.vworld.kr/req/address");
        sb.append("?service=address");
        sb.append("&request=getCoord");
        sb.append("&format=json");
        sb.append("&crs=" + epsg);
        sb.append("&key=" + apikey);
        sb.append("&type=" + searchType);
        sb.append("&address=" + URLEncoder.encode(adr, StandardCharsets.UTF_8));

        try {
            URL url = new URL(sb.toString());
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));

            JSONParser jspa = new JSONParser();
            JSONObject jsob = (JSONObject) jspa.parse(reader);
            JSONObject jsrs = (JSONObject) jsob.get("response");
            JSONObject jsResult = (JSONObject) jsrs.get("result");
            JSONObject jspoitn = (JSONObject) jsResult.get("point");

            Map<String, Object> map = new HashMap<>();

            map.put("x", jspoitn.get("x"));
            map.put("y", jspoitn.get("y"));
            System.out.println(map);

            return g.toJson(map);

        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/main/userAdr")
    public String userAdr(String userid) {

        String apikey = "D8D77C59-1BA5-3F41-AFEB-A7BDD7B52198";
        String searchType = "ROAD";
        String epsg = "epsg:4326";

        StringBuilder sb = new StringBuilder("https://api.vworld.kr/req/address");
        sb.append("?service=address");
        sb.append("&request=getCoord");
        sb.append("&format=json");
        sb.append("&crs=" + epsg);
        sb.append("&key=" + apikey);
        sb.append("&type=" + searchType);
        sb.append("&address=" + URLEncoder.encode(mainLogic.userAdr(userid), StandardCharsets.UTF_8));

        try {
            URL url = new URL(sb.toString());
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));

            JSONParser jspa = new JSONParser();
            JSONObject jsob = (JSONObject) jspa.parse(reader);
            JSONObject jsrs = (JSONObject) jsob.get("response");
            JSONObject jsResult = (JSONObject) jsrs.get("result");
            JSONObject jspoitn = (JSONObject) jsResult.get("point");

            Map<String, Object> map = new HashMap<>();

            map.put("x", jspoitn.get("x"));
            map.put("y", jspoitn.get("y"));

            return g.toJson(map);
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/main/order/detail")
    public String orderDetail(String orderid) {

        return g.toJson(mainLogic.orderDetail(orderid));
    }


}
