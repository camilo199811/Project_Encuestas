package com.example.springencuestas.repository;

import com.example.springencuestas.model.Encuesta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EncuestaRepository extends CrudRepository<Encuesta,Long> {
    //Metodo para listar las respuestas de las encuestas
    List<Encuesta> findAll();

    //Guardar respuestas
    Encuesta save(Encuesta encuesta);

    //Eliminar Respuestas
    void deleteById(Encuesta encuesta);
}
