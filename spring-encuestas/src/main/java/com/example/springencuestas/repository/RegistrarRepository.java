package com.example.springencuestas.repository;

import com.example.springencuestas.model.Usuario;

import org.springframework.data.repository.CrudRepository;

public interface RegistrarRepository extends CrudRepository<Usuario,Long> {
    //Buscar un usuario por su username
    Usuario findByUsername(String username);
}
