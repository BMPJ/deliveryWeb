package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Carts {
    private String cartid;
    private String userid;
    private String storeid;
    private String menuid;
    private String menuOptionId;
    private int quantity;
}
