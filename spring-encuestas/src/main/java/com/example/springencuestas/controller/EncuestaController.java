package com.example.springencuestas.controller;

import com.example.springencuestas.excepciones.ResourceNotFoundException;
import com.example.springencuestas.model.Encuesta;
import com.example.springencuestas.model.Usuario;
import com.example.springencuestas.repository.EncuestaRepository;
import com.example.springencuestas.service.EncuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/encuesta")
@CrossOrigin(origins ="http://localhost:4200")
public class EncuestaController {
    //Inyeccion de dependencia del service
    @Autowired
    private EncuestaService service;
    //Inyeccion de dependencia de repository
    @Autowired
    private EncuestaRepository repository;

    //Listar encuestas con respuestas
    @GetMapping
    public List<Encuesta> listar(){
        return service.listar();
    }

    //Responder encuestas
    @PostMapping
    public ResponseEntity<?> crear(@RequestBody Encuesta encuesta){
        Encuesta encuestaDb= service.add(encuesta);
        return ResponseEntity.status(HttpStatus.CREATED).body(encuestaDb);
    }
    //Buscar encuesta por ID
    @GetMapping("/{id}")
    public ResponseEntity<Encuesta> obtenerEncuestaPorId(@PathVariable Long id){
        Encuesta encuesta=repository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException(("No existe la respuesta con id"+id)));
        return ResponseEntity.ok(encuesta);
    }

    //Eliminar respuesta de encuesta
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> eliminar(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
