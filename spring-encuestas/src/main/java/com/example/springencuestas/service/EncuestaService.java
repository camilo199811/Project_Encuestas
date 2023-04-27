package com.example.springencuestas.service;

import com.example.springencuestas.model.Encuesta;

import java.util.List;

public interface EncuestaService {


    //Metodo para listar respuestas de encuestas
    List<Encuesta> listar();

    //Metodo para añadir respuestas
    Encuesta add(Encuesta encuesta);
    //Metodo para eliminar respuestas
    public void deleteById(Long id);

}
