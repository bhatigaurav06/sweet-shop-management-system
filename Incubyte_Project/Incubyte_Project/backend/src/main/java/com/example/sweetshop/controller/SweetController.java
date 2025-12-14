package com.example.sweetshop.controller;

import com.example.sweetshop.model.Sweet;
import com.example.sweetshop.service.SweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sweets")
@CrossOrigin(origins = "http://localhost:3000")
public class SweetController {

    @Autowired
    private SweetService sweetService;

    @GetMapping
    public List<Sweet> getAllSweets() {
        return sweetService.getAllSweets();
    }

    @PostMapping
    public Sweet addSweet(@RequestBody Sweet sweet) {
        return sweetService.addSweet(sweet);
    }

    @PostMapping("/{id}/purchase")
    public Sweet purchaseSw
