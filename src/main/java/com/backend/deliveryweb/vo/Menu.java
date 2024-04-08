package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Menu {
    private String menuid;
    private String storeid;
    private String category;
    private String menuName;
    private int price;
    private String menuContents;
    private String popularity;
    private int status;
}
