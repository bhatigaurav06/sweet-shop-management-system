package com.example.sweetshop.repository;

import com.example.sweetshop.model.Sweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SweetRepository extends JpaRepository<Sweet, Long> {
}
