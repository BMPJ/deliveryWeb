package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Stores {
    private String storeId;
    private String name;
    private int type;
    private String category;
    private String address;
    private String address_detail;
    private String storePictureUrl;
    private String phone;
    private String content;
    private int minDeliveryPrice;
    private int deliveryTip;
    private int minDeliveryTime;
    private int maxDeliveryTime;
    private int rating;
    private int dibsCount;
    private int reviewCount;
    private String operationHours;
    private String closedDays;
    private String deliveryAddress;
    private int status;
}
