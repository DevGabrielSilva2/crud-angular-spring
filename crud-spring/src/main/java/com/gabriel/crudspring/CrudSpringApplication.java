package com.gabriel.crudspring;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gabriel.crudspring.model.tb_pessoa;
import com.gabriel.crudspring.repository.PeopleRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(PeopleRepository peopleRepository) {
		return args -> {
			peopleRepository.deleteAll();

			tb_pessoa p = new tb_pessoa();
			p.setName("Gabriel");
			p.setSurname("Silva");
			p.setCpf("024.974.003-69");
			p.setDateRegister(new Date());
			p.setStatus("enable");

			peopleRepository.save(p);
		};
	}

}
