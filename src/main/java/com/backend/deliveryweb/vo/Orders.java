package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Orders {
    private String storeid;
    private String userid;
    private String paymentMethod ;
    private int totalPrice;
    private String requests;
    private int status;
    private String orderName;
}
