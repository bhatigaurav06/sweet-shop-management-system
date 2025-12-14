package com.example.sweetshop.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {
        // Dummy auth (JWT can be added later)
        return Map.of("token", "dummy-jwt-token");
    }

    @PostMapping("/register")
    public String register(@RequestBody Map<String, String> request) {
        return "User registered successfully";
    }
}
