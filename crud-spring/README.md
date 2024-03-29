```
# crud-angular-spring
<p align="center">
 <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
 <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
 </p>

> **🚀** CRUD desenvolvido em Java 22 com Spring Boot 3.

## O que é?

> Este projeto é um CRUD de pessoas desenvolvido em Java 22 com Spring Boot 3.

## Tecnologias utilizadas

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.11/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.11/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.0.11/reference/htmlsingle/index.html#web)
* [H2 Database](https://www.sqlite.org/)

## Como executar
> 1. Clone o repositório do projeto:
```sh
git clone https://github.com/SmartPracast/crud-angular-spring/tree/main/crud-spring
```

> 2. Execute o comando para iniciar a aplicação:
```sh
mvn spring-boot:run
```

> Acesse a aplicação no navegador em http://localhost:8080/
> 
# Estrutura de Pastas do Projeto
```markdown
crud-spring/
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   ├── test/
├── target/
├── pom
├── README.md
└── ...
```
## Endpoints da API
A seguir, são listados os endpoints da API para executar as operações CRUD em produtos:

### 1. **Criar Novo Registro de Pessoa**

- **Método**: POST
- **Endpoint**: `/api/people`
- **Descrição**: Retorna `cpf`, `dateRegister`, `id`, `name`, `status` e `esurname`

### 2. **Listar Pessoas Cadastradas**

- **Método**: GET
- **Endpoint**: `/api/people`
- **Descrição**:Retorna uma lista de todas as pessoas cadastradas.

### 3. **Atualizar Registro Pessoa**

- **Método**: PUT
- **Endpoint**: `/api/people/:id`
- **Descrição**: Atualiza os dados de um pessoa existente com base no ID fornecido.

### 4. **Remover Registro Pessoa**

- **Método**: DELETE
- **Endpoint**: `/api/people/:id`
- **Descrição**: Remove o registro de uma pessoa existente com base no ID fornecido.

## Funcionalidades
A aplicação permite que você cadastre, edite e exclua registros de pessoas.

## Contribuições
São bem-vindas contribuições para este projeto. Para contribuir, basta criar um fork do repositório e enviar um pull request com suas alterações.


## Agradecimentos
Agradeço a oportunidade de participar do processo seletivo, que me motivou a desenvolver este projeto.
