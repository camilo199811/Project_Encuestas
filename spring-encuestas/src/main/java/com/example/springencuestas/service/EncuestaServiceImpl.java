package com.example.springencuestas.service;

import com.example.springencuestas.model.Encuesta;
import com.example.springencuestas.repository.EncuestaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EncuestaServiceImpl implements EncuestaService{

    //Se inyecta encuestaRepositori para poder usar sus metodos
    @Autowired
    private EncuestaRepository encuestaRepository;

    //Implementacion del metodo listar del service
    @Override
    public List<Encuesta> listar() {
        return encuestaRepository.findAll();
    }

    //Implementacion del metodo añadir respuestas del service
    @Override
    public Encuesta add(Encuesta encuesta) {
        return encuestaRepository.save(encuesta);
    }


    //Implementacion del metodo eliminar respuestas del service
    @Override
    public void deleteById(Long id) {
        encuestaRepository.deleteById(id);
    }


}
