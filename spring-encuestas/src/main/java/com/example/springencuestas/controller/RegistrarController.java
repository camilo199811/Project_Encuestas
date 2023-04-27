package com.example.springencuestas.controller;

import com.example.springencuestas.model.Usuario;
import com.example.springencuestas.repository.RegistrarRepository;
import com.example.springencuestas.service.RegistrarService;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/registrar")
@CrossOrigin(origins ="http://localhost:4200")
public class RegistrarController {

    @Autowired
    private RegistrarService registrarService;
    @Autowired
    private RegistrarRepository repo;


    //validar ingreso
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Usuario userData){

        Usuario user=repo.findByUsername(userData.getUsername());
        if(user.getPassword().equals(userData.getPassword()))
            return ResponseEntity.ok(user);
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    //Ver usuarios
    @GetMapping
    public ResponseEntity<?> listar(){
        return ResponseEntity.ok().body(registrarService.findAll());
    }

    //Ver usuario por id
    @GetMapping("/{id}")
    public ResponseEntity<?> ver(@PathVariable Long id){
        //Buscamos el usaurio en BD
        Optional<Usuario> o=registrarService.findById(id);
        //Si no se encuentra
        if(!o.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(o.get());
    }

    //Crear un nuevo usuario
    @PostMapping
    public ResponseEntity<?> crear(@RequestBody Usuario usuario){
       Usuario usuarioDb= registrarService.save(usuario);
       return ResponseEntity.status(HttpStatus.CREATED).body(usuarioDb);
    }

}
