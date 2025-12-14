package com.example.sweetshop.service;

import com.example.sweetshop.model.Sweet;
import com.example.sweetshop.repository.SweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SweetService {

    @Autowired
    private SweetRepository sweetRepository;

    public List<Sweet> getAllSweets() {
        return sweetRepository.findAll();
    }

    public Sweet addSweet(Sweet sweet) {
        return sweetRepository.save(sweet);
    }

    public Sweet purchaseSweet(Long id) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        if (sweet.getQuantity() <= 0) {
            throw new RuntimeException("Sweet is out of stock");
        }

        sweet.setQuantity(sweet.getQuantity() - 1);
        return sweetRepository.save(sweet);
    }
}
