package com.gabriel.crudspring.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.crudspring.model.tb_pessoa;
import com.gabriel.crudspring.repository.PeopleRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/people")
public class PeopleController {
    
    private final PeopleRepository peopleRepository;

    public PeopleController(PeopleRepository peopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    @GetMapping
    public List<tb_pessoa> list() {
        return peopleRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<tb_pessoa> findById(@PathVariable Long id) {
        return  peopleRepository.findById(id)
        .map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
        
    }

    // @GetMapping("api/people/search")
    // public ResponseEntity<List<People>> findByCriteria(@RequestParam(required = false) Long id,
    //                                                    @RequestParam(required = false) String name,
    //                                                    @RequestParam(required = false) String surname,
    //                                                    @RequestParam(required = false) String cpf,
    //                                                    @RequestParam(required = false) String status,
    //                                                    @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateRegister) {
        
    //                                                     List<People> filteredPeople = new ArrayList<>();  
    //     List<People> allPeople = peopleRepository.findAll();      
        
    //     //By Id
    //     if (id != null) {
    //     filteredPeople.addAll(allPeople.stream()
    //             .filter(person -> person.getId().equals(id))
    //             .collect(Collectors.toList()));
    //     }

    //     // By Name
    //     if (name != null) {
    //         filteredPeople.addAll(allPeople.stream()
    //                 .filter(person -> person.getName().equals(name))
    //                 .collect(Collectors.toList()));
    //     }

    //     // By Surname
    //     if (surname != null) {
    //         filteredPeople.addAll(allPeople.stream()
    //                 .filter(person -> person.getSurname().equals(surname))
    //                 .collect(Collectors.toList()));
    //     }

    //     // By CPF
    //     if (cpf != null) {
    //         filteredPeople.addAll(allPeople.stream()
    //                 .filter(person -> person.getCpf().equals(cpf))
    //                 .collect(Collectors.toList()));
    //     }

    //     if (!filteredPeople.isEmpty()) {
    //         return ResponseEntity.ok().body(filteredPeople);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @PutMapping("/{id}")
    public ResponseEntity<tb_pessoa> update(@PathVariable Long id, @RequestBody tb_pessoa person) {
        return  peopleRepository.findById(id)
        .map(record -> {
            record.setName(person.getName());
            record.setSurname(person.getSurname());
            record.setCpf(person.getCpf());
            record.setStatus(person.getStatus());
            tb_pessoa updated = peopleRepository.save(record);
            return ResponseEntity.ok().body(updated);
        })
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public tb_pessoa create(@RequestBody tb_pessoa people) {
        people.setDateRegister(new Date());

        return peopleRepository.save(people);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return peopleRepository.findById(id)
        .map(record -> {
            peopleRepository.delete(record);
            return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
    }
    
}
