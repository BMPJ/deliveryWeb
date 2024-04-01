package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reviews {
    private String storeid;
    private String userid;
    private int rating;
    private String content;
    private String reviewPictureUrl;
    private int status;
    private String orderName;
    private String orderid;
}
