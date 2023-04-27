package com.example.springencuestas.service;

import com.example.springencuestas.model.Usuario;

import java.sql.SQLException;
import java.util.Optional;

public interface RegistrarService {

    //Metodo para listar usuarios
    public Iterable<Usuario> findAll();

    //Metodo para encontrar un usuario por su id
    public Optional<Usuario> findById(Long id);

    //Metodo para guardar usuarios
    public Usuario save(Usuario usuario);
    //Metodo para eliminar usuario
    public void deleteById(Long id);

}
