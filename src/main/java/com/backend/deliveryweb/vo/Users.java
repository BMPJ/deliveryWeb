package com.backend.deliveryweb.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Users {
     private String userid;
     private String password;
     private String name;
     private String nickname;
     private String phone;
     private String email;
     private String grade;
     private String zipcode;
     private String address;
     private String address_detail;
     private String provider;
     private int status;
     private int role;

}
