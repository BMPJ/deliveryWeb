package com.backend.deliveryweb.dao;

import com.backend.deliveryweb.vo.Carts;
import com.backend.deliveryweb.vo.Orders;
import com.backend.deliveryweb.vo.Reviews;
import com.backend.deliveryweb.vo.Users;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class MainDao {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;

    public int join(Users users) {
        return sqlSessionTemplate.update("join", users);
    }

    public int login(Users users) {
        Integer result = sqlSessionTemplate.selectOne("login", users);
        return (result != null) ? result : 0; // null이면 0으로 처리
    }

    public List<String> session(String userid) {
        return sqlSessionTemplate.selectList("session", userid);
    }

    public List<Map<String, Object>> userInfo(String userid) {
        return sqlSessionTemplate.selectList("userInfo", userid);
    }

    public List<Map<String, Object>> category(int type) {
        return sqlSessionTemplate.selectList("category", type);
    }

    public List<Map<String, Object>> getDeliveryStores(String category) {
        return sqlSessionTemplate.selectList("getDeliveryStores", category);
    }

    public List<Map<String, Object>> getStores(String storeid) {
        return sqlSessionTemplate.selectList("getStores", storeid);
    }

    public List<Map<String, Object>> getMenu(String storeid) {
        return sqlSessionTemplate.selectList("getMenu", storeid);
    }


    public List<Map<String, Object>> getOption(String menuid) {
        return sqlSessionTemplate.selectList("getOption", menuid);
    }

    public int checkCart(Carts carts) {
        return sqlSessionTemplate.selectOne("checkCart", carts);
    }

    public void deleteCart(String userid) {
        sqlSessionTemplate.delete("deleteCart", userid);
    }

    public int plusQuantity(Carts carts){
        return sqlSessionTemplate.update("plusQuantity", carts);
    }

    public int cart(Carts carts) {
        return sqlSessionTemplate.update("cart", carts);
    }

    public List<Map<String, Object>> getCart(String userid) {
        return sqlSessionTemplate.selectList("getCart", userid);
    }

    public List<Map<String, Object>> cartMenu(String menuid) {
        return sqlSessionTemplate.selectList("cartMenu", menuid);
    }

    public List<Map<String, Object>> cartMenuOption(String menuOptionId) {
        return sqlSessionTemplate.selectList("cartMenuOption", menuOptionId);
    }

    public int deliveryPay(Orders orders) {
        return sqlSessionTemplate.update("deliveryPay", orders);
    }

    public List<Map<String, Object>> orderList(String userid) {
        return sqlSessionTemplate.selectList("orderList", userid);
    }

    public List<Map<String, Object>> getOrder(String orderid) {
        return sqlSessionTemplate.selectList("getOrder", orderid);
    }

    public int reviewWrite(Reviews reviews) {
        return sqlSessionTemplate.update("reviewWrite", reviews);
    }

    public List<Map<String, Object>> reviewList(String storeid) {
        return sqlSessionTemplate.selectList("reviewList", storeid);
    }

    public List<Map<String, Object>> reviewCount(String storeid) {
        return sqlSessionTemplate.selectList("reviewCount", storeid);
    }

    public String userAdr(String userid) {
        return sqlSessionTemplate.selectOne("userAdr", userid);
    }

    public int cartDeleteMenu(String cartid) {
        return sqlSessionTemplate.delete("cartDeleteMenu", cartid);
    }

    public List<Map<String, Object>> orderDetail(String orderid) { return sqlSessionTemplate.selectList("orderDetail", orderid); }
}
