package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.MainDao;
import com.backend.deliveryweb.vo.Carts;
import com.backend.deliveryweb.vo.Orders;
import com.backend.deliveryweb.vo.Reviews;
import com.backend.deliveryweb.vo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class MainLogic {

    @Autowired
    private MainDao mainDao;

    public int join(Users users) {
        return mainDao.join(users);
    }

    public int login(Users users) {
        return mainDao.login(users);
    }

    public List<String> session(String userid) {
        return mainDao.session(userid);
    }

    public List<Map<String, Object>> userInfo(String userid) {
        return mainDao.userInfo(userid);
    }

    public List<Map<String, Object>> category(int type) {
        return mainDao.category(type);
    }

    public List<Map<String, Object>> getDeliveryStores(String category) { return mainDao.getDeliveryStores(category); }

    public List<Map<String, Object>> getStores(String storeid) {
        return mainDao.getStores(storeid);
    }

    public List<Map<String, Object>> getMenu(String storeid) {
        return mainDao.getMenu(storeid);
    }

    public List<Map<String, Object>> getOption(String menuid) {
        return mainDao.getOption(menuid);
    }

    public int selectCart(String userid) {
        return mainDao.selectCart(userid);
    }

    public void deleteCart(String userid) { mainDao.deleteCart(userid);}

    public int cart(Carts carts) {return mainDao.cart(carts); }

    public List<Map<String, Object>> getCart(String userid) { return mainDao.getCart(userid); }

    public List<Map<String, Object>> cartMenu(String menuid) { return mainDao.cartMenu(menuid); }

    public List<Map<String, Object>> cartMenuOption(String menuOptionId) { return mainDao.cartMenuOption(menuOptionId); }


    public int deliveryPay(Orders orders) {
        return mainDao.deliveryPay(orders);
    }

    public List<Map<String, Object>> orderList(String userid) {
        return mainDao.orderList(userid);
    }

    public List<Map<String, Object>> getOrder(String orderid) { return mainDao.getOrder(orderid);}

    public int reviewWrite(Reviews reviews) { return mainDao.reviewWrite(reviews); }

    public List<Map<String, Object>> reviewList(String storeid) { return mainDao.reviewList(storeid); }

    public List<Map<String, Object>> reviewCount(String storeid) { return mainDao.reviewCount(storeid); }
}
