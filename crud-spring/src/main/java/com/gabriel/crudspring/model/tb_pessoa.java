package com.gabriel.crudspring.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;


@Data
@Entity(name = "tb_pessoa")
public class tb_pessoa{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 50, nullable = false)
    private String surname;

    @Column(length = 14, nullable = false)
    private String cpf;
    
    @Column(length = 7, nullable = false)
    private String status;

    @Column(nullable = false)
    private Date dateRegister;
    
}
