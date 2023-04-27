package com.example.springencuestas.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "usuario")
public class Usuario {

    //Datos de usuario
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String emailId;
    private String username;
    private String password;
    @Column(name = "date_reated")
    @CreationTimestamp
    private Date dateCreated;

    public  Usuario(){}

    public Usuario(Long id, String email, String username, String password) {
        this.id = id;
        this.emailId = email;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmailId () {
        return emailId ;
    }

    public void setEmailId (String emailId ) {
        this.emailId  = emailId ;
    }

    public String getUsername() {
        return username;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
