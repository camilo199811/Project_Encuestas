package com.example.springencuestas.service;

import com.example.springencuestas.model.Usuario;
import com.example.springencuestas.repository.RegistrarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Connection;
import java.util.Optional;

@Service
public class ResgistrarServiceImpl implements RegistrarService{

   //Inyeccion de dependencia
    @Autowired
    private RegistrarRepository registrarRepository;

    //Implementacion del metodo listar usuarios
    @Override
    @Transactional(readOnly = true)
    public Iterable<Usuario> findAll() {
        return registrarRepository.findAll();
    }
    //Implementacion del metodo listar usuarios por id
    @Override
    @Transactional(readOnly = true)
    public Optional<Usuario> findById(Long id) {
        return registrarRepository.findById(id);
    }
    //Implementacion del metodo agregar usuarios
    @Override
    @Transactional
    public Usuario save(Usuario usuario) {
        return registrarRepository.save(usuario);
    }
    ////Implementacion del metodo eliminar usuarios
    @Override
    @Transactional
    public void deleteById(Long id) {
        registrarRepository.deleteById(id);
    }
}
