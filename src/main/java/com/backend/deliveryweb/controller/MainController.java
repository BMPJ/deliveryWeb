package com.backend.deliveryweb.controller;

import com.backend.deliveryweb.logic.MainLogic;
import com.backend.deliveryweb.vo.Carts;
import com.backend.deliveryweb.vo.Orders;
import com.backend.deliveryweb.vo.Reviews;
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
    public String deliveryGetCategory(@RequestParam("category") String category) {

       List<Map<String, Object>> list = mainLogic.getDeliveryStores(category);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/storeid")
    public String deliveryStoreid(@RequestParam ("storeid") String storeid){

       List<Map<String, Object>> list = mainLogic.getStores(storeid);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/storeMenu")
    public String deliveryStoreMenu(@RequestParam ("storeid") String storeid){

       List<Map<String, Object>> list = mainLogic.getMenu(storeid);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/menuOption")
    public String deliveryMenuOption(@RequestParam ("menuid") String menuid){

        List<Map<String, Object>> list = mainLogic.getOption(menuid);

        return g.toJson(list);
    }

    @PostMapping("/main/delivery/cart")
    public String deliveryCart(@RequestBody Carts carts){

       int i = mainLogic.selectCart(carts.getUserid());

       if (i >= 0) {
            mainLogic.deleteCart(carts.getUserid());
       }
       return String.valueOf(mainLogic.cart(carts));
    }

    @GetMapping("/main/delivery/cart")
    public String deliveryCartGet(@RequestParam String userid){

       List<Map<String, Object>> list = mainLogic.getCart(userid);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/cart/menu")
    public String getMenu(@RequestParam String menuid){

       List<Map<String, Object>> list = mainLogic.cartMenu(menuid);

       return g.toJson(list);
    }

    @GetMapping("/main/delivery/cart/menuOptionId")
    public String getOption(@RequestParam String menuOptionId){

        List<Map<String, Object>> list = mainLogic.cartMenuOption(menuOptionId);

        return g.toJson(list);
    }

    @PostMapping("/main/delivery/cart/pay")
    public String pay(@RequestBody Orders orders){

       return String.valueOf(mainLogic.deliveryPay(orders));
    }

    @GetMapping("/main/delivery/order")
    public String order(@RequestParam String userid){

        System.out.println(mainLogic.orderList(userid));

       return g.toJson(mainLogic.orderList(userid));
    }

    @GetMapping("/main/delivery/getOrder")
    public String getOrder(String orderid){

       return g.toJson(mainLogic.getOrder(orderid));
    }

    @PostMapping("/main/delivery/reviewWrite")
    public String reviewWrite(@RequestBody Reviews reviews){

        System.out.println(reviews);

       return String.valueOf(mainLogic.reviewWrite(reviews));
    }


}
