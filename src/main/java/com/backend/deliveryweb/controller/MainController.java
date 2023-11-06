package com.backend.deliveryweb.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/main/*")
public class MainController {
    @GetMapping("/main")
    public void main(){

    }
}
