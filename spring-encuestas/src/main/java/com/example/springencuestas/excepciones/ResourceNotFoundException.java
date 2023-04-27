package com.example.springencuestas.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionId=1L;
    //Excepcion personalizada
    public ResourceNotFoundException(String mensaje){
        super(mensaje);
    }
}
