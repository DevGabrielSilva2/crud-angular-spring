package com.gabriel.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gabriel.crudspring.model.tb_pessoa;

@Repository
public interface PeopleRepository extends JpaRepository<tb_pessoa, Long >{

    
}
